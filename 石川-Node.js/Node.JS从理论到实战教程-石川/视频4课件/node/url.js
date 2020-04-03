const urlLib=require('Programming-Video-Learning-W/V-石川/V-石川-Node.js/Node.JS从理论到实战教程-石川/视频4课件/node/url');

var obj=urlLib.parse("http://www.zhinengshe.com/index?a=12&b=5", true);

console.log(obj.pathname, obj.query);
