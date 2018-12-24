## 狼叔：如何正确的学习Node.js 
  [How-to-learn-node-correctly](https://github.com/i5ting/How-to-learn-node-correctly)

- Node.js 简介
    + Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境，
    同时结合 Libuv 扩展了 JavaScript 功能，使之支持 io, fs 等只有语言才有的特性，使得 js
    能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器)等能力，使目前最简单的
    全栈式语言。
    + 目前 Node.js 在大部分领域都占有一席之地，尤其是 I/O 密集型的，比如 Web 开发，微服务，
    前端构建等。不少大型网站都是使用 Node.js 作为后台开发语言的，用的最多的就是使用Node.js做
    前端渲染和架构优化，比如 淘宝 双十一、去哪儿网 的 PC 端核心业务等。另外，有不少知名的前端
    库也是使用 Node.js 开发的，比如，Webpack 是一个强大的打包器，React/Vue 是成熟的前端组
    件化框架。
    + Node.js 通常被用来开发低延迟的网络应用，也就是纳兹额需要在服务器端环境和前端实时收集和
    交换数据的应用(API,即时聊天、微服务)。
    + 另外， Node.js 编写的包管理器 npm 已成为开源包管理领域最好的生态，截止到2017年10月
    份，有超过47万模块，每周下载量超过32亿次，每个月有超过700万开发者使用npm。
    + 当然了，Node.js 也有一些缺点。Node.js 经常被人们吐槽的一点就是：回调太多难于控制
    （俗称回调地狱）和 CPU 密集任务处理地不是很好。但是，目前异步流程技术已经取得了非常不错的
    进步，从Callback、Promise 到 Async函数，可以轻松地满足所有开发需求。至于 CPU 密集任
    务处理并非不可解，方案有很多，比如通过系统底层语言 Rust 来扩展 Node.js，但这样会比较麻烦
    。笔者坚信在合适的场景使用合适的东西，尤其是在微服务架构下，一切都是服务，可以做到语言无关。
    如果大家想使用 JavaScript 做 CPU 密集任务，推荐 Node.js 的兄弟项目 fibjs，基于纤程(
    fiber，可以简单理解为更轻量级的线程)，效率非常高，兼容npm，同时没有异步回调烦恼。

- Node.js 是什么？   
    + Node.js 不是 JavaScript 应用，不是语言（JavaScript 是语言），不是像 Rails(Ruby)、
     Laravel(PHP) 或 Django(Python) 一样的框架，也不是像 Nginx 一样的 Web 服务器。
     Node.js 是 JavaScript 运行时环境
    + 构建在 Chrome's V8 这个著名的 JavaScript 引擎之上，Chrome V8 引擎以 C/C++ 为主，
    相当于使用JavaScript 写法，转成 C/C++ 调用，大大的降低了学习成本
    + 事件驱动（event-driven），非阻塞 I/O 模型（non-blocking I/O model），简单点讲就是每
    个函数都是异步的，最后由 Libuv 这个 C/C++ 编写的事件循环处理库来处理这些 I/O 操作，隐藏了
    非阻塞 I/O 的具体细节，简化并发编程模型，让你可以轻松的编写高性能的Web应用，所以它是轻量
    （lightweight）且高效（efficient）的
    + 使用 npm 作为包管理器，目前 npm 是开源库里包管理最大的生态，功能强大，截止到2017年12月，
    模块数量超过 60 万+ 