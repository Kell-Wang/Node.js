# 附录 A

## 内容 (Content)
#### A.1 作用域
+ A.1.1 函数作用域
    - 略
+ A.1.2 全局作用域
    - 略 
       
#### A.2 闭包
- 闭包 (closure) 是函数式编程中的概念, 出现于 20 世纪 60 年代, 最早实现闭包的语言是
  Scheme，它是 LISP 的一种方言。之后闭包特性被其他语言广泛吸纳。
- **`闭包的严格定义是 "由函数(环境)及其封闭的自由变量组成的集合体".`**  
- A.2.1 什么是闭包
    + 通俗地讲, js 中每个函数都是一个闭包, 但通常意义上嵌套的函数更能够体现出闭包的特性.
      请看下面的这个例子:
      ```js
        let generatorClosure = function() {
            let count = 0;
            let get = function() {
                count++;
                return count;
            };
            return get;
      
            // - 上面的 let get = function() {}; return get; 可以简写: 
            // return function() {
            //     count++;
            //     return count;
            // };   
      
        };
        let counter = generatorClosure();
        console.log(counter()); // 1
        console.log(counter()); // 2
        console.log(counter()); // 3
      ```
- A.2.2 闭包的用途
    + (1) 嵌套的回调函数
    + (2) 实现私有成员
        - 具体详解见: `《深入理解ES6》\chapter07-Set集合与Map集合\`
          `chapter07-Set集合和Map集合.md`
#### A.3 对象
- A.3.1 创建和访问
- A.3.2 构造函数
- A.3.3 上下文对象
- A.3.4 原型
- A.3.5 对象的复制
