---
layout: "../../layouts/post.astro"
title: "HackNotts 84"
date: "07/11/2023"
---

This year, I attended [HackNotts 84](https://www.hacknotts.com/) 84, a 24-hour hackathon hosted by the University of Nottingham. It was a great event with around 150 hackers, great sponsors and great prizes. I cannot fault the event and the organisers, they did a fantastic job.

# My Project

I worked with my friend [James](https://www.linkedin.com/in/james-arnott-341705143/), who attended the same course at Royal Holloway with me, and graduated in the same year.

For a while I've wanted to build a distributed database project, as I wanted to tackle the synchronisation issues that come with this type of data storage, and so we did. We built **AidNet**, a distributed database that worked not through the internet or mobile networks, but through [LoraWan](https://en.wikipedia.org/wiki/LoRa), a low-power wide area network. You can use [LoraWan](https://en.wikipedia.org/wiki/LoRa) with ESP32s across a serial port (USB). This allows two or more machines to synchronise a database over wireless signals without the need to be connected to any other network.

The reason this is important is because it allows our project to be used in places where internet is not available, primarily (and the reason why it's called AidNet), war-torn regions, such as Eastern Ukraine and more recently Gaza. Our project consisted of a simple database of nodes, medical supplies and supply requests, which each node could add to, or view other nodes requests. We also provided a small UI to allows users to more easily interact with the database.

## Technologies used

- The ESP32s are programmed using C++, but this was a rather simple program that simply broadcast (and check summed), any message across the serial port.
- The database we used was a SQLite database for its extreme portability (it is just a file).
- The synchronisation was done in Golang, which also handled input/output from the serial port to the ESP32s
- The UI was made using React (more about that in a minute).

# Successful

It worked! Our machines were able to consistently maintain a synchronised database using the LoraWan ESP32 for communication, it was able to do this with minimal loss and maintain message integrity using checksums, and even re-sync if the node was every taken offline.

# Lessons to be learnt

Whenever I attend hackathons, I learn a lot - it's the main reason I go - and the learning is often about things to do _better_, not so much things that went well.

I learnt a tone about distributed databases and the challenges that surround them, as well as learning about serial ports and how to interact with them (this is actually the first time I've manually interacted with a serial port, it was easier than I expected).

However, I learnt a lot about things I want to do better next time

## Don't complicate your UI

We used React for our UI. And there should already be a red flag there. You might say "Well, it's the most popular UI framework" (and it is a framework, not a library). Sure, it's great when your UI need to be very particular and interactive, but we were just displaying a couple of tables and taking in some user input, it seems completely obvious to me that we should have rendered the HTML using some HTML templates from our Golang system.

It already had access to the database, why are we making our lives worst by having to maintain state in the UI?

Not only that but we also used MUI to display the data in a more fancy format, which was a terrible idea. Complexity doesn't scale well, and it for sure does not pair well with 2 over caffeinated, 12 straight coding hours engineers (me and James).

The entire UI fell apart very quickly, the complexity grew so much, so quickly that me and James were at a loss to salvage it.

In a project where you have to synchronise various database nodes _offline_, the hardest part was building the UI.

Client side rendering is great, but it isn't always the answer. I don't think I'll quickly forget this lesson.

## Focus on the user

Our database synchronisation worked! That's great!

What are you going to do with it?

We build a very simple schema for our database, with only 4 tables, which themselves didn't make a whole lot of sense. This is because we were much more interested in building something that worked on from a technological stand point, instead of building something that a user would find some real use from.

Always keep the user in mind.

# Conclusion

I really enjoyed my weekend. A big thank you to [James](https://www.linkedin.com/in/james-arnott-341705143/) for being a great teammate, I really enjoyed our project.

Thank you HackNotts, for the very fun event, and thanks to all the sponsers for making it possible.

And thank you Nottingham Brewery, for serving us some very delicious local beers, at a much needed time.
