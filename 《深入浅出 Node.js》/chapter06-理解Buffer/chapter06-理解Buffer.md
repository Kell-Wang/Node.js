## 第六章 理解 Buffer

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


### 6.1 Buffer 结构
#### 6.1.1 模块结构
#### 6.1.2 Buffer 对象
#### 6.1.3 Buffer 内存分配


### 6.2 Buffer 的转换
#### 6.2.1 字符串转 Buffer
#### 6.2.2 Buffer 转字符串
#### 6.2.3 Buffer 不支持的编码类型


### 6.3 Buffer 的拼接
#### 6.3.1 乱码是如何产生的 
#### 6.3.2 setEncoding() 与 String_decoder()
#### 6.3.3 正确拼接 Buffer


### 6.4 Buffer 与性能


### 6.5 总结


### 6.6 参考资料







### 6.1.2 Buffer 对象
- Buffer 对象类似于数组，它的元素为 16 进制的 2 位数，即 0 到 255 的数值。示例如下:
```javascript
    let str = '深入浅出 Node.js';
    let buf = Buffer.from(str, 'utf-8');
    // buf: <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 20 4e 6f 64 65 2e 6a 73>
    console.log('buf: ', buf);
```