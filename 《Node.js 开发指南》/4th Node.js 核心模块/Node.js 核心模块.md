# 第 4 章 -- Node.js 核心模块

## 本章目录 (Catalog)
- 4.1 全局对象
    + 4.1.1 全局对象与全局变量
    + 4.1.2 `process`
    + 4.1.3 `console`
- 4.2 常用工具 `util`
    + 4.2.1 `util.inherits`
    + 4.2.2 `util.inspect`
- 4.3 事件驱动 `events`
    + 4.3.1 时间发射器
    + 4.3.2 error 事件
    + 4.3.3 继承 `EventEmitters`      
- 4.4 文件系统 `fs`
    + 4.4.1 `fs.readFile`
    + 4.4.2 `fs.readFileSync`
    + 4.4.3 `fs.open`
    + 4.4.4 `fs.read`
- 4.5 `HTTP` 服务器与客户端
    + 4.5.1 HTTP 服务器
    + 4.5.2 HTTP 客户端
- 4.6 参考资料


## 生词 (New Words)
- **complicated ['kɒmplɪkeɪtɪd] --adj.结构复杂的**
    + --> a complicated machine. 复杂的机器。
    + --> This is a novel with a complicated plot. 这本小说情节复杂。
    + --> Complex is better than complicated.  复杂优于纠结。


## 本章内容 (Content)
- 核心模块是 Node.js 的心脏，它由一些精简而高效的库组成，为 Node.js 提供了基本的 API。
#### 4.1 全局对象
- Node.js 中的全局对象是 `global`, 所有全局变量 (除了 global 本身外) 都是 global 对象
  的属性。我们在 Node.js 中能够直接访问到的对象通常都是 global 属性，如 console,process 等。
- 4.1.1 全局对象与全局变量
    + global 最根本的作用是作为全局变量的宿主。
- 4.1.2 `process`
     + process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的
       对象，提供了一个与操作系统的简单接口。 常用成员方法:
        - `process.argv`: 命令行参数数组，第一个元素是 node, 第二个元素是脚本文件名，
          从第三个元素开始每个元素是一个运行参数
            + ```javascript
                // process.argv:  [
                //   'C:\\Program Files\\nodejs\\node.exe',
                //   'F:\\Github-Clone\\Node.js\\《Node.js 开发指南》\\`
                //      `4th Node.js 核心模块\\Node.js 核心模块.js'
                // ]
                console.log("process.argv: ", process.argv);
              ```
        - `process.stdout`: 标准输出流，通常我们使用的 console.log() 向标准输出打印
          字符，而 `process.stdout.write()` 函数提供了更底层的接口。
        - `process.stdin`: 标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须
          恢复流，并手动编写流的事件响应函数。
            + ```js
                process.stdin.resume();
                process.stdin.on('data', function(data) {
                    process.stdout.write('read from console:' + data.toString());
                })
              ```
        - `process.nextTick(callback)`: 的功能是为事件循环设置一项任务，Node.js 会在
          下次事件循环响应时调用 callback。
            + 初学者很可能不理解这个函数的作用，有什么任务不能在当下执行完，需要交给下次
              事件循环响应来做呢？我们讨论过，Node.js 适合 `I/O` 密集型的应用，而不是
              计算密集型的应用，因为一个 Node.js 进程只有一个线程，因此在任何时刻都只有
              一个事件在执行。如果这个事件占用大量的 CPU 时间，执行事件循环中的下一个事件
              就需要等待很久，因此 Node.js 的一个编程原则就是尽量缩短每个事件的执行时间。
              process.nextTick()  提供了一个这样的工具，可以把复杂的工作拆散，变成一个个
              较小的事件。
              ```js
                function doSomething(args, callback) {
                    somethingComplicated(args);
                    callback();
                }
                doSomething(function onEnd() { 
                    compute();
                })
              ```
            + 我们假设 compute() 和 somethingComplicated() 是两个较为耗时的函数，
              以上的程序在调用 doSomething() 时会先执行 somethingComplicated()，然
              后立即调用回调函数，在 onEnd() 中又会执行 compute() 。下面用 
              process.nextTick()  改写上面的程序：
              ```js
                function doSomething(args, callback) {
                    somethingComplicated(args);
                    process.nextTick(callback);
                }
                doSomething(function onEnd() {
                    compute();
                })
              ```
            + 改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件
              响应速度。
            + Warning: 不要使用 setTimeout(fn, 0) 代替 process.nextTick(callback)
              , 前者比后者效率要低得多.
- 4.1.3 `console`
    + console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的
      调试工具，后来逐渐成为浏览器的事实标准。Node.js 沿用了这个标准，提供与习惯行为一致的
      console 对象，用于向标准输出流（ stdout ）或标准错误流（ stderr ）输出字符。
    + (1) console.log(): 向标准输出流打印字符并以换行符结束.
    + (2) console.error(): 与 console.log() 用法相同, 只是向标准错误流输出.
    + (3) console.trace(): 向标准错误流输出当前的调用栈. 
#### 4.2 常用工具 `util`
- (util 是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 js 的功能过于精简的不足)
- 4.2.1 `util.inherits`
    + `util.inherits(constructor, superConstructor)` [superConstructor 父构造
      函数] 是一个实现对象间原型继承的函数。JavaScript 的面向对象特性是基于原型的，与常见
      的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的，
      具体细节我们在 "附录A" 中讨论，在这里我们只介绍 util.inherits 的用法。
    + util.inherits 的用法: 
      ```js
        const util = require('util');

        function Base() {
            this.name = 'base';
            this.base = 1991;

            this.sayHello = function() {
                console.log('Hello ' + this.name)
            }
        }
        Base.prototype.showName = function() {
            console.log(this.name)
        };

        function Sub() {
            this.name = 'sub'
        }

        // - js 原生继承的写法见: F:\Github-Clone\JS-book-learning\JS-继承.md
        // - inherits() 实现原理见: Programming-Video-Learning-W\珠峰培训\
        //   05_Node.js-张仁阳\05_正式课实录\events.js
        util.inherits(Sub, Base);

        let objBase = new Base();
        objBase.showName();
        objBase.sayHello();
        console.log(objBase)
      ```
- 4.2.2 `util.inspect`

#### 4.3 事件驱动 `events`
- `events` 是 Node.js 最重要的模块，没有 "之一", 原因是 Node.js 本身架构就是事件式的，
  而它提供了唯一的接口，所以堪称 Node.js 事件编程的基石。events 模块不仅用于用户代码与 
  Node.js 下层事件循环的交互，还几乎被所有的模块依赖。
- 4.3.1 事件发射器
    + events 模块只提供了一个对象: events.EventEmitter. EventEmitter 的核心就是事
      件发射与事件监听器功能的封装。 EventEmitter 的每个事件由 "一个事件名" 和 "若干个
      参数" 组成，事件名式一个字符串，通常表达一定的语义。对于每个事件， EventEmitter
      支持若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作
      为回调函数参数传递。
      ```js
        let events = require('events');
        let emitter = new events.EventEmitter();

        // 为事件 someEvent 注册 2 个事件监听器
        emitter.on('someEvent', function(arg1, arg2){
            console.log('listener1', arg1, arg2)
        });
        emitter.on('someEvent', function(arg1, arg2){
            console.log('listener2', arg1, arg2)
        });
        emitter.emit('someEvent', 'byvoid', 1991)
      ```
- 4.3.2 error 事件
- 4.3.3 继承 `EventEmitters` 
    + 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、http 
      在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
    + 为什么要这样做呢？原因有两点。首先，具有某个实体功能的对象实现事件符合语义，事件的监听
      和发射应该是一个对象的方法。其次 JavaScript 的对象机制是基于原型的，支持部分多重继承
      ，继承 EventEmitter不会打乱对象原有的继承关系。  

#### 4.4 文件系统 `fs`
- fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录链接等 
  `POSIX (Portable Operating System Interface 便携式操作系统接口)` 文件系统操作。
- 4.4.1 `fs.readFile`
    + **fs.readFile(filename, [encoding], [callback(err, data)])**
        - `filename` 标识要读取的文件名。
        - `encoding` 是可选的，标识文件的字符编码。
        - `callback` 是回调函数，用于接收读取的文件内容。回调函数提供2个参数 err 和 data,
          err 表示有没有错误发生，data 是文件内容。
    + ```javascript
        let fs = require('fs');
        fs.readFile('content.txt', function(err, data) {
            if (err) {
                console.log(err)
            } else {
                // console.log("data normal format: ", data)
            }
        });

        fs.readFile('content.txt', 'utf-8', function(err, data) {
            if (err) {
                console.log(err)
            } else {
                // console.log("data binary: ", data)
            }
        });
      ```      
- 4.4.2 `fs.readFileSync` : 同步方法省略
- 4.4.3 `fs.open`
    + **fs.open(path, flags, [mode], [callback(err, fd)])** 是 POSIX open 函数的
      封装， 与 C 语言标准库中的 fopen 函数类似。 前 2 个参数为必选，
        - path 为文件的路径，
        - flags 可以是以下值:
            + r 以读取模式打开文件
            + r+ 以读写模式打开文件
            + w 以写入模式打开文件，如果文件不存在则创建
            + w+ 以读写模式打开文件，如果文件不存在则创建
            + a 以追加模式打开文件，如果不存在则创建
            + a+ 以读取追加模式打开文件，如果不存在则创建
        - mode 用于创建文件时给文件指定权限，默认时 0666。
        - callback 回调函数将会传递一个文件描述符 fd (文件描述符是一个非负整数，表示操作系
          统内核为当前进程所维护的打开文件的记录表索引。)
    + ```js
        fs.open('content.txt', 'r', function(err, fd) {
            if (err) {
                console.log(err);
                return;
            }

            let buf = new Buffer.alloc(8);
            // - 文件描述符(fd): 是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的
            //   记录表索引。
            // - 0: offset 是 buffer 的写入偏移量。
            // - 8: length 是要从文件中读取的字节数。
            // - null: position 值为 null, 则会从当前文件指针的位置读取。
            fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
                if (err) {
                    console.log(err);
                }

                // bytesRead: 8
                // console.log('bytesRead: ' + bytesRead)
                // buffer: <Buffer e5 af 84 e7 94 9f e5 bc>
                // console.log('buffer:', buffer)
            })
        });
      ```      
- 4.4.4 `fs.read`
    + [注: 书上不建议使用 fs.read(), 因为需要手动管理缓冲区和文件指针]
    + fs.read(fd, buffer, offset, length, position, [callback(err,bytesRead, buffer)])
      是 POSIX read 函数的封装，相比 fs.readFile 提供了更底层的接口。fs.read 的功能
      是从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象，offset 是 buffer
      的写入偏移量，length 是要从文件中读取的字节数，position 是文件读取的起始位置，如果
      position 的值为 null 则会从当前文件指针的位置读取，回调函数传递 bytesRead 和 
      buffer 分别表示读取的字节数和缓冲区对象。

#### 4.5 `HTTP` 服务器与客户端
- Node.js 标准库提供了 `http` 模块，其中封装了一个高效的 HTTP 服务器和一个简易的 HTTP 
  客户端。`http.Server` 是一个基于事件的 HTTP 服务器，它的核心由 Node.js 下层 C++ 部分
  实现，而接口由 JavaScript 封装，兼顾了高性能和简易型。`http.request` 则是一个 HTTP 
  客户端工具，用于向 HTTP 服务器发起请求。
- 4.5.1 HTTP 服务器
    + http.Server
    + (1)、http.Server 的事件
    + (2)、http.ServerRequest (http.服务器请求)
    + (3)、获取 GET 请求内容
    + (4)、获取 POST 请求内容
    + (5)、http.ServerResponse (http.服务器响应)
- 4.5.2 HTTP 客户端
    + (1)、http.ClientRequest
    + (2)、http.ClientResponse

#### 4.6 参考资料


