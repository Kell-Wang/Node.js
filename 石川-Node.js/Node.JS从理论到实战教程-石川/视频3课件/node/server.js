const http=require('http');
const fs=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频3课件/node/fs');

var server=http.createServer(function (req, res){
  //req.url=>'/download-page.html'
  //读取=>'./www/download-page.html'
  //  './www'+req.url
  var file_name='./www'+req.url;

  fs.readFile(file_name, function (err, data){
    if(err){
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  });
});

server.listen(8080);
