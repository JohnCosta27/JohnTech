+++
title = "The importance of loose coupling"
tags = ["software"]
date = "2025-02-05"
author = "John Costa"
toc = true
+++

Recently at work, I was faced with creating a system that needed to integrate between two very big modules of code. These two modules are practically our entire product at [Decipad](https://decipad.com). And when you have to integrate such big parts of code, it might be tempting to do it, and test by running the server and click around in the browser (in this case, our product is a web app).

However, I didn't want to continue this pattern (we had some code that integrated these two systems, but in a heavily coupled way), and therefore I set about with a slightly different approach, and when I was done I had a much greater appreciation for interfaces (and higher order functions).

## The Problem

I need to pass information from one module (the `Editor`), to another (the `Computer`). I also need to keep some state, and do some comparisons.

Let me illustrate what I wanted to achieve by writing some pseudocode, in a non-testable way.

```ts
const setup = (computer: Computer, editor: Editor): void => {
	editor.on('some-event', (e) => {
		const proccessedEvent = processEvent(e); // Some function
		computer.push({ ...somethingComplicated, x: processedEvent });
	});
}
```

If I wanted to test this part of code, I would have to create an instance of both of these two modules. This isn't the easiest approach, because the integration I needed would have to do some pretty heavy setup for tests, which would mean the test would mostly be boilerplate, not to mention unpredictable, as these two parts of code come with a huge amount of potentially buggy code.

This is a simple enough function -  and at first -  it is tempting to just wire it together and move on, however, in my case I also needed to keep track of some state to avoid pushing to the computer too often.

```ts
const setup = (computer: Computer, editor: Editor): void => {
	const state = new Map<string, Event>();
	
	editor.on('some-event', (e) => {
		const proccessedEvent = processEvent(e); // Some function

		const existingEvent = state.get(e.id);
		if (someComparison(existingEvent, e)) {
			computer.push({ ...somethingComplicated, x: processedEvent });
			state.set(e.id, e);
		}
	});
}
```

This function still looks fairly innocent, but you can see the growing complexity. In order to test in isolation that my state mechanism works, I would need to setup an entire editor, an entire computer and then I would have to use this event system through the editor in order to test my function. This might be OK in an integration test where you want to test groups of systems, but as a unit test to test the individual logic of this function, it isn't ideal.

## Only use what you need

I don't want to pass the whole computer and the whole editor to this function. Instead a better approach that would allow me to test this in a much better way, is to instead pass an event emitted (or some other interface), and instead of the computer, I could pass a higher order function. This way I no longer need an editor or a computer to test this code.

```ts
const setup = (onEventChange: (e: Event) => void, eventEmitter: EventEmitter) => {
	const state = new Map<string, Event>();
	
	eventEmitter((e) => {
		const proccessedEvent = processEvent(e); // Some function

		const existingEvent = state.get(e.id);
		if (someComparison(existingEvent, e)) {
			onEventChange(e);
			state.set(e.id, e);
		}
	});
}
```

You can even go a step further and remove the events all together by returning another higher order function, this way your function doesn't have to deal with `EventEmitter`, but instead with only `Event`.

```ts
const setup = (onEventChange: (e: Event) => void) => {
	const state = new Map<string, Event>();
	
	return (e: Event) => {
		const proccessedEvent = processEvent(e); // Some function

		const existingEvent = state.get(e.id);
		if (someComparison(existingEvent, e)) {
			onEventChange(e);
			state.set(e.id, e);
		}
	};
}
```

Now this function has been boiled down to it's main purpose, to perform some action when an event has changed based on some state. You can then test this code very easily like this

```
const emittedEvents = [];

const eventHandler = setup((event) => emittedEvents.push(event));

eventHandler({ ...event1 });
eventHandler({ ...event2 });

expect(emittedEvents).toMatchObject([...whatever you want])
```

This way, our tests can focus on the fundamentals, and for the future they can easily show another programmer what the test is focusing on, rather than have them looking at a tone of boiler place. This test will also run a lot faster than if you have to do a tone of setup, although I don't think this is a huge priority.

## Conclusion

It may be difficult to not reach for the solution straight away, as I mentioned the first function I showed is fairly simple and easy to understand, but it isn't testable, and it is heavily coupled.

When you're programming a solution, think about what you're trying to achieve with a specific function, or a specific module, and try and work out the best interfaces and parameters to give this function. A good rule of thumb that I've started using is figuring out how I'd like to test the code, and what I'd like the tests to show, this can lead you to a solution fairly quickly.

This isn't new of course, all I've talked about has been established in software engineering for decades (I've sort of described dependency injection, and interfaces), but it is interest when we see these best practices in our code, and it's exciting to see why they work, it makes programming much more fun for me, because I don't have to keep a massive amount of information in my head (the editor and the computer), but can instead focus on what is right in front of me.
