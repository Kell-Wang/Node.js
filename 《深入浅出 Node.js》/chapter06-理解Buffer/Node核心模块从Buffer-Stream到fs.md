## [认识 Node 核心模块 -- 从 Buffer、Stream 到 fs](https://segmentfault.com/a/1190000011968267)


> 生词
- buffer ['bʌfə]  --n.缓冲区，缓冲器。 --vt.缓冲
- stream [striːm] --n.流，溪流，河流（同: river）。 --v.流，流水，流出
- allocation [ælə'keɪʃ(ə)n] --n.分配
- duplex ['djuːpleks] --adj.[计]双工，双方的，双倍的，。--双层公寓
- transform [træns'fɔːm] --vt&vi.转换，改造，转变，改变 
- readable ['riːdəb(ə)l] --adj.可读的
- writable ['raɪtəbl] --adj.可写的
- drain [dreɪn] --v.排出，排干，喝光，耗尽。--n.下水道，排水管
- resume [rɪ'zjuːm]  --v.恢复 


> 所有后台语言都能做的 2 件事是: 文件操作 和 网络编程。
> 计算机无外乎就是 文件 和 通信。 Linux 中，把一切都当做文件。

> Buffer 是缓冲区的意思。Stream 是流的意思。在计算机中，缓冲区是存储中间变量，方便 CPU
  读取数据的一块存储区域；流是类比水流形容数据的流动。Buffer 和 Stream 一般都是字节级别
  的操作。

#### 二进制缓冲区 Buffer
 - 在前端，我们只需要做字符串级别的操作，很少接触字节(byte)、进制等底层操作。然而在后端，
   处理文件、网络协议、图片、视频等是非常常见的、尤其像文件、网络流等操作处理的都是二进制
   数据。为了让 js 能够处理二进制数据，Node 封装了一个 Buffer 类，主要用于操作字节，
   处理二进制数据。
```javascript
    // - 创建一个长度为 10、且用 30 填充的 Buffer.
    const buf1 = Buffer.alloc(10, 30);
    console.log(buf1);  // <Buffer 1e 1e 1e 1e 1e 1e 1e 1e 1e 1e>
    // - 字符串转 Buffer
    const buf2 = Buffer.from('javascript');
    console.log(buf2);  // <Buffer 6a 61 76 61 73 63 72 69 70 74>
    // - 将 Buffer 对象转换为字符串
    console.log(buf2.toString());   // javascript
```

#### 流 Stream
- 流类比水流形容数据的流动，在 文件I/0、网络I/0 中数据的传输都可以称之为流，流就是统一描述
  所有常见输入输出类型的模型，是顺序读写字节序列的抽象表示。
- 数据是有流向的。A端 输出数据到 B端，B端是输入流，得到的是可读流数据；A端是输出端，输出的
  是可写流数据。有的数据流既可以读又可以写，如 TCP链接，Socket连接等，我们称为读写流
  (Duplex)。还有一种在读写过程中可以修改和变换数据的读写流称为 Transform 流。
- Node.js 中 4 种基本的流类型:
    + Writable - 可写入数据的流。(E.g.: fs.createWriteStream()).
    + Readable - 可读取数据的流。(E.g.: fs.createReadStream()).
    + Duplex - 可读又可写的流.(E.g.: net.Socket)
    + Transform - 在读写过程中可以修改或转换数据的 Duplex 流。(E.g.: zlib.createDeflate()) 
- 在 Node 中，这些流中的数据就是 Buffer 对象，可读、可写流会将数据存储到内部的缓存中等待被
  消费；Duplex 和 Transform 则是都维护了 **两个相互独立** 的缓存用于读和写。在维持了合理
  高效的数据流的同时，也使得对于读和写可以独立进行而互不影响。 
- 在 Node 中，这 4 种流都是 EventEmitter 的实例，它们都有 close, error 事件，可读流
  具有监听数据到来的 data 事件等，可写流具有监听数据已传给底层系统的 finish 事件等，
  Duplex 和 Transform 都同时实现了 Readable 和 Writable 的事件和接口。
- 值得一提的是 writable 的 drain 事件，这个事件表示缓存的数据被排空了。为什么有这个事件呢？
  起因是调用可写流的 write 和可读流的 read 都会有一个缓存区用来缓存 写／读 的数据，缓存区
  是有大小的，一旦写的内容超过这个大小，write 方法就会返回 false，表示写入停止，这时如果
  继续 read 完缓存区数据，缓存区被排空，就会触发 drain 事件，可以这样来防止缓存区爆仓：
      


#### 4.4 文件系统 fs : 
> fs 模块是文件操作的封装，它提供了文件的读取、写入、更名、删除、遍历目录链接等 
  POSIX (Portable Operating System Interface 便携式操作系统接口) 文件系统操作。