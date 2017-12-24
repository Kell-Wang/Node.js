// Date: 2017-12-23 15:52

/**
 * module.exports 与 exports的区别
     每一个node.js执行文件都会自动创建一个module对象，同时module对象会创建一个叫exports的属性,初始化的值为：
     module.exports = {};
     Node.js为了方便导出功能函数，node.js会自动实现以下这个语句：
     **foo.js
     exports.a = function(){
            console.log("aaaa");
     }
 */


// 在模块中写的代码nodeJs在模块编译的过程中会对模块进行包装，最后会返回类似下面你的代码:
// 详细的讲解文章见: https://github.com/chemdemo/chemdemo.github.io/issues/2

(function (exports, require, module, __filename, __dirname) {
    // module 就是这个模块本身
    // require 是对Node.js实现查找模块的模块 Module._load实例的引用
    // __filename:


    let a = 12,
        b = 5;
    exports.a = 12;     // 一个一个输出
    module.exports = { a: 12, b:5, c:14 };   // 批量输出
    console.log(module.exports = exports);   // true
})();