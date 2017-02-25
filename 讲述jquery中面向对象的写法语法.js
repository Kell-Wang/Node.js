/**Create on 2017/2/24.
 * 讲述上面“构造函数-原型-组合继承-面向对象讲解.js”文件中，jquery中面向对象的写法
 * 首先jquery中，这种写法并不合适给多个方法共享很多公用属性的写法，因为参数要传两遍，
 * 第一次是在jQuery构造函数中返回用new调用jQuery.prototype.init()构造函数的时候，
 * 因为参数要传入到jQuery.prototype.init()构造函数中，所以在这个构造函数的原型上，
 * init方法中必须要首先把所有的参数赋值给自定义的属性，这样在其他的方法中，才可以调用
 * 原型上定义的属性，因为**原型对象共享所有的属性**
 **/


(function(){
    console.log(typeof arguments);  //Object
})();



console.log("----------------------------");
/*
 var f = function g(){
 return 23;
 };
 console.log(typeof g());*/


console.log("----------------------------");

(function(x){
    delete x;
    console.log(x);  //1
})(1);



console.log("----------------------------");
var y=1;
var x = y = typeof x;
console.log(x);  //undefined



console.log("----------------------------");
(function f(f){
    console.log(typeof f());  //number
})(function(){return 1;});