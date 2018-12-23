var express = require('express');
var fs=require('fs');
var app = express();
app.use(express.cookieParser());
app.use(express.session({secret:"test",cookie:{maxAge:3600000}}));
app.get('/download-app-page.html',function (req,res) {
    res.sendfile(__dirname+'/download-app-page.html');
    console.log(req.session.cookie);
});
app.listen(1337, "127.0.0.1");

