+++
title = "Extreme Programming Explained - A Review"
author = "Kent Beck"
date = "2024-03-04"
tags = ["books", "software"]
+++

# A brief summary

Extreme Programming is a way of writing software as a team. It's main goal is to reduce the risk of changes, by building the entire framework around allowing change.

No one knows what a software project should actually do at the start of its development. A client could sit for weeks and still be wrong about requirements. This is natural. You can only see what you actually need once you start making it.

Instead of imposing harsh rules on new requirements, XP embraces new requirements as part of the process.

## 4 Variables a team can adjust

1. Cost
2. Time
3. Quality
4. Scope

### Cost

A little more money can make things go faster, but too much can be a problem. 10 Engineers? Good. 100? You might be shooting yourself in the foot

### Time

More time = More quality and increase scope.

### Quality

Other methodologies might sacrifice quality (take shortcuts, no tests), but you only save yourself time in the very short term, in the long run this will _always_ come back to hurt you. XP doesn't negotiate on quality.

### Scope

Which features do you actually need?

Scope comes directly from requirements, knowing which features to build and how flexible they must be.

## 4 XP Values

1. Communication - Talk constantly between developers and client, so work out scope of features.
2. Simplicity - The code that exists served the current scope and no more. Complexity is the enemy.
3. Feedback - Between developers, clients and managers.
4. Courage - To change what needs to be changed and speak up about problems, even if they are unconfortable.

## Development in XP

### Pair Programming

Beck says that any production code should be done with two programmers at one machine. Beck claims this creates a very high level of software because the programmers will hold each other accountable to writing good tests, writing them before the code, and writing just enough code to make the tests pass.

I'm not sure I agree this is correct, I've been in many pairing sessions where we both look guiltily at each other before writing some _bad_ code we know we will have to fix later, just to meet a deadline.

I don't disagree with Beck, but I don't agree _all_ production code should be done by pairs. Some? Sure. But individual contributions are still great. That being said, I would gladly spend 30% of my development time pairing.

### Testing - Full TDD

No code before tests. No more code than the code needed for the tests to pass.

This creates robust software, that is just as simple as the scope requires it to be.

I completely agree with this, often writing tests is about me as a programmer writing a specification, not so much testing a feature works. This also creates a self imposed restriction, I'm just going to write code to make tests green, I'm not going to write more. Whereas if you don't have tests, then you might get carried away writing code.

### Constantly Refactor

If the system ever becomes more complicated than needed. Change it. This is possible because of _testing_ being done thoroughly throughout the project. Without these tests to aid refactoring, it would not be possible.

The presence of good tests means you can change the entire architecture of the system, and still be satisfied that it will work.

### Constant Integration

Your code should never sit for more than a few hours without being checked against the rest of the code in the project.

As a way of writing software, I love XP. I think it nails it, when it comes to writing quality software. I mentioned I didn't fully agree with the _pair programming_ take, but I don't completely disagree with it either, I can see why (specially pre-2000s), this was such a good idea.

Overall I think Version Control, and messaging platforms (discord, slack...) have gotten so good, that there isn't a need to even be in the same physical location (Beck even mentioned this in a recent blog post).

But I see the need for present, interaction with other programmers.

There are other attributes that relate to development in XP, such as:

- Collective ownership - Everyone can change everything in the project.
- 40-Hour workweek - A tired programmer is a bad programmer.
- Accepted responsibility - Tasks aren't given, they are accepted.

## Planning with XP

Beck refers to this as _the planning game_. Where business people and programmers play a back and sort on what needs to be done, and what can be done

### Business

- Scope
- Priority
- Composition of releases
- Dates of releases

### Programmers

- Estimates
- Consequences
- Process
- Detailed Scheduling

The programmers will push back on business, specially on scope, and make business aware of the consequences of having certain features or not. This way everyone can come away happy, if both parties give some way to the other, the best possible sofware will be built.

### Small Releases

XP wants systems to be in production ASAP. A system in production is vastly different from one that is not, you simply cannot gather as much information if you are not in production.

Because XP has a very high code standard (testing, refactoring), you can happy to make very big changes even _after_ you have released to production.

# Thoughts

This was a very brief overview of this book. Beck goes into detail about many other aspects of this methodology, but I think this mostly covers it.

It is interesting how much of this is mainstream now. Constant Integration for example, I don't see a project _without_ it. What more projects need is the focus on testing and refactoring.

It's a hard sell for most, because in the short term it does slow you down, but overtime it speeds you up magnitudes. And in high-stress environments (which are most software jobs), a programmer is going to cave, and just not test or refactor code. This is both a management problem and an individual problem.

I think XP isn't so much a methodology to follow strictly, but a base for your own systems. It provides guidelines as to how you should plan your sprints (it does insist on sprints of 1-3 weeks), but how you plan them can be up to you. What doesn't change it the discussion between business and development, and the constantly communication between programmers and the customer, so that we can incorporate any changes the customer might (will) want to make, into our sprints, without any risk.

Really that's all XP is about, not preventing change, but being ready for change, so that the risk of making a change is the same no matter when it's made in the development process (or at least a very slow increase over time).
