const fs=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频3课件/node/fs');

//writeFile(文件名, 内容, 回调)
fs.writeFile("bbb.txt", "sdafasdwere", function (err){
  console.log(err);
});
