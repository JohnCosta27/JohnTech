+++
title = "Interfaces > Classes - A refactor story."
date = "2023-11-18"
tags = ["software"]
toc = true
+++

# Introduction

Recently I was tasked with making a sizeable change to my companies product. There were many parts to the change, but I will summarise the more important one.

# The Problem

## UserEvents

We have a chunk of code, let's say a class called **UserEvents**, this class (not a class, but it makes more sense if I describe it as one) does many things, and a lot of business logic, but it is self contained, by this I mean that is it not aware of other parts of the code.

Importantly, this class has a method called `apply`, a function that takes in events. It is used by the class to use these user events and actually apply them to the UI.

## EventCapture

The **EventCapture** is tasked with synching events from **UserEvents** and the outside. It has to do two things:

- Take events from **UserEvents** and save them remotely.
- Take remote events (from other clients for example), and sync them with the local **UserEvents**.

It is important to note, that every method that the **UserEvents** class has, were extended onto this class. I usually dislike inheritance, but in this case it actually made some sense. (However, it wasn't without cost, I'll discuss it the problems faced below).

## Implementation

The **UserEvents** class extended the **UserEvents** object, and took that important `apply` function, and wrapped it so it was able to capture all the events that would go into that function, like so:

```ts
const { apply } = userEvents;
userEvents.apply = (event) => {
  trackUserEvents(event);
  apply(event);
};
```

I don't love this implementation, as I think it obfuscates what the `apply` function actually is, and you become less confident in calling it. But I cannot deny that it did work well, for a long time without anyone needing to touch it.

# The New Requirements

The new requirements made it so I would now need various **UserEvents** objects, and this number would be determined by the user. This breaks the relationship that the **EventCapture** has with **UserEvents** because it now needs to account for multiple of them.

Not only does it need to track all the events from different **UserEvents** it needs to be able to forward remote events to the correct one locally.

## The Refactor

At this point I decided the best way forward was to create a new class called **Controller** (terrible name), which would intercept all the **UserEvents** classes locally, and forward them to **EventCapture**, meaning that **EventCapture** does not need to know about who sent the event, it just needs to track it, as all the events were massaged by my **Controller** class.

Remote events would be sent from **EventCapture** down into the **Controller** class which would then figure out which **UserEvents** it needs to forward events to.

And so I did, the new architecture looked like this:

```
                                                 /-- UserEvent
                                                /
Remote <----> EventCapture <----> Controller <- ---- UserEvent
                                                \
                                                 \-- UserEvent
```

This worked great architectural wise (there were some bugs, but that's for another story).

## The Problem

If you notice, I changed the **EventCapture** class to deal with **Controller** instead of **UserEvent**. This is not great because **Controller** does nothing by itself, it is a bridge between two other classes, so now I have tightly coupled **EventCapture** and any sub modules to deal with **Controller** classes, which are very different from **UserEvent** classes.

I had to change every test for **EventCapture** and many dependent modules, as well as a lot of other code which assumed a certain structure.

## The Obvious Solution

Use. An. Interface.

For some reason this completely skipped my brain when implementing this. All I had to do was create an interface that mimics **UserEvent**, in this case the interface would have been as easy as:

```ts
interface EventEmitter {
  apply: (event: Event) => void;
}
```

If the **Controller** class implements this interface, I can change the **EventCapture** to deal with **EventEmitter** interfaces instead of concrete classes, meaning I can test it in a more isolated way, and remove this tight coupling which I created.

# The Conclusion

Interfaces rule. To keep your code nice and decoupled try and use common interfaces between modules/classes so you don't end up having to refactor entire modules. This also improves the test ability of code massively.

Isolated modules, that do one thing very well. Next time I know to think very hard, before adding another coupling between modules again.
