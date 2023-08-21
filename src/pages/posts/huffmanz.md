---
layout: "../../layouts/post.astro"
title: "Huffmanz - Huffman Encoding Implementation in Zig"
date: "21/09/2023"
---

Link to Repo: [https://github.com/JohnCosta27/Huffmanz](https://github.com/JohnCosta27/Huffmanz)

[Huffman Encoding](https://en.wikipedia.org/wiki/Huffman_coding) is an algorithm for compressing text, using a binary tree to shorted the number of bits needed to represent each character. It's one of the first algorithms I learned in Computer Science. I was 14 year old and in Year 9. But until recently it hadn't crossed my mind again.

Then I found out about [Zig](https://ziglang.org/). A new(ish) language where you manage your own memory, and have access to an incredible compiler that support `comptime`, it's an amazing (and extremely fast) language.

So I decided to learn both fully, and implemented a huffman encoding algorithm using the zig programming language. Up until this point I haven't worked on a project in a language like zig, which requires memory management and everything that goes along with it. I have also never thought much about huffman encoding, but it's a fairly simple algorithm so it was the perfect project to learn about this language.

I won't go into much detail about Huffman Encoding, you can find many tutorials that do it better than I ever could. But I will talk about what I think about Zig.

## Zig - It's great

I'm not a big language connoisseur, I like things that work, that are simple and have a friendly syntax, so I happen to love (Golang)[https://go.dev/], it's simple, robust and very fast. It's also garbage collected which is a plus.

I didn't think I was going to be a big fan of Zig, my experience with C has been fine, but I haven't loved it much, and I've never touched C++, but I really enjoyed it.

### Some things I liked

- The compiler is fast, and extremely informative, I found that I didn't need to go to the official documentation, the compiler knew what I was trying to do and often led me in the right direction.
- Using allocator objects to initialise various data structure is a very nice pattern, one that makes managing memory really not complicated.
- Comptime. Absolutely genious!
- No secret allocations (looking at you Rust!). You are in control of the allocations completely.

### Some things I didn't like

- This isn't a fairly criticism, because it's a fairly new and evolving language, but the LSP isn't the best, it's very fast and when it works it works really well, but it seems to have been lacking some features. The one I missed the most was _hover_, where you can ask the LSP what type something is, it sometimes worked but most of the time it got confused.
- Using comptime types and returning a struct from a function seems odd, but also the best way to achieve generic data structures, don't love this pattern and there might be a better way. See the `heap.zig` file in my repo to see what I'm talking about.

I would say I definitely would love to work more with Zig. It seems like the logical step forward for program that require the blazingly fast speed of no garbage collection. You can already see this happening in [Bun.js](https://bun.sh/), which seems to have great speed advantages (sometimes) compared to Node.js or Deno (even though both are written in a low level language).

Thank you for reading, if you would like to chat with me. You can email me at `johncosta027@gmail.com`. Or visit my GitHub profile.
