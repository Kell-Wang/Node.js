## module.exports 与 exports的区别
   每一个node.js执行文件都会自动创建一个module对象，同时module对象会创建一个叫exports的属性,初始化的值为：
        module.exports = {};
   Node.js为了方便导出功能函数，node.js会自动实现以下这个语句：
     **foo.js
     exports.a = function(){
        console.log("aaaa");
     }
     
    