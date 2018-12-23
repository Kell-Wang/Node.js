const http  = require("http");
const fs    = require("fs");



http.createServer(
    (request, respond) => {
        var file_name = "./www" + request.url;

        fs.readFile(file_name, (err, data) => {
            if(err) {
                respond.write("404");
            }else {
                respond.write(data);
            }
            respond.end();
        })
    }
).listen(8080);