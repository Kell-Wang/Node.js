// - Node 核心模块Buffer-Stream到fs.md 示例代码

// - 创建一个长度为 10、且用 30 填充的 Buffer.
const buf1 = Buffer.alloc(10, 30);
console.log(buf1);  // <Buffer 1e 1e 1e 1e 1e 1e 1e 1e 1e 1e>
// - 字符串转 Buffer
const buf2 = Buffer.from('javascript');
console.log(buf2);  // <Buffer 6a 61 76 61 73 63 72 69 70 74>
// - 将 Buffer 对象转换为字符串
console.log(buf2.toString());   // javascript


// - Stream 示例
// const fs = require('fs');
// const rs = fs.createReadStream('stream-demo-fle/readable.txt');
// const ws = fs.createWriteStream('destination.txt');
// rs.on('data', function(chunk) {
//     if (ws.write(chunk) === false) {
//         rs.pause();
//     }
// });
// rs.on('end', () => {
//    ws.end();
// });
// ws.on('drain', () => {
//     rs.resume();
// });