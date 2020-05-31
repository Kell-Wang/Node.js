const http = require("http");

// req.url => "/aaa?user=blue&pass=123456"
// /aaa
// user=blue&pass=123456

const queryString = require("Node.js/石川-Node.js/bilibili-study/4_http数据解析-get/querystring");


http.createServer((req, res) => {
    let GET = {};

    if (req.url.indexOf("?") !== -1) {
        // split() 基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
        let arr = req.url.split("?");
        let url = arr[0];

        GET = queryString.parse(arr[1]);

    } else {
        let url = req.url;
    }

    // /aaa?name=aaa&pass=123456
    console.log(req.url);

    // [Object: null prototype] { name: 'aaa', pass: '123456' }
    console.log("GET", GET);

}).listen(8094);
