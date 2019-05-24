/** POSIX: Portable Operating System Interface 便携式操作系统接口 */

/**
 * ## 第四章 Node.js 核心模块
 *
 * - 核心模块是 Node.js 的心脏，它由一些精简而高效的库组成，为 Node.js 提供了基本的 API。
 *   本章中，我们挑选了一部分最常用的核心模块加以详细说明，主要包含:
 *      + 全局对象
 *      + 常用工具
 *      + 事件机制
 *      + 文件系统访问
 *      + HTTP 服务器与客户端
 *
 *
 * > 4.1 全局对象
 *      + Node.js 中的全局对象是 global, 所有全局变量 (除了 global 本身外) 都是 global
 *      对象的属性。我们在 Node.js 中能够直接访问到的对象通常都是 global 属性，如 console,
 *      process 等。
 *
 *   - 4.1.1 全局对象与全局变量
 *      + global 最根本的作用是作为全局变量的宿主。
 *
 *   - 4.1.2 process
 *      + process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的
 *         对象，提供了一个与操作系统的简单接口。 常用成员方法:
 *      + process.argv : 命令行参数数组，第一个元素是 node, 第二个元素是脚本文件名，从第三个
 *         元素开始每个元素是一个运行参数
 *      + process.stdout : 标准输出流，通常我们使用的 console.log() 向标准输出打印字符，
 *         而 process.stdout.write() 函数提供了更底层的接口。
 *      + process.stdin : 标准输入流，初始时它是被暂停的，.....
 *      + process.nextTick(callback) : 的功能是为事件循环设置一项任务，Node.js 会在下次
 *          事件循环响应时调用 callback。
 *
 *   - 4.1.3 console
 *
 *
 * > 4.2 实用工具 util (util 是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 js
 *       的功能过于精简的不足)
 *   - 4.2.1 util.inherits
 *      + util.inherits(constructor, superConstructor) [superConstructor 父构造函数]
 *          是一个实现对象间原型继承的函数。JavaScript 的面向对象特性是基于原型的，与常见的基
 *          于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的，
 *          具体希捷我们在 "附录A" 中讨论，在这里我们只介绍 util.inherits 的用法。
 *   - 4.2.2 util.inspect (略)
 *
 * > 4.3 事件驱动 events : events 是 Node.js 最重要的模块，没有 "之一"，原因是 Node.js 本
 *    身架构就是事件式的，而它提供了唯一的接口，所以堪称 Node.js 事件编程的基石。events 模块
 *    不仅用于用户代码与 Node.js 下层事件循环的交互，还几乎被所有的模块依赖。
 *   - 4.3.1 事件发射器
 *      + events 模块只提供了一个对象: events.EventEmitter. EventEmitter 的核心就是事
 *         件发射与事件监听器功能的封装。 EventEmitter 的每个事件由 "一个事件名" 和 "若干个
 *         参数" 组成，事件名式一个字符串，通常表达一定的语义。对于每个事件， EventEmitter
 *         支持若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作
 *         为回调函数参数传递。
 *   - 4.3.2 error 事件
 *   - 4.3.3 继承 EventEmitter : 大多数时候我们不会直接使用 EventEmitter，而是在对象中继
 *      承它。包括 fs、net、http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的
 *      子类。
 *
 *
 * > 4.4 文件系统 fs : fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录
 *        链接等 POSIX (Portable Operating System Interface 便携式操作系统接口) 文件
 *        系统操作。
 *   - 4.4.1 fs.readFile()
 *      + fs.readFile(filename, [encoding], [callback(err, data)])
 *          - filename 标识要读取的文件名。
 *          - encoding 是可选的，标识文件的字符编码。
 *          - callback 是回调函数，用于接收读取的文件内容。回调函数提供2个参数 err 和 data,
 *             err 表示有没有错误发生，data 是文件内容。
 *   - 4.4.2 fs.readFileSync() : 同步方法省略
 *   - 4.4.3 fs.open():
 *      + fs.open(path, flags, [mode], [callback(err, fd)]) 是 POSIX open 函数的
 *          封装， 与 C 语言标准库中的 fopen 函数类似。 前 2 个参数为必选，
 *              - path 为文件的路径，
 *              - flags 可以是以下值:
 *                  + r 以读取模式打开文件
 *                  + r+ 以读写模式打开文件
 *                  + w 以写入模式打开文件，如果文件不存在则创建
 *                  + w+ 以读写模式打开文件，如果文件不存在则创建
 *                  + a 以追加模式打开文件，如果不存在则创建
 *                  + a+ 以读取追加模式打开文件，如果不存在则创建
*               - mode 用于创建文件时给文件指定权限，默认时 0666。
 *              - callback 回调函数将会传递一个文件描述符 fd (文件描述符是一个非负整数，
 *                  表示操作系统内核为当前进程所维护的打开文件的记录表索引。)
 *   - 4.4.4 fs.read() [注: 书上不建议使用 fs.read(), 因为需要手动管理缓冲区和文件指针]
 *      + fs.read(fd, buffer, offset, length, position, [callback(err,
 *      bytesRead, buffer)]) 是 POSIX read 函数的封装，相比 fs.readFile 提供了更底层的
 *      接口。fs.read 的功能是从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象，
 *      offset 是 buffer 的写入偏移量，length 是要从文件中读取的字节数，position 是文件读取的
 *      起始位置，如果 position 的值为 null 则会从当前文件指针的位置读取，回调函数传递
 *      bytesRead和buffer分别表示读取的字节数和缓冲区对象。
 *
 *
 * > 4.5 HTTP 服务器与客户端
 *
 * */

// 4.1.2 process
// process.argv:  [ 'C:\\Program Files\\nodejs\\node.exe',
// 'D:\\git-clone\\Node.js\\《Node.js 开发指南》\\4th Node.js 核心模块\\Node.js 核心模块.js' ]
console.log("process.argv: ", process.argv);

// process.stdout
// console.log(process.stdout.write())

// process.nextTick(callback)
/*function doSomething(args, callback) {
    somethingComplicated(args)
    process.nextTick(callback)
}

doSomething(function onEnd() {
    compute()
})*/


/** 4.2.1: util.inherits 的用法 */
/** 20190523 现在 js 已经有内置的 class 方法了，所以这个根本用不到了 */
/*const util = require('util')

function Base() {
    this.name = 'base'
    this.base = 1991

    this.sayHello = function() {
        console.log('Hello ' + this.name)
    }
}

Base.prototype.showName = function() {
    console.log(this.name)
}

function Sub() {
    this.name = 'sub'
}

// js 原生的写法相见:《Javascript设计模式与编程实践》\第一部分--基础知识\第2章\
// P33-34-继承(借用其他对象的方法).js
util.inherits(Sub, Base)

let objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)*/

// ES6 类声明: 要声明一个类，首先编写 class 关键字，紧跟着的是类的名字，其他部分的语法类似于
//  对象字面量的简写形式，但是**不需要在类的各元素之间使用逗号分隔**。
class Base {
    constructor(name, base) {
        this.name = name
        this.base = base
    }

    sayHello() {
        console.log('Hello ' + this.name)
    }
}

class Sub extends Base {
    constructor(name) {
        super(name)
    }
}

let subInstance = new Sub("WANG")
subInstance.sayHello()  // Hello WANG



/** 4.3.1 事件发射器 */
// events 模块只提供了一个对象: events.EventEmitter. EventEmitter 的核心就是事
// 件发射与事件监听器功能的封装。 EventEmitter 的每个事件由 "一个事件名" 和 "若干个
// 参数" 组成，事件名式一个字符串，通常表达一定的语义。对于每个事件， EventEmitter
// 支持若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作
// 为回调函数参数传递。
let events = require('events')
let emitter = new events.EventEmitter()

// 为事件 someEvent 注册 2 个事件监听器
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2)
})
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2)
})

emitter.emit('someEvent', 'byvoid', 1991)




/** 4.4.1 fs.readFile(filename, [encoding], [callback(err, data)]) */
let fs = require('fs')
// fs.readFile('content.txt', function(err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("data: ", data)
//     }
// })
//
// fs.readFile('content.txt', 'utf-8', function(err, data) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("data: ", data)
//     }
// })


/** 4.4.3 fs.open(): */
/** 4.4.4 fs.read(): [注: 书上不建议使用 fs.read(), 因为需要手动管理缓冲区和文件指针] */
// r 以读取模式打开文件
fs.open('content.txt', 'r', function(err, fd) {
    if (err) {
        console.log(err)
        return;
    }

    let buf = new Buffer.alloc(8)
    // 文件描述符(fd): 是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引。
    // 0: offset 是 buffer 的写入偏移量。
    // 8: length 是要从文件中读取的字节数。
    // null: position 值为 null, 则会从当前文件指针的位置读取。
    fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
        if (err) {
            console.log(err)
            return;
        }

        // bytesRead: 8
        console.log('bytesRead: ' + bytesRead)
        // buffer: <Buffer e5 af 84 e7 94 9f e5 bc>
        console.log('buffer:', buffer)
    })

})





