const http = require("http");
const queryString = require("queryString");

http.createServer((request, response) => {
    // - POST - req
    let str = '';   // - 接受数据
    // data —— 有的一段数据到达 (数据量大会传很多次)
    let i = 0;
    request.on('data', (data) => {
        console.log(`第 ${i++}次收到数据`);
        str += data;
    });

    // end —— 数据全部到达后的事件
    request.on('end', () => {
        const data = queryString.parse(str);
        console.log("接受的数据: ", data);
    });

}).listen(8040);


