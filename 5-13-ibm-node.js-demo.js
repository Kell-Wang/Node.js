/*Created by Administrator on 2017/5/13.*/
var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/plain"});
});