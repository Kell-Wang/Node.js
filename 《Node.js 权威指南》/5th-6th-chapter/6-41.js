/**Created by Administrator on 2017/7/14.*/

var fs = require("fs");
//fs模块中，使用createReadStream方法创建一个将文件内容读取为流数据的ReadStream对象
//6-37
var file = fs.createReadStream("./message.txt", {start:3, end:12});
file.on("open", function(fd){
    console.log("开始读取文件");
});
file.on("data", function(data){
    console.log("读取到数据。");
    console.log(data);
});
file.on("end", function(){
   console.log("文件已全部读取完毕。");
});
file.on("close", function(){
    console.log("文件被关闭。");
});
file.on("error", function(err){
    console.log("读取文件失败。");
});


console.log("***************分割线****************");
var out = fs.createWriteStream("./test1.txt");
