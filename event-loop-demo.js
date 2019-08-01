// 示例讲解

/**
 * - 讲解：
 *   + 整体 script 作为第一个 宏任务(MacroTask) 进入主线程，遇到 console.log 输出
 *     script start
 *   + 遇到 setTimeout, 其回调函数被分到宏任务 Event Queue (事件队列) 中
 *   + 遇到 Promise 其 then 函数被分到 微任务(MicroTask) 事件队列中，记为 then1, 
 *     之后又遇到 then 函数，将其分到微任务事件队列中，记为 then2
 *   + 遇到 console.log 输出 script end
 */
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);
// Promise.resolve().then(function() {
//     console.log('promise01');
// }).then(function() {
//     console.log('promise02');
// });
// console.log('script end!');






console.log("---------");

// 事件循环-示例
(function(){
    setImmediate(function() {console.log(1)});
    setTimeout(() => { console.log(2) }, 0);
    new Promise((resolve) => {
        console.log(3);
        resolve();
        console.log(4);
    }).then(() => { console.log(5); });
    console.log(6);
    process.nextTick(() => { console.log(7); });
    console.log(8);
    /**
     * - 执行顺序分析:
     *    + (1) 事件循环从宏任务队列开始，最初宏任务队列中，只有一个 script(整体代码) 任务
     *      , 当遇到任务源(task source)时，则会先分发任务到对应的任务队列中去。所以 
     *      setImmediate 会分配到宏任务队列中。
     *    + (2) setTimeout 也被分配到宏任务队列，但是记住 setTimeout 的优先级高于 
     *      setImmediate.
     *    + (3) 接着执行遇到 Promise， new Promise 中的代码立即执行，输出 3，执行
     *      resolve, 然后输出 4; 接着执行 then 把其分发到微任务队列中去，记做 5，但是此时
     *      页面可能有同步代码未执行，所以 5 会暂存到微任务队列中。
     *    + (4) 第4步执行同步代码 console.log(6);
     *    + (5) 把 process.nextTick() 内的代码分配到微任务队列中，但 nextTick()
     *      在微任务队列中的优先级高于 Promise.then()，所以 nextTick 中的代码执行会早于
     *      Promise.then()，这个顺序是放入到 微任务队列中自动调整的。
     *    + (6) 接着执行同步代码 console.log(8);
     */ 

})();
