/**Created on 2017/2/21.**/

var demo1 = require("./testModule.js");
var demo2 = require("./testModule.js");  //如果运行代码在调用模块内，这样重复调用是不会多次执行的，感觉这个讲解多余，肯定不会多次加载啊

/*---------------------------------------*/

//判断当前模块文件是不是主文件的判断方法
if(module === require.main){
    console.log("这个是主模块");}

/*---------------------------------------*/

console.log(require.resolve("./testModule.js")); //require.resolve显示一个模块文件的带有完整绝对路径的文件名


/*2017/6/11 - edit*/

var testModule1 = require("./testModule.js");
var testModule2 = require("./testModule.js");
delete require.cache[require.resolve("./testModule.js")]; //require.cache对象，代表了缓存了所有已被加载模块的缓存区。
var testModule3 = require("./testModule.js");

console.log(__filename); //__filename : 当前文件的带有完整绝对路径的文件名 : F:\github\Node.js\Node.js权威指南学习代码\3td-Chapter\3-1.js
console.log(__dirname);  //__dirname :  用于获取文件的当前目录名 : F:\github\Node.js\Node.js权威指南学习代码\3td-Chapter


/**3.4 事件处理机制和事件环机制 :

**(js中:在触发DOM上的某个事件时，会产生一个事件对象event,这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。)**

- (1.) 3.4.1 EventEmitter类 : emitter /ɪ'mɪtə/ n.发射器
   在Node.js用于实现各种事件处理的event模块中，定义了一个EventEmitter类。所有可能触发事件的对象都是一个继承了EventEmitter类的子类实例对象，EventEmitter类
   定义了许多方法，所有与对象的事件处理函数的绑定与解除都依靠这些方法的调用来执行。方法列表:(event:代表事件名，listener:代表事件处理函数，中括号内的参数为可以选参数)

   **这些方法都绑定在支持事件处理程序的对象实例上**
   +  addListener(event, listener)  :       为指定的事件绑定事件处理函数
   +  on(event, listener)           :       为指定的事件绑定事件处理函数(addListener方法的别名)
   +  once(event, listener)         :       为指定的事件只执行一次事件处理函数
   +  removeListener(event, listener) :     对指定事件解除事件处理函数
   +  removeAllListeners([event])   :       对指定事件解除所有事件处理函数
   +  setMaxListeners(n)            :       指定事件处理函数的最大数量
   +  listeners(event)              :       获取指定事件的所有所有事件处理函数
   +  emit(event, [arg1],[arg2], [...]) ：  手动触发指定事件
*/

/*--------自定义事件示例-start----------*/
//调用 radio.js
/*var Radio = require("../radio.js");
var station = {
    freq: "80.16",  //频率 frequency
    name: "Rock N Roll Radio"
};
//创建一个Radio实例
var radio = new Radio(station);
//添加一个open事件监听器
radio.on("open", function(station){
    console.log("'%s' FM %s OPENED", station.name, station.freq);
    console.log("???");
});

//添加一个Close事件监听器
radio.on("close", function(station){
   console.log("'%s' FM %s CLOSED", station.name, station.freq);
});*/
/*----------自定义事件示例-over---------*/

/*---------3.4.2 EventEmitter类的方法示例-start---------*/
var http = require("http");
var server = http.createServer(); //创建http服务器
//为server服务器在接收到客户端请求时触发request事件绑定事件处理函数
server.on("request", function(req, res){ //request, response
    if(req.url !== "favicon.ico"){
        console.log(req.url);
        res.end();
    }
});
server.listen(1337, "127.0.0.1");


/*---------3.4.2 EventEmitter类的方法示例-over---------*/















