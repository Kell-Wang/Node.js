## 第一章 Node.js 简介

- 1.1 Node.js 是什么？
    + Node.js 不是一种语言，与 PHP、Python、Perl、Ruby、的 "既是语言也是平台",不同。 Node.js 也不是一个
      JavaScript 框架，不同于 CakePHP、Django、Rails。 Node.js 更不是浏览器端的库，不能与 jQuery、Extjs
      相提并论。 Node.js 是一个让 JavaScript 运行再服务端的开发平台，它让 JavaScript 成为脚本语言世界的一等
      公民，在服务端堪与 PHP、Python、Rerl、Ruby 平起平坐。

- 1.2 Node.js 可以做什么？
    + 正如 JavaScript 为客户端而生，Node.js 为网络而生。 使用 Node.js 你可以轻松开发:
        - 1、具有复杂逻辑的网站
        - 2、基于社交网络的大规模 Web 应用
        - 3、Web Socket 服务器
        - 4、TCP/UDP 套接字应用程序
        - 5、命令行工具
        - 6、交互式终端程序
        - 7、带有图形用户界面的本地应用程序
        - 8、单元测试工具
        - 9、客户端 JavaScript 编译器
    + Node.js 内建了 HTTP 服务器支持，也就是说你可以轻松实现一个网站和服务器的组合。这和
      PHP、Perl 不一样，因为在使用 PHP 的时候，必须先搭建一个 Apache 之类的 HTTP 服务器，
      然后通过 HTTP 服务器的模块加载或 CGI 调用，才能将 PHP 脚本的执行结果呈现给用户。 
      而当你使用 Node.js 时，不用额外搭建一个 HTTP 服务器，因为 Node.js 本身就内建了一个。
      这个服务器不仅可以用来调试代码，而且它本身就可以部署到产品环境，它的性能足以满足要求。

- 1.3 异步 I/O 与事件驱动
    + Node.js 最大的特点就是采用异步式 I/O 与事件驱动的架构设计。
    + Node: I/O（英语：Input/Output），即输入/输出，通常指数据在内部存储器和外部存储器
      或其他周边设备之间的输入和输出。

- ......

- 1.6 CommonJS
    + 1.6.1 服务端 JavaScript 的重生
    + 1.6.2 CommonJS 规范与实现
        - 正如当年为了统一JavaScript语言标准，人们制定了 ECMAScript 规范一样，如今为了统一 JavaScript 在浏览器之外的
          实现，CommonJS 诞生了。CommonJS 试图定义一套普通应用程序使用的API，从而填补 JavaScript 标准库过于简单的不足。
          CommonJS 的终极目标是制定一个像C++标准库一样的规范，使得基于 CommonJS API 的应用程序可以在不同的环境下运行，
          就像用 C++ 编写的应用程序可以使用不同的编译器和运行时函数库一样。为了保持中立，CommonJS不参与标准库实现，其实现
          交给像 Node.js 之类的项目来完成。
        - CommonsJS 规范包含了:
            + 模块 (modules)
            + 包 (packages)
            + 系统 (system)
            + 二进制 (binary)
            + 控制台 (console)
            + 编码 (encodings)
            + 文件系统 (filesystems)
            + 套接字 (sockets)
            + 单元测试 (unit testing)
            + 等部分...
