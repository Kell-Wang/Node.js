const http = require("http");
const fs = require("fs");
const querystring = require("querytring");
const urlLib = require("url");

let server =  http.createServer(function(req, res){
    // GET
    let obj = urlLib.parse(req.url, true);  // true 为解析 query

    let url = obj.pathname;
    const GET = obj.query;


    // POST
    let str = "";
    req.on("data", function(data){
        str += data;
    });
    req.on("end", function(){
        const POST = queryString.parse(str);


    })

});

server.listen(8060);