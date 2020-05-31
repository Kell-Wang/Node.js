const http = require("http");

let server = http.createServer((request, response) => {
    console.log("request: ", request);
    switch(request.url){
        case "/1.html":
            response.write("1111");
            break;
        case "/2.html":
            response.write("2222");
            break;
        default:
            response.write("404");
            break;
    }

    response.end();
}).listen(8080);

//浏览器中输入: localhost:8080/1.html


