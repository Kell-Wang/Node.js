/*Created by Administrator on 2017/7/11.*/
var fs = require("fs");
var str = "Hello node.js，let us study back-end programming";
var buf = new Buffer(str);
console.log(str.length);  //47
console.log(buf.length);  //49
fs.open("./save6MinusSixteen.txt", "w", function (err, fd) {
    /*
      fs.write(fd, buffer, offset, length, position, callback);
      3rd: offset 指定从缓存区中读取数据时的开始读取位置(以字节为单位)
      4th: length 指定从缓存区读取的字节数
      5th: position 指定写入文件时的开始位置(以字节为单位)
     */
    fs.write(fd, buf, 0, 49, 0, function (err, written, buffer) {
        if (err) {
            console.log("Write failed!");
        } else {
            console.log("Write success!");
        }
        //console.log(buffer.toString());
        fs.fsync(fd);  //对文件进行同步操作，即将内存缓冲区中的剩余数据全部写入文件 fs.fsync(fd, [callback]);
        fs.close(fd);  //关闭文件的方法  fs.close(fd, [callback]);
    })
});

//一个汉字的编码为三个字节
fs.open("./save6MinusSixteen.txt", "r", function (err, fd) {
    var buf = new Buffer(255);
    /*
      fs.read(fd, buffer, offset, length, position, callback);
      1st: fd 必须为open方法所使用的回调函数中返回的文件描述符或openSync方法返回的文件描述符。
      2nd: buffer 参数值为一个Buffer对象，用于指定将文件数据读取到那个缓存区中。
      3rd: offset 参数用于指定向缓存区中写入数据时的开始写入位置(以字节为单位)。
      4th: length 指定从文件中读取的字节数
      5th: position 指定读取文件时的开始位置(以字节为单位)。
      6th: callback 指定文件读取操作执行完毕时执行的回调函数。
     */

    fs.read(fd, buf, 0, 9, 3, function (err, bytesRead, buffer) {
        if(err){
            console.log("Write failed!");
        }
        console.log("************分割线**************");
        console.log(buffer.slice(0, bytesRead).toString());
    })
});

console.log("************我是分割线****************");

/**  fs模块中，使用mkdir创建目录  fs.mkdir(path, [mode], callback)
    ./  当前目录;
   ../ 父级目录;
     / 根目录。  **/
var makeDirectory = require("fs");
makeDirectory.mkdir("./makeDir", function(err){
   if(err){
       console.log("利用mkdir方法创建目录失败");
   }else{
       console.log("mkdir创建方法成功");
   }
});

console.log("************我是分割线****************");

/**fs模块中，读取目录 readdir方法， fs.readdir(path, callback) **/




