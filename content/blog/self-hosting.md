+++
title = "Self Hosting"
date = "2025-06-08"
tags = ["self-hosting", "software"]
toc = true
+++

Since I moved into my [flat](https://en.wikipedia.org/wiki/Flat#Architecture), one of the first things I bought was a used computer which I could use as a server. This cost me £50, and it's not a very powerful machine. But this tiny machine has been a great source of fun for me. I want to break down what I'm doing with my own machine, but also the philosophy of self-hosting, and taking back control over your data, and deployment processes.

# Cloud can be bad
For many use-cases, using the cloud to host your projects, can be more trouble than the ol' server under the desk. I run mustly outward facing services on this machine, with some users and the service is very similar to what I would get if I hosted it on a VPS or some managed service. I don't get many [nines](https://en.wikipedia.org/wiki/High_availability#%22Nines%22), I probably only get 1 (or 2 on a good streak!), but does it really matter?
	- My most important service is the backend of Haystack. A project in a closed beta which allows users to upload pictures. If the service goes down, then my users lose the ability to view, and process their images, which is obviously a bad experience.
	- I have had one outage (my fault, skill issue), which lasted a day. And I argue that this doesn't matter, realistically Haystack is and will always be a small project with few (but interested) users. One where I believe 1 or 2 nines is enough.

So I've mentioned the downside, availability. But what are the good things?
	- Money. I paid very little for the server, but for a similarly speced VPS on most cloud providers I would be paying 72$ a month!! [Source](https://www.linode.com/products/dedicated-cpu/). I do have other costs, namely electricity (I don't have a good number for this, but with the CPU averaging 10% usage, I don't think it's massive), and internet (which I would pay for regardless). There is a good amount of money to be saved by having an old computer under your desk running your stuff.
	    - > I will counter myself though. I will end up upgrading this server, as self-hosting is very much a hobby (and an expensive one when you start playing with fancy hardware!)  
	- Ownership. No one will take away this server from me. The data stored on it, is controlled by me, and not some giant corporation. This becomes important when it comes to personal data. Which I will talk about now.
# Own your data
Self-hosting isn't just for hosting projects, and outward facing services. Most of my time is spend on inward facing services. I've talked about services I host on the [Gitea post (https://johncosta.tech/blog/hello-gitea/), but to summarise, I have a lot of personal data from myself and my partner, which I would rather control rather than give it up to Google or Apple. A good example is my [Immich](https://immich.app) instance, which has all my photos, and these are terrabytes worth.

In today's age, it is important we all think about our personal data, who has control over it and who stands to profit from it. I don't want to be training data for an LLM without my consent.

# Learning and Enjoyment
Most importantly, I just love tinkering with the server. I love staying up to date with new open source projects which you has host yourself, I love having little home automations that run on my own hardware (my office lights are controlled by a really single Go script and a WLED controller).

I've also learnt so much about server administration and DevOps. I've learnt a lot about observability, about hosting your own CI/CD, and how to know when things have gone wrong. I've also continued to learn about Linux, networking, and so many other things I would love have a chance to play with, unless I had my own server. You can argue that this is possible with a VPS, but really, where's the fun in that?

# Conclusion
Self-hosting is really fun, you should try having an old computer under your desk running your stuff. You get a sense of accomplishment, for learning all you need to make it work, and to then manage it such that it continue to work. You will also be able to do things you never thought about doing, like hosting your own Netflix with [Jellyfin](https://jellyfin.org), or having actual production services running  right next you, and managing your own database. I've really enjoyed it, and will continue to enjoy it for years to come.
