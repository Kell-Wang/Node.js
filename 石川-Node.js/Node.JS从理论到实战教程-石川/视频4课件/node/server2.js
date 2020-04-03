const http=require('http');
const querystring=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频4课件/node/querystring');

http.createServer(function (req, res){
  var GET={};

  if(req.url.indexOf('?')!=-1){
    var arr=req.url.split('?');
    var url=arr[0];
    
    GET=querystring.parse(arr[1]);
  }else{
    var url=req.url;
  }


  console.log(url, GET);

  //req获取前台请求数据
  res.write('aaa');
  res.end();
}).listen(8080);
