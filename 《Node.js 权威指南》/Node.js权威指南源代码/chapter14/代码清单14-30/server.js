var express = require('express');
var fs=require('fs');
var app = express();
app.use(express.cookieParser());
app.use(express.session({secret:"test"}));
app.get('/download-app-page.html',function (req,res) {
    res.sendfile(__dirname+'/download-app-page.html');
    var hour = 3600000;
    req.session.cookie.expires = new Date(Date.now() + hour);
    req.session.cookie.maxAge = hour;
    setTimeout(function(){
        console.log('cookie剩余时间'+req.session.cookie.maxAge);
    },10000);
});
app.listen(1337, "127.0.0.1");

