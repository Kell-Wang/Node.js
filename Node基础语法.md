## npm：全称是 Node Package Manager (Node.js 的包管理工具)。
- npm 有 3 个不同的部分组成：
    + 1、网站：用户发现软件包的主要工具。
    + 2、注册表： 一个关于软件包信息的大型数据库。
    + 3、CLI: 告诉开发者如何在注册表上发布软件包或下载软件包。
- Yarn 是什么？
    + Yarn 是 Facebook、Google、Exponent 和 Tilde 共同开发的一款新 JavaScript 包管
      理工具。它并没有试图完全取代 npm。Yarn 同样是从 npm 注册源获取模块的 CLI 客户端。     
- 如何安装 Yarn ?
    + Yarn 官方文档明确说明不推荐用 `npm install yarn -g` 来安装，因为在基于 Node.js
      的包管理工具安装 Yarn 时，该包未被签名，并且只通过基本的 SHA1 散列进行了唯一完整性
      检查。这在安装系统级应用时有安全风险。
    + 为此，建议访问以下网址，采用 Yarn 官方推荐的方式进行安装 (Mac 系统)：
      `https://yarnpkg.com/zh-Hans/docs/install#mac-tab` 
      官网推荐通过 Homebrew 包管理器安装 Yarn，如果没有安装 Node.js 它也可以安装。
      `brew install yarn`




## 《Node.js 权威指南》第三章的方法：<node.js 基础知识>
- 3.1 node.js中的控制台：
    - 3.1.1 console.log() 方法：用于进行标准输出流的输出，即在控制台中显示一行字符串。
    - 3.1.2 console.error()方法：用于进行标准错误输出流的输出，即向控制台中输出一行错误信息。
    - 3.1.3 console.dir() : 用于查看一个对象中的内容并且将该对象的信息输出到控制台中。
    - 3.1.4 console.time()和 console.timeEnd(): 用于记录一段代码开始和结束之间的毫秒数，并输出到控制台中。
        + console.time(label) console.timeEnd(label); 这两个方法均使用一个参数，参数值可以为任何字符串，但是
         这两个方法所使用的参数字符串必须相同，才能正确地统计出开始时间和结束时间之间所经过的毫秒数。示例如下:
         ```javascript
             console.time("small loop");
                 for(var i=0; i<100000; i++){
                     ;
                 }
             console.timeEnd("small loop");
         ```
    - 3.1.5 console.trace(): 用于将当前位置处的栈信息作为标准错误信息进行输出，使用方法如下：
    - 3.1.6 console.assert(): 用于对一个表达式的执行结果进行评估，如果该表达式的执行结果为false,则输出一个消息字符串并抛出AssertionErro异常。

- 3.2 Node.js中的全局作用域及全局函数
    + 3.2.1 Node.js中的全局作用域 : console.log(global); //global下面出现的函数和方法是都不需要用require()方法来请求的。
    + 3.2.2 setTimeout() 和 clearTimeout() 函数
    + 3.2.3 setInterval() 函数和 clearInterval() 函数
    + 3.2.4 定时器对象的 unref() 方法和 ref() 方法 ：setTimeout 函数和 setInteval 函数均返回一个定时器对象。在node.js
            为定时器对象定义了unref方法与一个ref方法。unref()方法是取消超时和间歇函数的调用，ref()方法是再次执行超时和间歇调用。
    + 3.2.5 与模块相相关的全局函数及对象
         - 1、使用 require()函数加载模块
         - 2、使用 require.resolve()函数查询完整模块名
         - 3、require.cache对象，该对象代表缓存了所有已被加载模块的缓存区。//console.log(require.cache);

- 3.3 __filename变量与__dirname变量
    + 3.3.1 __filename变量: 获取当前模块文件的带有完整绝对路径的文件名。
    + 3.3.2 __dirname变量: 获取当前模块文件所在目录的完整绝对路径。

- 3.4 事件处理机制及事件环机制
    + 3.4.1 EventEmitter类: 在Node.js的用于实现各种事件处理的event模块中，定义了一个EventEmitter类。
       所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象。
       EventEmitter类的各种方法:(event代表事件名，listener代表事件处理函数，中括号内的为可选参数)
         - addListener(event, listener) : 对指定事件绑定事件处理函数(一般都用下面的on方法)
         - on(event,listener) : 对指定事件绑定事件处理函数
         - once(event,listener) : 对指定事件绑定只执行一次的事件处理函数
         - removeListener(event, listener) : 对指定事件解除事件处理函数
         - removeAllListener([event])
         - setMaxListeners(n) : 指定事件处理函数的最大数量。n为整数值，代表最大的可指定事件处理函数的数量。
         - listeners(event) : 获取指定事件的所有事件处理函数
         - emit(event,[arg1],[arg2],[...]) : 手工触发指定事件。
    + 3.4.2 EventEmitter类的各个方法
    + 3.4.3 EventEmitter类自身拥有一个listenerCount()方法 : 用来获取某个对象的指定事件的事件处理函数的数量。

    + 在node.js中定义了一个require.main变量 ,用来检测一个模块是否为应用程序中的主模块。需要把下面代码写到当前被检测的
      模块文件内部。代码如下
      ```javascript
        if(module === require.main){
            console.log("这个是主模块");
        }
      ```

