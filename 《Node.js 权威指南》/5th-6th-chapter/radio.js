/*Created by Administrator on 2017/6/11.*/

/*-----------------------start-----------------------*/
/*var EventEmitter = require("events").EventEmitter;
var radium = new EventEmitter();

//绑定radiation事件 --> /reɪdɪ'eɪʃ(ə)n/ 放射
radium.on("radiation", function(ray){
    console.log(ray);
});
setTimeout(function(){
    //触发radiation事件
    radium.emit("radiation", "GAMMA");  //emit()手动触发指定事件
}, 1000);*/
/*-----------------------over-----------------------*/

var util = require("util"); //util的inherits方法，实现对象之间原型继承
var EventEmitter = require("events").EventEmitter;

var Radio = function(station){
    var self = this;
    setTimeout(function(){
        self.emit("open", station);
    }, 0);

    setTimeout(function(){
        self.emit("close", station);
    }, 5000);

    this.on("newListener", function(listener){
        console.log("Event Listener: " + listener);
    })
};

//Radio 继承 EventEmitter
util.inherits(Radio, EventEmitter);
module.exports = Radio;