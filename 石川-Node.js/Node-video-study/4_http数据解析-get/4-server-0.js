const http = require("http");

// req.url => "/aaa?user=blue&pass=123456"
// pathname: /aaa
// query: user=blue&pass=123456

http.createServer((req, res) => {
    let GET = {};

    // - 判断 url 中是否有 ?, 目的是排出 favicon.ico
    if (req.url.indexOf("?") !== -1) {
        // - split() 基于指定的分隔符将一个字符串分割成多个子字符串,
        //   并将结果放在一个数组中. 简记为: 将字符串转换成数组
        let arr = req.url.split("?");
        // arr[0]: /aaa
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
