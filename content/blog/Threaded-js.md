+++
title = "Threaded JavaScript!"
date = "2022-04-10"
author = "John Costa"
toc = true
+++

For a long time, my language of choice has been JavaScript (and recently TypeScript), this is for both frontend development as well as backend development.

I enjoy the simplicity of using the same language for both sides of a project and I especially like working with Node.js, a Javascript run time environment with a very sophisticated asynchronous event loop, which makes it perfect for applications such as RESTful APIs which access databases etc...

However, I have also done backend work using Golang, a strongly typed, compiled, very fast language with a vibrant community and a "do it yourself" attitude, quite the change from Javascript. And something I have touched and enjoyed playing with are go routines, which are a way to create very light weight threads. This works by calling a function as a "go routine", which I think is very elegant. This is managed by the go run-time environment, but it can spawn threads if it needs to - a nice abstraction which means I don't have to handle threads directly - but do have to handle go routines as if they ARE threads.

But anyways, it left me wondering if I could have threads in JavaScript, which sounds crazy but Node.js has support for this is "Worker Threads". These are threads managed by Node.js which can run a .js file and communicate with its parent - it is quite similar to go routines.

So I made a small program to calculate the same MD5 hash 1 million times:

(Note that these files are .mjs files (module JavaScript), Node.js will only run them if you have .mjs as the file extension - All they do is allow the "import" syntax and a few other things).

```js
import crypto from "crypto";

console.time("Single-Thread");

const n = 10000000;
const string = "Hello World";

for (let i = 0; i < n; i++) {
  const hash = crypto.createHash("md5").update(string).digest("hex");
}

console.timeEnd("Single-Thread");
```

Running this program gave me this result:

```
Single-Thread: 1.139s
```

I then modified my code to use worker threads. This splits the work load into 8 worker threads, it gives each thread a start and an end range for the hash - which in total makes 1 million hashes.

```js
import { fileURLToPath } from "url";
import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const n = 1000000;
const THREAD_NUM = 8;
const string = "Hello World";

if (isMainThread) {
  const threads = new Set();
  for (let i = 0; i < THREAD_NUM; i++) {
    threads.add(
      new Worker(__filename, {
        workerData: {
          start: i * (n / THREAD_NUM),
          end: i * (n / THREAD_NUM) + n / THREAD_NUM,
        },
      }),
    );
  }

  console.time("Thread");

  for (const worker of threads) {
    worker.on("message", (msg) => console.log(msg));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.timeEnd("Thread");
      }
    });
  }
} else {
  for (let i = workerData.start; i < workerData.end; i++) {
    const hash = crypto.createHash("md5").update(string).digest("hex");
  }

  parentPort.postMessage("Done!");
}
```

This results in the following output:

```js
Done!
Done!
Done!
Done!
Done!
Done!
Done!
Done!
Thread: 335.294ms
```

A 4x increase in speed. There is a delay because worker threads actually spawn threads and therefore there is a bit of overhead with the syscall to create these threads.

This is very clear if we changed the number of hashes to 10 000.

### Single Thread

```
Single-Thread: 23.476ms
```

### 8 Worker Threads

```
Done!
Done!
Done!
Done!
Done!
Done!
Done!
Done!
Thread: 70.337ms
```

As you can see the single thread beat the 8 threads by almost 4x. This is because it is costly to create a thread outright which is what Node.js seems to be doing.

## Disclaimer

The Node.js crypto module is basically a wrapper for the native OpenSSL hashing functions, so I suspect that Node.js is just making a very fast C program do the hard work - but never the less it works very well.

## Conclusion

Node.js is a very solid backend technology to perform parallalism, it is not just limited to making RESTful APIs. It can competes with strongly typed and compiled languages such as golang.
