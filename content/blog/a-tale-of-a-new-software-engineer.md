+++
title = "A tale of a new Software Engineer"
date = "2024-04-05"
author = "John Costa"
toc = true
tags = ["software", "work"]
+++

It has been close enough to a year now that I have written code for a living. I've done engineering jobs before this (I interned at Deci, for a year during my 3rd year of Uni), but I wanted to reflect on a full year of full time work.

# Background

I work at [Decipad](https://Decipad.com). We make an Excel alternative using notebooks (similar to Jupyter), with powerful number crunching capabilities, powered by our own language (really!) and the language's runtime, all tucked away by beautiful UI components.

Another important note is that Decipad is a startup, when I first joined in July 2022, we were still in closed beta, but since we have opened to the product and we're not actively marketing the product and trying to get some market fit, while still continuing to build the best product we can.

# Lessons learnt

Over the last 2 years I have learned a ton. I learnt what newer engineers don't think they will need to learn.

Even before going into my internship, I was a competent coder. I loved building projects, working with friends to build something cool, solving the advent of code (at least partially) ever since 2020. So I wasn't as green as some would think.

## Maintaining > Development

However, my experience never involved maintaining _other people's code_. Sure, I'd worked with other people on projects, but the code others produced was quite visible, and so it always felt like it was my code, and I understood it too. This really isn't the case in a big project.

Deci's codebase is still the biggest I've worked on. Big enough so that I cannot know everything about the project. I can be aware of many moving parts, but I don't instantly know how every part of the project works, which is what I was used to in previous projects.

This forced me to _read code_. To actually sit down and read code as if it's a story. I spend a big majority of my first few weeks working at Deci (during my internship), just reading code.

And this isn't even exclusive to code in Deci's codebase. As every JavaScript project, we have a ton of dependencies. So if I truly wanted to understand how the project worked on the whole, not just surface level, I had to again, sit down and read some _library code_. Git clone those bad boys, and open up Neovim and just go through it.

Apart from having to explore the codebase and read other people's code, I had to learn to write code that fits the puzzle. If someone in the past wrote an API a certain way, I can't just decide to write another part of code that has a different API for the sake of being different.

This has a few levels to it, if a certain part of the code prefers to use `const func = () => {}`, then I won't just start naming my functions `function AnotherFunc()`.

This isn't to say that I can't rip out code - refactoring is perhaps my favourite part of the job - but a refactor isn't warranted if the only reason for it is _'I just don't like it'_.

## Refactoring

My favourite.

Working on a large code base with more than 1 or 2 developers, with a product team that loves to change requirements, means that you have to constantly refactor code. This is normal, but if it isn't done, then your development speed will come to a halt.

I hadn't really refactored on a big scale before. Why would I refactor personal projects if they usually only last a few months and the requirements are fairly clear from the start? Sure, you can move functions around, dependency inject and many others, but I never need to do 50+, 100+ file changed refactors, like I have at Deci.

Refactorings are the unsung process of software engineering, methodologies like [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming), bake it into the development process, which I really like. But I work in an environment where everything needs to be shipped yesterday. This forces you as an engineer to make a decision.

1. Do I not refactor and have a slightly botched job?
2. Refactor the code before adding the feature.

I used to be a 50/50 split when I first started work. Sometimes you do just want to get the feature done. What's one more prop to this React component? A Boolean parameter to this function?

As I've grown as an engineer, I've realized I'm a solid 20/85 split. I will refactor beforehand, if a refactor is needed. This is because if you get into the habit of not refactoring, then you are just giving yourself a headache to refactor a massively more difficult piece of code later down the line, or giving one of your colleagues that headache.

Another reason I really like to refactor is more related to being part of a small dev team. We develop on trust, we trust team mates to do the best possible work, and will trust them to refactor the code if needed. But in a small team, it's easy to not do it, and if you don't do it, other's might also not do it. Be the change you want to see in your development process. I noticed at Deci that the more I would refactor code whilst adding features, and suggesting potential refactors to other parts of the code, other engineers started having the same conversations, and shifting code around to better fit the objective.

## Notes

There are many more lessons learnt, but I feel like these two were the most important, here's a list of others.

- Communication with team is extremely important.
- Writing the correct amount of code for a PR so other's don't have a hard time reviewing it.
- Test and test again, and maybe one more time.
- I dislike React.
- Delete code that doesn't fit purpose (comes under Refactoring).

# Working full time

I don't hear this talked about enough, but it's a big shift going from studying full time (from the age of 4 to 21), to working full time. That's 15 years of studying, now being replaced for work. And work is very different.

## Routine

I almost can't believe that it's been nearly a year since I finished university. The time just flew by. And part of this is the routine that comes with full time work.

You start to notice days just disappear, sit down at 9am and suddenly its 6pm and you've written hundreds of lines of code, tested multiple features, talked to many people, and the work day is done. It's crazy.

It's not that I don't enjoy the routine, I do. But I don't enjoy feeling like a passanger in my own life, so I try and break it up by doing more things outside of work, to try and break up the work routine.

I don't want my days to just be:

> Get up -> Work -> Eat -> Work -> Sleep

They should be more like

> Get up -> Work -> Eat/Read -> Work -> Do something fun -> Sleep

The do something fun part is extremely important, because this part of the day between 6pm and 9pm can just evaporate. So you must take an active role in doing something, scheduling something for that time so it doesn't fade away.

You won't want to, because you'll be tired and want to rest, but you must. Otherwise you won't do much else with life except work.

# Conclusion

I have learnt many things in my first year of full-time work. Most of them not coding related, but software engineering related.

I have learn to communicate effectively, with the correct people.

- To track progress more aggressively so everyone in my team is aligned.
- To write code that can be modified later.
- To refactor when refactoring is needed.

But I have also learnt softer skills:

- Be kind to co-workers, they are stressed enough.
- Don't blame, you fail together.
- Don't be afraid to ask for help, you'll save yourself a ton of time.
- Learn when to switch the computer off.
- Know which features are worth building for the business.

I look forward to many more years in this industry (hopefully), and will continue to aggressively learn as much as possible.
