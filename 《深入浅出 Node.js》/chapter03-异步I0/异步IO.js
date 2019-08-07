process.nextTick(function() {
    console.log("nextTick 延迟执行 1");
});

process.nextTick(function() {
    console.log("nextTick 延迟执行 2");
});

setImmediate(function() {
    console.log("setImmediate 延迟执行 1");
    // - 进入下次循环
    process.nextTick(function() {
        console.log("强势插入");
    })
});

setImmediate(function() {
    console.log("setImmediate 延迟执行 2");
});

console.log("正常执行");


// - 输出顺序为:
// 正常执行
// nextTick 延迟执行 1
// nextTick 延迟执行 2
// setImmediate 延迟执行 1
// 强势插入
// setImmediate 延迟执行 2
