/** Created on 2017/2/22.*/
module.exports = {};
module.exports = {a: 2};



// Vue 中的写法 次写法已经是 ES6的语法了，Node 导出: exports 和 module.exports. ES6 导出: export
// export default {
//     name: "App",
//     data: function () {
//         return {
//             msg: "Welcome to Your Vue.js App"
//         }
//     }
// }



exports.a = function(){
    console.log("aaaaaa");
};
exports.a = 11111;