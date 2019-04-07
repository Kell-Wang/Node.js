## 第四章 Node.js 核心模块

- 核心模块是 Node.js 的心脏，它由一些精简而高效的库组成，为 Node.js 提供了基本的 API。本章中，我们挑选了一部分最常用的
  核心模块加以详细说明，主要包含:
    + 全局对象
    + 常用工具
    + 事件机制
    + 文件系统访问
    + HTTP 服务器与客户端

- 4.1 全局对象
    + Node.js 中的全局对象是 global, 所有全局变量 (除了 global 本身外) 都是 global 对象的属性。
    + 4.1.1 全局对象与全局变量
        - global 最根本的作用是作为全局变量的宿主。
    + 4.1.2 process
        - process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的对象，提供了一个与操作系统
          的简单接口。 常用成员方法:
          + process.argv
          + process.stdout
          + process.stdin
          + process.nextTick()  这几个使用示例见本目录 js 文件

