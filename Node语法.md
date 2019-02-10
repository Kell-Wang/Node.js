### 1.Node.js中的交互式运行环境 —— REPL(Read-Eval-Print-Loop)
   点击运行输入cmd进入cmd程序输入"node"按下回车即进入REPL运行环境，命令行中将显示REPL运行环境的命令提示符(默认为">").

### 2.node 配置环境需要安装git bash(就是安装git这个软件) 和 nodeJS，如果安装完毕，在cmd中输入node -v 显示版本号就代表安装成功了。
   当然打开git bash 输入 node -v 显示版本号也代表安装成功了。 在git bash中输入npm -v显示npm的版本号。 (git bash 集成在git里面，是git的一个子模块) <br>
    npm是一个node包管理和分发工具，新版的nodejs已经集成了npm包管理工具。有了npm，可以很快的找到特定服务要使用的包，进行下载、安装以及管理已经安装的包。<br>
### 2-2.把git添加到系统环境变量path中，计算机-->属性-->高级系统设置-->环境变量-->系统变量-->path-->添加: ;C:\Program Files\Git\bin 
   成功之后在cmd中输入git就会看到这样的提示: usage: git[--version][--help]...这些提示代码

### 3.在cmd中运行nodejs文件需要先用dos命令进入到保存nodejs的文件夹后在输入node xxx.js启动运行代码。

### 4.在cmd中端口被占用的代码提示为 throw er; //Unhandled 'error' event。

### 5.如果更新了了nodejs文件需要cmd中ctrl+c停掉当前的运行状态，然后node xxx.js 从新运行。


### 6. phpstorm中如果配置好了nodejs和npm安装包之后就可以直接在当前nodejs文件右键 Run'xxx.js' 运行当前文件了，
   因为差不多这个运行环境就相当于一个 cmd命令窗口 加 node.js中的控制台 的合体。
   
### 7. 在phpstorm/IntelliJ IDEA中安装nodejs解释器：
   安装组件 (1)用npm安装nodejs需要的模块组件: File -> Setting -> Plugins -> Browse repositories... <br>
   (2)然后在Settings -- Languages & Frameworks -- Node.js and NPM中配置Node interpreter（node解释程序）：<br>
   C:\Program Files\nodejs\node.exe(就是node在C盘的安装路径),如果此时没有安装node的核心模块，会提示让在线安装，确定就好了。下面的experss(代理)应该就是显示的版本号。-----下面的Coding assistance(编码助手)记得打开。 enabled:激活的。Disable：禁止。 <br>
   (3).在Settings -- Languages & Frameworks -- JavaScript -- libraries(库) -- 添加nodejs的核心模块. 
*-------------------------------------------------------------*


### 4.5 包与npm包管理工具
#### 4.5.1 Node.js中的包: 在Node.js中，可以通过包来对一组具有相互依赖关系得模块进行统一管理。通过包的使用，我们可以将某个独立的功能封装起来。-- 在Node.js中，一个包事实上就是一个目录，其中包含了用于对包进行描述的json格式的package.json文件。在一个包中，通常包含以下内容:
- (1.) package.json文件存放在包的根目录。
- (2.) bin子目录存放二进制文件。(binary /'baɪnərɪ/ adj 二进制的 )
- (3.) lib子目录存放javascript文件。(library /'laɪbrərɪ/ n.库)
- (4.) doc子目录存放对包或包的使用方法进行说明的文档文件。(document 文档)
- (5.) test子目录存放一些对包进行单元测试用的文件。


### 第三章的方法：<node.js 基础知识>
#### 3.1 node.js中的控制台： <br/>
###### 3.1.1 console.log() 方法：用于进行标准输出流的输出，即在控制台中显示一行字符串。
###### 3.1.2 console.error()方法：用于进行标准错误输出流的输出，即向控制台中输出一行错误信息。 <br/>
###### 3.1.3 console.dir() : 用于查看一个对象中的内容并且将该对象的信息输出到控制台中。 <br/>
###### 3.1.4 console.time()和 console.timeEnd(): 用于记录一段代码开始和结束之间的毫秒数，并输出到控制台中。 <br/>
     console.time(label) console.timeEnd(label); 这两个方法均使用一个参数，参数值可以为任何字符串，但是这两个方法所使用的参数<br/>
     字符串必须相同，才能正确地统计出开始时间和结束时间之间所经过的毫秒数。示例如下: <br/>
         console.time("small loop");
         for(var i=0; i<100000, i++){
             ;
         }
         console.timeEnd("small loop");

###### 3.1.5 console.trace(): 用于将当前位置处的栈信息作为标准错误信息进行输出，使用方法如下：
            console.trace(label) 参数值可以为任意字符串，用于标识此处输出的标准错误信息。
###### 3.1.6 console.assert(): 用于对一个表达式的执行结果进行评估，如果该表达式的执行结果为false,则输出一个消息
             字符串并抛出AssertinoErro异常。

#### 3.2 Node.js中的全局作用域及全局函数
###### 3.2.1 Node.js中的全局作用域 : console.log(global);//global下面出现的函数和方法是都不需要用require()方法来请求的。 <br/>
###### 3.2.2 setTimeout()和clearTimeout()函数  <br/>
###### 3.2.3 setInterval()函数和clearInterval()函数  <br/>
###### 3.2.4 定时器对象的unref()方法和 ref()方法 ：setTimeout函数和setInteval函数均返回一个定时器对象。在node.js <br/>
        为定时器对象定义了unref方法与一个ref方法。unref()方法是取消超时和间歇函数的调用，ref()方法是再次执行超时和间歇调用。 <br/>
###### 3.2.5 与模块相相关的全局函数及对象
     1.使用 require()函数加载模块  <br/>
     2.使用 require.resolve()函数查询完整模块名  <br/>
     3.require.cache对象，该对象代表缓存了所有已被加载模块的缓存区。//console.log(require.cache); 

#### 3.3 __filename变量与__dirnam变量
###### 3.3.1 __filename变量: 获取当前模块文件的带有完整绝对路径的文件名。 <br/>
###### 3.3.2 __dirname变量: 获取当前模块文件所在目录的完整绝对路径。  <br/>

#### 3.4 事件处理机制及事件环机制 <br/>
###### 3.4.1 EventEmitter类: 在Node.js的用于实现各种事件处理的event模块中，定义了一个EventEmitter类。 <br/>
     所有可能触发事件的对象都是一个继承了EventEmitter类的子类的实例对象。 <br/>
     EventEmitter类的各种方法:(event代表事件名，listener代表事件处理函数，中括号内的为可选参数)  <br/>
     addListener(event, listener) : 对指定事件绑定事件处理函数(一般都用下面的on方法)  <br/>
     on(event,listener) : 对指定事件绑定事件处理函数  <br/>  
     once(event,listener) : 对指定事件绑定只执行一次的事件处理函数  <br/>
     removeListener(event, listener) : 对指定事件解除事件处理函数  <br/>
     removeAllListener([event])  <br/>
     setMaxListeners(n) : 指定事件处理函数的最大数量。n为整数值，代表最大的可指定事件处理函数的数量。  <br/>
     listeners(event) : 获取指定事件的所有事件处理函数  <br/>
     emit(event,[arg1],[arg2],[...]) : 手工触发指定事件。  <br/>
###### 3.4.2 EventEmitter类的各个方法  <br/>
###### 3.4.3 EventEmitter类自身拥有一个listenerCount()方法 : 用来获取某个对象的指定事件的事件处理函数的数量。  <br/>

#### 在node.js中定义了一个require.main变量 ,用来检测一个模块是否为应用程序中的主模块。需要把下面代码写到当前被检测的模块文件内部。代码如下
    if(module === require.main){
        console.log("这个是主模块");
    }

