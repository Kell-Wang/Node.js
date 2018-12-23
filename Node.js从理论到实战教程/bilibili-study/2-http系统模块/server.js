const http = require("http");

let server = http.createServer(
    (request, respond) => {
        switch(request.url){
            case "/1.html":
                respond.write("1111");
                break;
            case "/2.html":
                respond.write("2222");
                break;
            default:
                respond.write("404");
                break;
        }

        respond.end();
    }
).listen(8080);

// http://localhost:8080/1.html


