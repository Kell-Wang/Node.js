/**Created  on 2017/2/22.*/
var x= require("./foo.js");
console.log(x.a);

if(module === require.main){
    console.log("这个是主模块");
}