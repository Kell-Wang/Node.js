let demo1 = require("./testModule.js");
// - 如果运行代码在调用模块内，这样重复调用是不会多次执行的
let demo2 = require("./testModule.js");


//判断当前模块文件是不是主文件的判断方法
if(module === require.main){
    console.log("这个是主模块");}


// - require.resolve显示一个模块文件的带有完整绝对路径的文件名
console.log(require.resolve("./testModule.js"));


/*2017/6/11 - edit*/

var testModule1 = require("./testModule.js");
var testModule2 = require("./testModule.js");

// - require.cache对象，代表了缓存了所有已被加载模块的缓存区。
delete require.cache[require.resolve("./testModule.js")]
var testModule3 = require("./testModule.js");

// -  __filename : 当前文件的带有完整绝对路径的文件名
console.log(__filename);
// - _dirname :  用于获取文件的当前目录名
console.log(__dirname);











