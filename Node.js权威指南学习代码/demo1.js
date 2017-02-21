/** Created by wxh-s022 on 2017/2/21. **/
/*var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<head><meta charset='utf-8'/></head>");
    response.end("你好 node.js");
}).listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");
console.log(global);*/


var person = {
    name : "mingCheng",
    age: "28",
    getName: function(){
        return this.name;
    },
    setName: function(name){
        return  this.name = name;
    }

};
console.log(person.name);
console.log(person.age);
console.log(person.getName());
console.log(person.setName("lili"));