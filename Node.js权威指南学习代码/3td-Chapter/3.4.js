/** on 2017/2/21.**/

var http = require("http"); //引用http模块
var server = http.createServer();  //创建http服务器并将该服务器复制给变量server
server.on("request", function(req, res){ //为server服务器在接收到客户端时触发的request事件绑定事件处理函数

});