/**
 * # 第六章 理解 Buffer
 * - buffer ['bʌfə]  --n.缓冲区，缓冲器。 --vt.缓冲
 */


/** ## 6.1 Buffer 结构 */
/**
 * ### 6.1.2 Buffer 对象
 * - Buffer 对象类似于数组，它的元素为 16 进制的 2 位数，即 0 到 255 的数值。示例如下:
 */
let str = '深入浅出 Node.js';
let buf = Buffer.from(str, 'utf-8');
// buf:  <Buffer e6 b7 b1 e5 85 a5 e6 b5 85 e5 87 ba 20 4e 6f 64 65 2e 6a 73>
console.log('buf: ', buf);