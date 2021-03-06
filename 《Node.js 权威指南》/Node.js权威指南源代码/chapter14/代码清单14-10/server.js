var express = require('express');
var fs=require('fs');
var app = express();
var mysql = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    port     : 3306,
    database : 'mysql',
    user     : 'root',
    password : 'root',
});
app.get('/download-app-page.html',function (req,res) {
    res.sendfile(__dirname+'/download-app-page.html');
});
app.delete('/download-app-page.html',function (req,res) {
    req.on('data',function(data){
        var obj=JSON.parse(data.toString());
        pool.getConnection(function(err, connection) {
            if(err) res.send('与MySQL数据库建立连接失败。');
            else{
                var str;
                connection.query('DELETE FROM users where username=? and firstname=?',[obj.username,obj.firstname],function(err,result){
                    if(err) str='在服务器端MySQL数据库中删除数据失败。'+err.message;
                    else    str='在服务器端MySQL数据库中删除数据成功。';
                    connection.release();
                    res.send(str);
                });
            }
        });
    });
});
app.listen(1337, "127.0.0.1");
