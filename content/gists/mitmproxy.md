+++
title = "Mitmproxy - My new best friend"
date = "2026-01-20"
author = "John Costa"
tags = ["Software", "tools", "gist"]
+++

[mitmproxy](https://www.mitmproxy.org) is - as the name suggests - a proxy.

At [Requesty](https://requesty.ai), I do a lot of request manipulation, from one format to another. We listen to a lot of streams. Basically we do a lot of networking.

So, when I need to understand the shape of my outgoing requests, where logging or debugging might be enough, I reach for `mitmproxy`.

You start it by:

```
mitmproxy --mode reverse:https://google.com
```

I use it in `reverse` mode almost exclusively. This is because I mostly want to debug outbound requests.

Then all you have to do is make a request!

`mitmproxy` will show you all your outbound requests, the response, the headers and a lot more options (you can even replay requests!).

If you do any kind of requests and have ever had to debug them, I highly recommend you give this tool a try.
