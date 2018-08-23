## module.exports 与 exports的区别

   每一个node.js执行文件都会自动创建一个module对象，同时module对象会创建一个叫exports的属性,初始化的值为空对象：
    module.exports = {};
        
   Node.js为了方便导出功能函数，node.js会自动实现以下这个语句：
     ``**foo.js
          exports.a = function(){
             console.log("aaaa");
          }
     ``
     
## [Node.js 中 module.exports 和 exports 的区别](https://zhuanlan.zhihu.com/p/30672098)    

```base
    # 官网的例子
    # circle.js
    var PI = Math.PI;
    exports.area = function (r) {
        return PI * r * r;
    };
    exports.circumference = function (r) {
        return 2 * PI * r;
    };
```

在 circle.js 中写的源码如上，然而 Node.js 在加载的时候会在源码外面拼出一个闭包，代码如下:
```base
    (function (exports, require, module, __dirname, __filename) {
        // circle.js
        var PI = Math.PI;
        exports.area = function (r) {
            return PI * r * r;
        };
        exports.circumference = function (r) {
            return 2 * PI * r;
        };
    });
```

Node.js 调用的这段代码为:
```base
   
    function Module(id, parent) {
        this.id = id;
        this.exports = {};
        this.parent = parent;
        if ( parent && parent.children ) {
            parent.children.push(this);
        }
        this.filename = null;
        this.loaded = false;
        this.children = [];
    }
    
    Module.prototype._compile = function (content, filename) {
      var self = this;
      function require (path) {
          return self.require(path);
      }
    
      var dirname = path.dirname(filename);
    
      var args = [self.exports, require, self, filename, dirname];
      return compiledWrapper.apply(self.exports, args);
    };
```

从上面这段代码可以看到 exports 是 module 的一个属性，exports 值为 {}。在拼接之后的代码中，
给这个函数传入的 exports 是 module.exports， 也就是说 exports 和 modules.exports 引用的是同一个对象。
如果我们给 exports 增加属性，那么因为 modules.exports 也会增加相同的属性，此时 modules.exports === exports。
然而如果对 exports 赋值的话，那么就会造成 modules.exports 和 exports 不指向同一个对象，
此时再对 exports 做任何动作都跟 modules.exports 没有任何关系了，用一段代码模拟就是:
```
var module = { exports: {}};
var exports = module.exports;
exports.a = 1;
console.log(module.exports); // {a: 1}

exports = {b:2};
console.log(module.exports); // {a: 1}
```

所以从上面的代码可以看出，如果我们想在模块文件中提供其他模块可以访问的接口，最好写成 
exports["key"] = value 或者 module.exports = {key: value} 的形式， 总之别对 exports 赋值。


在每个模块中Node都提供了一个Module 对象，代表当前模块。
```
//console.log(Module);
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: '/Users/zss/node-Demo/my-app/testNOde/b.js',
  loaded: false,
  children: [],
  paths: 
   [ '/Users/zss/node-Demo/my-app/testNOde/node_modules',
     '/Users/zss/node-Demo/my-app/node_modules',
     '/Users/zss/node-Demo/node_modules',
     '/Users/zss/node_modules',
     '/Users/node_modules',
     '/node_modules' 
     ] 
   }
```
module.exports属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。
为了方便，Node为每个模块提供一个exports变量，指向module.exports。我们把它们都打印出来看看究竟,
```
//test.js
console.log(module.exports);
console.log(exports);
console.log(module.exports===exports);

exports.test = ()=>{
    console.log('exports 1');
};
module.exports.test1 = ()=>{
    console.log('module.exports 1');
};
console.log(module.exports);
console.log(exports);

//输出：
{}
{}
true
{ test: [Function], test1: [Function] }
{ test: [Function], test1: [Function] }
```

从上例可以看出：
1.每个模块文件一创建，有个var exports = module.exports = {};使exports和module.exports都指向一个空对象。
**2.module是全局内置对象，exports是被var创建的局部对象，module.exports和exports所指向的内存地址相同
所有的exports收集到的属性和方法，都赋值给了Module.exports，最终返回给模块调用的是module.exports而不是exports。**

再举个例子：
```
//test.js
exports.test = ()=>{
    console.log('exports 1');
};
module.exports={
    test:function(){
        console.log('module.exports 1');
    },
    testmodule:()=>{
        console.log('module.exports 2')
    }
}
console.log(module.exports);
console.log(exports);

 
 //输出
{ test: [Function: test], testmodule: [Function: testmodule] }
{ test: [Function] }

//在index.js文件中调用test2.js
let a=require('./test2');
a.test();
a.testmodule();
//输出：
module.exports 1
module.exports 2
```
所有的exports收集到的属性和方法，都赋值给了Module.exports，当直接把函数和属性传给module.exports时,
module.exports与exports不想等了，在调用时候，exports的属性和方法会被忽略，所以最终返回给
模块调用的是module.exports而不是exports。