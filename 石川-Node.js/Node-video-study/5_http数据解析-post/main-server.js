const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");

let server =  http.createServer(function(req, res){
    // - GET 请求
    let obj = urlLib.parse(req.url, true);  // true 为解析 query
    let url = obj.pathname;
    const GET = obj.query;
    // [Object: null prototype] { name: 'Kell', pass: '13242342342' }
    console.log("接收到的客户端 GET 的数据:", GET);


    // - POST 请求
    let str = "";
    req.on("data", function(data){
        str += data;
    });
    req.on("end", function(){
        const POST = queryString.parse(str);
        // [Object: null prototype] {name:'Kell', pass:'123456'}
        console.log('接收到的客户端 POST 的数据:', POST);
    })

});


server.listen(8060);