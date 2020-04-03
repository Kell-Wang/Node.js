const fs=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频3课件/node/fs');

//readFile(文件名, 回调函数)
fs.readFile('aaa.txt', function (err, data){
  if(err){
    console.log('读取失败');
  }else{
    console.log(data.toString());
  }
});

//fs.writeFile
