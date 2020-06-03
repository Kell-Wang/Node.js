const http = require("http");

const queryString = require("querystring");


// req.url => "/aaa?user=blue&pass=123456"

http.createServer((req, res) => {
    let GET = {};

    if (req.url.indexOf("?") !== -1) {
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
