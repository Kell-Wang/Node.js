/** from 2017/2/23.
 * 学习prototype,jquery这些库中封装函数的写法。记录原型，继承，组合继承，这些语法的具体用法。
 * [6.3.3：组合继承(combination inheritance):有时候也叫做伪经典继承，指的是将“原型链”和“借用构造函数”的技术组合到一起，
 * 从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型函数和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 这样，即通过在原型上定义方法实现了函数复用，又能够保证每个实例都有他自己的属性。--《javascript高级程序设计》]
 */

/*------js高级 "6.3.3 组合继承" 示例， P168--------*/
function FatherFun(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

//-------正常在原型上添加方法的写法-------
FatherFun.prototype.sayName = function () {
    console.log(this.name);  // Father function name
};
FatherFun.prototype.outputColors = function () {
    console.log(this.colors);  // ["red", "blue", "green"]
};
//-------正常在原型上添加方法的写法-------

var fatherFunIns = new FatherFun("Father function name"); //instance 实例
fatherFunIns.sayName();
fatherFunIns.outputColors();


function SonFun(name, age) {
    //继承FatherFun构造函数的属性
    FatherFun.call(this, name);
    this.age = age;
}
//继承FatherFun构造函数原型上的方法
SonFun.prototype = new FatherFun(); // 调用FatherFun构造函数,赋值给SonFun构造函数的原型(SonFun.prototype)
SonFun.prototype.constructor = SonFun;  //SonFun构造函数的constructor属性还指向SonFun
SonFun.prototype.sayAge = function () {
    console.log(this.age);
};
var sonFunIns1 = new SonFun("Nicholas", 29); //创建SonFun构造函数的实例，
sonFunIns1.colors.push("black");
console.log(sonFunIns1.colors);  // ["red", "blue", "green", "black"]
sonFunIns1.sayName();      // Nicholas
sonFunIns1.sayAge();       // 29

var sonFunIns2 = new SonFun("Greg", 27);
console.log(sonFunIns2.colors);  //["red", "blue", "green"]
sonFunIns2.sayName();    //Greg
sonFunIns2.sayAge();    //27

console.log("---------------------------------------------------------");

/*------js高级 "6.3.3 组合继承" 示例， P168--------*/


/**prototype中面向对象的写法大致是这样写的**/
function NativeTabSwitch() {
    this.initialize.apply(this, arguments);
}

NativeTabSwitch.prototype = {
    initialize: function (myName, myAge) {
        this.myName = myName;
        this.myAge = myAge;
    },
    consoleName: function(){
        console.log(this.myName);
    },
    consoleAge: function(){
        console.log(this.myAge);
    }
};

var myName = "My name is Nicholas";
var myAge = "My age is 32 years old";
var nativeTabSwiIns = new NativeTabSwitch(myName, myAge);
nativeTabSwiIns.consoleName();
nativeTabSwiIns.consoleAge();
/**prototype中面向对象的写法大致是这样写的**/


console.log("---------------------------------------------------------");

/**jQuery中面向对象的写法是这样写的**/
function jQuery(myName, myAge) {
    return new jQuery.prototype.init(myName, myAge);
}

jQuery.prototype.init.prototype = jQuery.prototype;

jQuery.prototype = {
    constructor: jQuery,
    init: function (myName, myAge) {
        this.myName = myName;
        this.myAge = myAge;
    },
    consoleName: function(){
        console.log(this.myName);
    },
    consoleAge: function(){
        console.log(this.myAge);
    }
};
jQuery().consoleName();
jQuery().consoleAge();
/**jQuery中面向对象的写法是这样写的**/


