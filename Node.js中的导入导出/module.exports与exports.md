## module.exports 与 exports的区别

   每一个node.js执行文件都会自动创建一个module对象，同时module对象会创建一个叫exports的属性,初始化的值为空对象：
    module.exports = {};
        
   Node.js为了方便导出功能函数，node.js会自动实现以下这个语句：
     **foo.js
     exports.a = function(){
        console.log("aaaa");
     }
     
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

【注: 这里说的函数传入的 exports 应该是上面 Node.js 创建闭包的时候传入的参数 】
从上面这段代码可以看到 exports 是 module 的一个属性，exports 值为 {}。在拼接之后的代码中，
给这个函数传入的 exports 是 module.exports， 也就是说 exports 和 modules.exports 
引用的是同一个对象。如果我们给 exports 增加属性，那么因为 module.exports 也会增加相同的属性，
此时 module.exports === exports。然而如果对 exports 赋值的话，那么就会造成 module.exports
和 exports 不指向同一个对象，此时再对 exports 做任何动作都跟 module.exports 没有任何关系了。

