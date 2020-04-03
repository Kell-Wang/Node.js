const http=require('http');
const urlLib=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频4课件/node/url');

http.createServer(function (req, res){
  var obj=urlLib.parse(req.url, true);

  var url=obj.pathname;
  var GET=obj.query;

  console.log(url, GET);

  //req获取前台请求数据
  res.write('aaa');
  res.end();
}).listen(8081);
