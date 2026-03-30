+++
title = "Bugs"
date = "2026-03-10"
author = "John Costa"
tags = ["Software","gist"]
+++

> Until you know everything, you don't know anything.

A co-worked told me this when we were talking about the possible cause for a specific bug I was chasing.

I said things like:

> I think x might be causing y which is an issue..

> If the user does _a_ then _b_ could be affected.

Notice my language here. _I think_, _If_, _could_. None of it is absolute. I'm _90% sure_, or _I think_ there's something in this particular part of the system.

These are guesses. They will help you be sure. But if you don't actually know what's happening, then you don't actually know what the bug is.

The quote is a slightly over statement, you might know some things (which systems, how it happens, etc...). But you cannot be sure, and until you actually figure out what is going wrong, you will not be able to solve the bug.

And because this is quite difficult to do, engineers often patch symptoms and not causes.

Image the following code.

```typescript
const users = await fetch('server.com').then(r => r.json());

return users.map(user => user.name);
```

What happens if `users` is:

```typescript
[{ id: 1, name: "John" }, { id: 1, name: "John"}, { id: 2, name: "Costa"}]
```

Clearly, `John` is duplicated. You see this bug, and you might end up writing a solution like so.

```typescript
const users = await fetch('server.com').then(r => r.json());

const seenUsers = new Set<number>();
const uniqueUsers = [];
for (const user of users) {
	if (seenUsers.has(user.id)) {
		continue;
	}
	
	seenUsers.add(user.id);
	uniqueUsers.push(user);
}

return uniqueUsers.map(user => user.name);
```

You didn't fix a bug. You fixed the _symptom of the bug_.

The issue is in the server. The server is returning duplicated users. So, go to the server code, and fix it there! There might be a bad SQL query, some incorrect mapping logic, whatever. There is a bigger issue at play here, and this bug will not go away, it will resurface.

> I appreciate that sometimes you cannot change the server. This example assumes you can.
