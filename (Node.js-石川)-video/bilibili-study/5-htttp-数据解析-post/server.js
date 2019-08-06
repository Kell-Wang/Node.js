const http = require("http");
const querystring = require("querystring");

http.createServer(function(req, res){
    // POST

    let str="";
    let i = 0;

    req.on("data", data => {

        // ES6 - 模板字面量--字符串占位符: 占位符由一个左侧的 ${ 和右侧的 } 符号组成。中间可以包含任意的javascript表达式。
        // data - 一段数据(如果数据大会分很多次)
        console.log(`第 ${i++}次收到数据`);
        str += data;
    });

    // end - 数据全部接受
    req.on("end", () => {
        let  POST = querystring.parse(str);
        console.log(POST);      // { name: '黄大仙', pass: '46156432154' }
        console.log(req.url);   // 输出form.html中action中的 /aaa
    });




}).listen(8040);


