const http = require("http");

// req.url => "/aaa?user=blue&pass=123456"
// /aaa
// user=blue&pass=123456

http.createServer((req, res) => {
    let GET = {};

    if (req.url.indexOf("?") !== -1) {
        // split() 基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
        let arr = req.url.split("?");
        let url = arr[0];

        let arr2 = arr[1].split("&");

        for (let i=0; i < arr2.length; i++) {
            let arr3 = arr2[i].split("=");
            GET[arr3[0]] = arr3[1];
        }
    } else {
        let url = req.url;
    }

    console.log(url, GET);

}).listen(8093);
