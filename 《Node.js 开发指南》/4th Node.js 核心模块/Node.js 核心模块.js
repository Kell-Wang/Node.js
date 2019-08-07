/**
 * ## 4.1.2 process:
 * - process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js 进程状态的
 *   对象，提供了一个与操作系统的简单接口。
 */
// - process.argv:  [ 'C:\\Program Files\\nodejs\\node.exe',
//  'D:\\git-clone\\Node.js\\《Node.js 开发指南》\\4th Node.js 核心模块
//  \\Node.js 核心模块.js' ]
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

// - ES6 类声明: 要声明一个类，首先编写 class 关键字，紧跟着的是类的名字，其他部分的
//   语法类似于对象字面量的简写形式，但是**不需要在类的各元素之间使用逗号分隔**。
class Base {
    constructor(name, base) {
        this.name = name;
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
// events 模块只提供了一个对象: events.EventEmitter. EventEmitter 的核心就是事件发射
// 与事件监听器功能的封装。 EventEmitter 的每个事件由 "一个事件名" 和 "若干个参数" 组成，
// 事件名是一个字符串，通常表达一定的语义。对于每个事件， EventEmitter支持若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
let events = require('events')
let emitter = new events.EventEmitter()

// 为事件 someEvent 注册 2 个事件监听器
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2)
});
emitter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2)
});
emitter.emit('someEvent', 'byvoid', 1991)


/** 4.4.1 fs.readFile(filename, [encoding], [callback(err, data)]) */
let fs = require('fs');
fs.readFile('content.txt', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // console.log("data normal format: ", data)
    }
})

fs.readFile('content.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // console.log("data binary: ", data)
    }
})


/** 4.4.3 fs.open(): */
/**
 * - 4.4.4 fs.read():
 *   + [注: 书上不建议使用 fs.read(), 因为需要手动管理缓冲区和文件指针]
 *
 */
// r 以读取模式打开文件
fs.open('content.txt', 'r', function(err, fd) {
    if (err) {
        console.log(err)
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

})


/**
 * #### 4.5 HTTP 服务器与客户端
 * > Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器和一个简易的 HTTP 客户
 *    端。http.server 是一个基于事件的 HTTP 服务器，它的核心由Node.js下层 C++ 部分实现，而
 *    接口由 JavaScript 封装，兼顾了高性能和简易型。http.request 则是一个 HTTP 客户端工具，
 *    用于向 HTTP 服务器发起请求。
 * - **4.5.1 HTTP 服务器**
 *    + (1)、http.Server 的事件
 *    + (2)、http.ServerRequest (http.服务器请求)
 *    + (5)、http.ServerResponse (http.服务器响应)
 *    + (3)、获取 GET 请求内容
 *    + (4)、获取 POST 请求内容
 *
 * - **4.5.2 HTTP 客户端**
 *    + (1)、http.ClientRequest
 *    + (2)、http.ClientResponse
 * */

// http.Server 是 http 模块中的 HTTP 服务器对象，用 Node.js 做的所有基于 HTTP 协议的系
// 统，如网站、社交应用甚至代理服务器，都是基于 http.Server 实现的。下面是一个基本的示例:
const http = require('http');

// http.createServer 创建了一个 http.Server 的实例，将一个匿名函数作为 HTTP 请求处理函
// 数。这个函数接收 2 个参数，分别是请求对象 (request) 和 响应对象 (response)。
// (a.)
http.createServer((req, res) => {

    // res.writeHead 显示地写回了响应代码 200 (表示请求成功)，指定响应头为 'Cxx':'txx'
    res.writeHead(200, {'Content-Type': 'text/html'});

    // 写入响应体
    res.write('<h1>Node.js</h1>');

    // 通过 res.end 结束并发送。
    res.end('<p>Hello World</p>')

    // 最后该实例还调用了 listen 函数，启动服务器并监听 2100 端口。
}).listen(2100)
console.log("HTTP server is listening at port 2100.");

/** (1)、http.Server 的事件: http.Server 是一个基于事件的 HTTP 服务器，所有的请求都被
 * 封装为独立的事件，开发者只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。它继承
 * 自 EventEmitter，提供了一下几个事件:
 *   + request: 当客户端请求到来时，该事件被触发，提供 2 个参数 req 和 res, 分别是 http.
 *          ServerRequest 和 http.ServerResponse 的实例，表示请求和响应信息。
 *      - http.Server().on('request', (req, res) => {})
 *   + connection: 当 TCP 连接时，该事件被触发，提供了 1 个参数 socket (套接字接口), 为
 *          net.Socket 的实例。 connect 事件的粒度要大于 request, 因为客户端在
 *          Keep-Alive 模式下可能会在同一个连接内发送多次请求。
 *   + close: 当服务器关闭时，该事件被触发。注意不是在用户连接断开时。
 * */
// 在这些事件中，最常用的就是 request 了，因此 http 提供了一个捷径: http.createServer(
// [requestListener]), 功能是创建一个 HTTP 服务器并将 requestListener(请求事件) 作为
// request 事件的监听函数。 这也是上面的 http.createServer() 例子中使用的方法。事实上它
// 显式的实现方法是:
let server = new http.Server();
server.on('request', (req, res) => {
    // 代码同上
})

/** (2)、http.ServerRequest: http.ServerRequest 是 HTTP 请求的信息。它一般由
 * http.Server 的 request 事件发送，作为第一个参数传递，通常简称 request 货 req.
 * ServerRequest 提供了一些属性, 下面列出这些属性。
 *      + complete/httpVersion/method/url/headers/trailers/connection
 *          /socket/client
 *  - HTTP 请求一般分为 2 部分:
 *      + 请求头 (Request Header). 请求头解析完后立即读取。
 *      + 请求体 (Request Body). 请求体可能相对较长，需要一定时间传输，因此
 *         http.ServerRequest 提供了一下 3 个事件用于控制请求体传输:
 *          - data: 当请求体数据到来时，该事件被触发。 req.on(data, function(){})
 *          - end: 当请求体数据传输完成时，该事件被触发。此后将不会再有数据到来。req.end()
 *          - close:用户当前请求结束时，该事件被触发。不同于 end, 如果用户强制终止了传输，
 *              也还是调用 close.
 * */

/** (5)、http.ServerResponse (http.服务器响应): http.ServerResponse 是返回给客户端的
 * 信息，决定了用户最终能看到的结果。它也是由 http.Server 的 request 事件发送的，作为第二
 * 个参数传递，一般简称为 response 或  res 。
 *   - http.ServerResponse 有三个重要的成员函数，用于返回响应头、响应内容以及结束请求。
 *      + response.writeHead(statusCode, [headers])
 *      + response.write(data, [encoding])
 *      + response.end([data], [encoding]) (示例见上面的 (a.))
 * */


/** (3)、获取 GET 请求内容: 由于 GET 请求直接被嵌入在路径中，URL是完整的请求路径，包括了
 * ? 后面的部分，因此你可以手动解析后面的内容作为 GET请求的参数。Node.js 的  url 模块中的
 * parse 函数提供了这个功能，例如：
 * */
// const http = require('http') // 上面已经引入
const url = require('url');
const util = require('util');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(util.inspect(url.parse(req.url, true)))
}).listen(2200);

// 在浏览其中输入: http://127.0.0.1:2200/user?name=byvoid&email=byvoid@byvoid.com
// 将会看到 :
/*Url {
    protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?name=byvoid&email=byvoid@byvoid.com',
        // query 是 GET 请求的内容
        query: [Object: null prototype] { name: 'byvoid', email:
         'byvoid@byvoid.com' },
        // 路径是 pathname
        pathname: '/user',
        path: '/user?name=byvoid&email=byvoid@byvoid.com',
        href: '/user?name=byvoid&email=byvoid@byvoid.com' }
*/


/** (4)、获取 POST 请求内容: HTTP 协议 1.1 版本提供了8种标准的请求方法，其中最常见的就是
 * GET 和 POST。相比 GET 请求把所有的内容编码到访问路径中，POST 请求的内容全部都在请求体中
 * 。http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工
 * 作，譬如上传文件。所以 Node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
 * 让我们看看实现方法：
 * */

/* 不要在真正的生产应用中使用上面这种简单的方法来获取 POST 请求，因为它有严重的效率问题和安全
    问题，这只是一个帮助你理解的示例。 */
// const http = require('http')
const querystring = require('querystring')
// const util = require('util')

http.createServer((req, res) => {
    let post = '';
    req.on('data', function(chunk) {
        post += chunk
    });
    req.on('end', () => {
        post = querystring.parse(post)
        res.end(util.inspect(post))
    })
}).listen(2500);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 * - 4.5.2 HTTP 客户端: http 模块提供了两个函数 http.request 和 http.get，功能是作为
 *      客户端向 HTTP 服务器发起请求
 *   + http.request(options, callback) 发起 HTTP 请求。 接受 2 个参数:
 *      - option 是一个类似关联数组的对象，表示请求的参数。option 常见的参数如下:
 *          + host: 请求网站的域名或 IP 地址。
 *          + port: 请求网站的端口，默认 80。
 *          + method: 请求方法，默认是 GET。
 *          + path: 请求的相对于根的路径，默认是“ / ”。 QueryString 应该包含在其中。
 *              例如 /search?query=byvoid 。
 *          + headers: 一个关联数组对象，为请求头的内容。
 *      - callback 是请求的回调函数。
 *          + callback 传递一个参数，为 http.ClientResponse 的实例。
 *      - http.request 返回一个 http.ClientRequest 的实例。
 *   + http.get(options, callback) http 模块还提供了一个更加简便的方法用于处理 GET 请
 *      求: http.get. 它是 http.request 的简化版，唯一的区别在于 http.get 自动将请求
 *      方法设为了 GET 请求，同时不需要瘦动调用 req.end()
 */

/* 下面是一个通过 http.request 发送 POST 请求的代码: */
// const http = require('http')
// const querystring = require('querystring')
/*let contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: "xx 2#，xx University",
})

let options = {
    host: 'www.byvoid.com',
    path: '/application/node/post.php',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
}
let req = http.request(options, (res) => {
    res.setEncoding('utf-8')
    res.on('data', (data) => {
        console.log(data)
    })
})
req.write(contents)
req.end();*/


/* 通过 http.get 发送请求的代码: */
// const http = require('http')
/*http.get({host: 'www.byvoid.com'}, (res) => {
    res.on('data', (data) => {
        console.log(data)
    })
})*/
