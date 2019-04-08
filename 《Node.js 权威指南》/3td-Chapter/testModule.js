/**Created  on 2017/2/21.*/

var testVar = "这些代码来自testModule.js文件，是主文件调用testMoudule.js文件后的导出值";
console.log(testVar);
exports.testVar = testVar; //exports.