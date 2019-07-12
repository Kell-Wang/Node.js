/** 2017/2/21 - 2/22 **/

/*var 课程源码 = require("课程源码"); //引用http模块
 var server = 课程源码.createServer(); //创建http服务器并将该服务器复制给变量server
 server.on("request", function(req, res){ //为server服务器在接收到客户端时触发的request事件绑定事件处理函数
 console.log(req.url);
 res.end();
 });
 server.listen(1337, "127.0.0.1"); //在浏览器中输入: http://localhost:1337*/
//运行器中: "/"代表用户输入的目标URL地址为web应用程序的根目录。 "/favicon.ico"为收藏夹图标

//------------------------


//3.4.3. 获取指定事件的事件处理函数的数量. //示例：
var http = require("http");
var events = require("events");
var server = http.createServer();
server.on("request", function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("<head><meta charset='UTF-8'/></head>");
    res.write("<h2>看得到的部分用response.write写入,当然response.end()也可以写入</h2>");
    res.end("结束");
    console.log("第一次执行语句");
});
server.on("request", function(req, res){
    console.log("第二次执行语句");
    res.end("第二次执行代码结束");
});
server.on("request", function(req, res){
    console.log("第三次执行语句");
    res.end("第三次执行代码结束");
});
server.listen(1378, "127.0.0.1");
// 使用 EventEmitter 类的 listenerCount 方法获取 HTTP 服务器对象的 request 事件的事件处理函数数量并在控制台中将其输入
console.log(events.EventEmitter.listenerCount(server, "request"));
