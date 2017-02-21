/**Created on 2017/2/21.**/

var demo1 = require("./testModule.js");
var demo2 = require("./testModule");  //如果运行代码在调用模块内，这样重复调用是不会多次执行的，感觉这个讲解多余，肯定不会多次加载啊

/*---------------------------------------*/

//判断当前模块文件是不是主文件的判断方法
if(module === require.main){
    console.log("这个是主模块");}

/*---------------------------------------*/

console.log(require.resolve("./testModule.js")); //require.resolve显示一个模块文件的带有完整绝对路径的文件名
