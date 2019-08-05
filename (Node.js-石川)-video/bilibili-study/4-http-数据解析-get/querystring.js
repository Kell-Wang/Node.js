const queryString = require("querystring");
let json = queryString.parse("user=blue&pass=123456&age=18");
console.log(json);
