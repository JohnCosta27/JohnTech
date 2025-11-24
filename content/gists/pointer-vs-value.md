+++
title = "Pointer vs Value"
date = "2025-11-24"
author = "John Costa"
tags = ["Software", "gist"]
+++

When working with pointers, what do you think the difference is?

## 1. Assign to pointer
```go
func (c *MyStruct) SomeFunction(val any) {
	parsedStruct := someProcessingFunc(val)
	c = &parsedStruct
}
```

vs

## 2. Assign to value
```go
func (c *MyStruct) SomeFunction(val any) {
	parsedStruct := someProcessingFunc(val)
	*c = parsedStruct
}
```

I came across this at work today and it took me a second to figure out what was wrong.


## Number 2 is correct

The first example actually assigned the pointer of `parsedStruct` to the local variable `c` which itself is just a pointer.

```go
c = &parsedStruct 
```

All we've done, is reassign a local variable.

Whereas:

```go
*c = parsedStruct
```

Actually changes the underlying value of the pointer `c`, and changes it to the content of `parsedStruct`.

It's easy to overlook these things, specially now when LLMs write more and more code. But it will be more and more important to understand and spot these differences, they might cost you or your company a lot of business.
