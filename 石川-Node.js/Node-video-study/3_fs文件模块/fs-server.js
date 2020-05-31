const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    // - 在浏览器中输入 localhost:8080/index.html
    /**
     * > 最常见的 URL 组成部分分析:
     * - `http://www.joes-hardware.com/inventory-check.cgi?item=12731&color=blue`
     *   + `http:` -- 方案(scheme)
     *   + `www.joes-hardware.com:80` -- 主机(host) 和 端(port)，此处端口省略
     *   + `inventory-check.cgi` -- 路径(path)
     *   + `item=12731&color=blue` -- 查询(query)
     */
    let file_name = "./www" + request.url;

    fs.readFile(file_name, (err, data) => {
        if(err) {
            response.write("404");
        }else {
            response.write(data);
            // - data 即为整个页面
            console.log("data:", data.toString());
        }
        response.end();
    })
}).listen(8080);
