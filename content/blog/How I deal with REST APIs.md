+++
title = "Keeping it safe and simple. My preferred way to verify API requests in the frontend"
date = "2025-08-18"
author = "John Costa"
toc = true
tags = ["Software"]
+++

The challenge of keeping backend APIs and frontend applications in sync has been around for a while, and there are many different solutions from this problem.

The simplest one is to ignore it completely. Look at what the API returns, and use those values in the frontend without any sort of parsing or validation. This works, for a time. Eventually, the API will change, and if you're lucky it will change in a big way, making it obvious that you are no longer in sync. But if you are unlucky, it will change in a small, miniscule way, that will lead you down hour long debugging sessions for some weird, undefined behaviour. I don't recommend this approach, unless you have complete control over both, and even then, this is one small human error away from being a nightmare.

An extension to this approach would be have your backend API fit an OpenAPI schema, which makes it easy for tools to generate the types, and potentially validators (which we'll get onto later), for your API. This approach is good, but it involves some level of maintenance for compliance with the OpenAPI schema, and also external tools to generate code for you. However, I would actually recommend this approach under certain scenarios.

The other approaches I see are more complicated. They involve standardising the API in some way, this is where GraphQL would come in. The frontend asks for the data, and if the data is not returned in the expected way (types and all), then you will get an error. The experience of developing with this approach are good, for the frontend developer (to an extend). But it involves changing your API completely, potentially making it much harder to develop, harder to maintain, less performant, and overly complicated.

Another similar approach is the use of tools such as tRPC. It's somewhat similar to GraphQL, but it is TypeScript specific. This probably has the best developer experience if you're working with TypeScript only. But again, you're changing the backend again to fix the problems of the frontend, not to mention you are restricted to using TypeScript on the backend. There are other tools or standards, such as gRPC, which would allow you to use this for any language, but again, you will have to make the API compliant.

## Parse the response

In my experience, guessing the types, will only get you so far. To have a good, scalable(ish) solution, which will save you countless hours debugging, you need to parse the response you get from the API. This is what GraphQL does, what tRPC does and plenty of other API standards do. But I don't want to use any of those, I want a simple REST API (and note, I'm using REST loosely here, I'm not referring to perfect REST standard APIs, just APIs that return some data when asked).

Instead of making the burden of maintenance on the backend side (like OpenAPI schemas), I shift it to the frontend, by writing validators which can look at a response, and tell me if anything changed, or if the response is correct.

The reason I like this approach is because it is simple. All I need is a basic validation library (such as Valibot, Zod, or any other), and write what I'm expecting the response to look like, and then parse it. Even better, now you have TypeScript types, that you know for sure are not lying to you. You also get integration testing, you can run all the requests from the backend and make sure the corresponding validators pass, and if not, then you know something changed in the API.

## Implementation

We'll start off by writing a helper function `createEndpoint`, which allows me to define an API request, give it a schema, and have it handle the parsing for me.

I'll show the code section by section, and explain as we go along.

```typescript
import type { StandardSchemaV1 } from '@standard-schema/spec';
```

This is an interesting part of the code. A recent project called `standard-schema`, has made it very easy to swap out what validator you would like to use. This means that my function can take a validator from Zod, Valibot or any of the other libraries which implement this interface. You don't even need this library to be in your dependencies, you could copy it straight from their website. Pretty neat.

---

```typescript
type RequestFnWithSchema<T extends StandardSchemaV1, TFn extends (...args: any) => any> = {
    fn: (...input: Parameters<TFn>) => Promise<StandardSchemaV1.InferOutput<T>>;
    ['~schema']: T
}

export const createEndpoint = <T extends StandardSchemaV1, TFn extends (...args: any) => any>(
    schema: T,
    fn: TFn
): RequestFnWithSchema<T, TFn> => {
    return {
        fn: async (...input) => {
            const res = await fn(...input);

            const x = schema['~standard'].validate(res);

            if (x instanceof Promise) {
                throw new Error("unreachable");
            }

            if (x.issues != null) {
                throw new Error(JSON.stringify(x.issues));
            }

            return x.value;
        },
        "~schema": schema,
    }
}
```

This method takes two parameters. The first is a schema, this is what your data looks like, the part that you have to write by hand. The second is the request function. This can be anything, but usually it's a simple function that returns a promise.

We return an object that contains the function to call, and also the schema it uses. This is most so we return a type rather than a function, because I don't want this to get mixed up with other simple functions that request data from the API, I want to make it distinct.

The callback function is first called with the correct arguments, we then take the schema and validate the response from the callback function, Make sure there's no issues and return the parsed value. This function will throw if there's an error, this is mostly to keep this example simple, but you can choose to return an error value instead, create your own Error class and throw that, whatever you want.

The return type for this function is `RequestFnWithSchema`, which is just a helper type, that returns a correctly inferred value, so you get nice TypeScript types on the other end.

Here's an example of how you would use this:

```typescript
import { array, object, string } from "valibot";
import { createEndpoint } from "./frontend";

const userSchema = array(object({
    id: string(),
    name: string(),
}));

export const userEndpoint = createEndpoint(userSchema, async () => {
    const response = await fetch("http://localhost:1234/users").then(r => r.json());
    return response;
});
```

You can see now I am writing the schema using valibot. I then pass it over to the `createEndpoint` function, and a callback which takes no arguments and returns the JSON response (note that I am assuming the API always returns JSON or the fetch throws an error).

Like this, you now get a lovely typed request function, by doing `userEndpoint.fn`, TypeScript knows it doesn't need any arguments, and will use `userSchema` to infer the return type. And all the complexity of parsing the request is hidden inside `createEndpoint`.

You can pass in parameters as well, very simply.

```typescript
const singleUser = object({
    id: string(),
    name: string(),
});

export const createUserEndpoint = createEndpoint(singleUser, async (params: { name: string }) => {
    const response = await fetch("http://localhost:1234/users",
        {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(r => r.json());
    return response;
})
```

## A little about validators

There is a small detail that is easy to overlook by looking at the code above. The `object` part of the schema hides away the fact that it does not perfectly match the object. Take a look at the following:

```json
{
    "id": "id",
    "name": "name"
}
```

This is exactly what you expect to pass validation - and it does - but now take a look at this object.

```json
{
    "id": "id",
    "name": "name"
    "surname": "surname"
}
```

Valibot (experience may differ with other libraries), the standard `object` validator removes extra fields. This is actually key for enabling migrations, which I'll talk about further down. To recap, this object passes validation, but the extra field is stripped away. So TypeScript is still telling the truth.

The validation fails when a field isn't present, or has an incorrect type. Such as:

```json
{
    "id": false,
    "some-field": "not-name"
}
```

This fails. And Valibot is very useful at pointing out the errors, `id` is not of type string, and `name` is missing.

## What happens when the API changes. Development & Production.

Let's keep the user validator as an example. What happens when the API changes? And there are two scenarios where the schema you have on the frontend, does not match the response that your API does.

Number one, you're developing the backend API - or someone else has and hasn't changed the frontend schemas - and you validator crashes. But wait you're saying, the example above clearly shows that the extra fields are ignored, and therefore, potentially bugs can pass through. One more thing we can do to make development air tight, is to change the `object` to a `strictObject`. This way, there is no escaping that API change, the moment an extra field is added you will know about it, because your frontend will crash. This is very important to make sure that you get small and fast errors now, instead of bigger bugs which take you a while to figure out.

One very important thing is: we _only_ want this `strictObject` for development, because shipping it to production will mean that anyone with an out of date frontend (which happens a lot), their application will crash. The most common migration you make is adding fields, which is very easy with `object`, just add a field. If it's present but the validator doesn't see it, it will ignore it.

## Conclusion

This is a practical way to create types that you know are true. You can also be extra strict during development and flexible to allow for users with outdated clients still use the app. It's not perfect, but it is still my favourite way of validating on the frontend.
