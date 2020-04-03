const path=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频15课件/node/path');

var str='c:\\wamp\\www\\a.html';

var obj=path.parse(str);

//base      文件名部分
//ext       扩展名
//dir       路径
//name      文件名部分
console.log(obj);
