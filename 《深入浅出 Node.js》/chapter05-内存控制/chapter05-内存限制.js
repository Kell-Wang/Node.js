// global:  Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function]
//   }
// }
// console.log("global: ", global);


/** ## 5.3 内存指标 */

/** 
 * ### 5.3.1 查看内存使用情况
 * - 前面我们提到 process.memoryUsage() 可以查看内存使用情况。除此之外， os 模块中的 
 *   totalmem() 和 freemem() 方法也可以查看内存使用情况。
 * 
 * - 查看内存使用情况
 *     + 在当前文件夹内打开控制台输入: process.memoryUsage() 即可输出
 *     + 输出大致为:
 *       ```{
 *              // - rss: resident set size 进程的常住内存部分。
 *              rss: 23465984,
 *              // - heapTotal 堆中总共申请的内存
 *              heapTotal: 4902912,
 *              // - heapUsed 目前堆中使用中的内存量
 *              heapUsed: 2604424,
 *              external: 1295414
 *          }```
 */
let format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + 'MB';
};
let showMemory = function() {
    let mem = process.memoryUsage();
    // Process: heapTotal: 4.05MB, heapUsed: 2.02MB, rss: 20.37MB
    console.log('Process: heapTotal: ' + format(mem.heapTotal) + 
        ', heapUsed: ' + format(mem.heapUsed) + ', rss: ' + format(mem.rss));
    console.log('--------- --------- --------- ');
};
showMemory();

// - 写一个方法用于不停地分配内存但不释放内存，相关代码如下:
// let use_mem = function() {
//     let size = 20 * 1024 * 1024;
//     let arr = new Array(size);
//     for (let i = 0; i < size; i++) {
//         arr[i] = 0;
//     }
//     return arr;
// };
// let total = [];
// for (let j = 0; j < 15; j++) {
//     showMemory();
//     total.push(use_mem());
// }
// - 执行结果见书上讲解：P125 
// showMemory();


/** 
 * ### 5.3.2 查看系统的内存占用
 * - 与 process.memoryUsage() 不同的是， os 模块中的 totalmem() 和 freemem() 这
 *   2 个方法用于查看操作系统的内存使用情况，它们分别返回系统的总内存和闲置内存，以字节为
 *   单位。
 */
let os = require('os');
let getGB = function(bytes) {
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + 'GB';
};
console.log("os.totalmem:", getGB(os.totalmem()));
console.log("os.freemem:", getGB(os.freemem()));


/**
 * ### 5.5.1 node-heapdump
 *
 *
 */

     