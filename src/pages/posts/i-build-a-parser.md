---
layout: "../../layouts/post.astro"
title: "I built a parser!"
date: "27/07/2023"
---

Git Repo: [Here](https://github.com/JohnCosta27/GoXmlParser)

During my time at university I took a compilers module, it turned out to be my favourite module out of all my 3 years at university, and I had the privilege of being taught by [Elizabeth Scott](https://pure.royalholloway.ac.uk/en/persons/elizabeth-scott), one of the creators of [GLL Parsers](https://www.cs.rhul.ac.uk/research/languages/csle/GLLparsers.html), a parsing algorithm that can parse any context free grammar, it's very cool.

I did very well in this module, and I really enjoyed it, but it was heavily theoretical, with little to no practical work. This is fine, it taught me a lot of parsing algorithms, and everything I know about grammars and languages.

So I decided to give it a go and actually write one!

# XML (like)

I decided to parse a XML like language. You are probably mostly familiar with XML from its use in HTML.

```html
<hello>World</hello>
```

You have an opening tag, some content in the middle, and a closing tag. However it can get more complicated than that.

```html
<hello hello="world">
  Some text here
  <a></a>
  dsamkdsamdkas

  <b attribute="dksoadisma" />
</hello>
```

As you can see, we can have nested structures, attributes on tags, and self closing tags.

# Building the Parser

I used Golang to build the parser, it's a language that is familiar to me, extremely permanent and a delight to use.

I decided to use recursive descent to build the parser, as XML is fairly easy to parse this way, and it becomes less complicated to start my compiler journey using this technique. From my compilers module I knew how to generate recursive descent parsing functions even if I was blind folded for any grammar, so this shouldn't be hard... Right?

## What I learnt

### Theory != Practice

Even though I knew how to generate RDP (Recursive descent parsers), I was always given a grammar to start from. But this was a different problem, I have to create a grammar that cannot be left recursive (RDP limitation), and would parse without ambiguity.

This turned our harder than I thought, because it's a task that can be done in millions of different ways. In the end I settled for the following grammar.

```
Element ::= OpenTag ElementSuffix
OpenTag ::= '<' NAME Attributes
Attributes ::= NAME '=' STRING Attributes | EPSILLON
ElementSuffix ::= '/>' | Content CloseTag
Content ::= DATA Content | Element Content | EPSILLON
CloseTag ::= '</' NAME '>'

// Literals
DATA = All the content between '>' and '<'
NAME = A continuous string of alphabetical characters
STRING = Content inside (and including) ""
EPSILLON = null
```

This seems like a good grammar. It allows for all the XML structures we are used to seeing, and it also seemed to have the right mix of parser and lexer complexity. I'll explain what I mean by this.

### Lexer vs Parser

Lexer (Lexical Analysis), or Tokenizer takes the raw string input and turns it into meaningful tokens, we saw the tokens I used above:

- <
- \>
- />
- </
- STRING
- DATA
- NAME

Some of these are trivial, such as the top 4 on the list, but the rest isn't so easy. String would be an example of a slightly more complex token.

But when I was first starting, in my head all the hard work would have to be done by the parser and the lexer would basically just pick up single strings of characters. This led me to a rabbit hole of parsing basically single characters as tokens (including spaces!), and writing progressively more complicated grammar rules (and therefore more complicated parser), in order to not have the lexer be complicated.

But I quickly realised that regular expressions are a tool, and I should use them well. And so that's how I ended up with more complex tokens, and was able to drastically simplify my grammar rules.

# Semantics

The last thing I want to talk about was my semantic analysis, which was by far the easiest part of the project, simply because all I have to do is make sure that the opening tags have the correct closing tags associated with them.

This is implemented using a stack, you push as you see opening tags, pop as you see closing ones, and compare. If you see a closing tag that does not correspond to the top item of the stack then there is something wrong.

# Future Work

I am mostly finished with this project. The only thing I would like to add is translation from XML to other languages. This step would be fairly easy because of the AST already being build, and now I simply have to walk it.

But for other project, I would like to go into the world of programming languages instead of markup languages. To start with I could write a program that compilers down to Golang, and use the already amazing Golang tools to compile the underlying program. But this is for another time.

If you made it this far, hey thank you for reading, you can always email me at johncosta027@gmail.com for any inquiries, or check out the GitHub repo linked at the top of the article if you have any further coments.
