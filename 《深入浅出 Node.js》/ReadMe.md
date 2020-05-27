## 2. 在 Node.js 中会怎样

当同样的事情发生在 **Node.js** 中时，就得做的更多些了 -- 因为 node 所承诺的能力也更强。在浏览器中，我们被能在后台做什么掣肘。但在 node 中，能在后台做到几乎大部分的事情，尽管那只是个简单的 JS 程序。但是，这是如何做到的呢？

Node.js 也使用了 **Google’s V8 engine** 提供 JS 运行时，却没有局限于其事件循环；而是使用 [**libuv**](https://github.com/libuv/libuv) 库 (*用 C 写的*) 与 V8 的事件循环一同工作，从而扩展了可以在后台所做之事。Node 遵循了类似于 Web APIs 的回调机制，并以和浏览器相似的方式工作。



![img](https://user-gold-cdn.xitu.io/2019/11/7/16e4402ad79dece9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)node.js 底层机制



如果比较一下浏览器那张图和上面这张 node 的图，可以看到其相似之处。图中整个右半边看起来就像 Web API，但其既包含 **事件队列** (event queue，或称 *callback queue / message queue*) 又包含 **事件循环** (event loop)；不同于 V8 的是，这二者虽然还是在单一线程上运行，而独立的 worker 线程则承担了提供异步 I/O 操作的功能。这就是为什么 Node.js 号称是 **非阻塞事件驱动异步 I/O 架构** 的原因了。



作者：江米小枣tonylua
链接：https://juejin.im/post/5dc39452e51d456e300e09e0
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。