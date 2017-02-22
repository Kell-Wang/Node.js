
/** from 2017/2/21 **/

/*var http = require("http"); //引用http模块
 var server = http.createServer(); //创建http服务器并将该服务器复制给变量server
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
    res.write("<h2>看得到的部分用response.write写入</h2>");
    res.end("结束");
    console.log("第一次执行语句");
});
server.on("request", function(req, res){
    console.log("第二次执行语句");
    res.end();
});
server.on("request", function(req, res){
    console.log("第三次执行语句");
    res.end();
});
server.listen(1378, "127.0.0.1");
console.log(events.EventEmitter.listenerCount(server, "request"));
