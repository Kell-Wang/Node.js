
const http = require("http");       // 引用http模块
const events = require("events");   // 引用events模块
let server = http.createServer();   // 创建http服务器，并将该服务器赋值给变量server

server.on("request", function(req, res){
   res.writeHead(200, {"Content-type": "text/html"});
   res.write("<head><meta charset='UTF-8'></head>");
   res.write("<h2>response.write写入，用response.end()结束</h2>");
   res.end("结束");

   // 使用 EventEmitter 类的 listenerCount 方法获取 HTTP 服务器对象的 request 事件的事件处理函数数量并在控制台中将其输入
   console.log(events.EventEmitter.listenerCount(server, "request"));
});



// 监听 - 等着
// 端口 - 数字
server.listen(8090);