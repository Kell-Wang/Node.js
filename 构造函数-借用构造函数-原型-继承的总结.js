/** from 2017/2/23.
 * 学习prototype,jquery这些库中封装函数的写法。记录原型，继承，组合继承，这些语法的具体用法。
 * [6.3.3：组合继承(combination inheritance):有时候也叫做伪经典继承，指的是将“原型链”和“借用构造函数”的技术组合到一起，
 * 从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型函数和方法的继承，而通过借用构造函数来实现对实例属性的继承。
 * 这样，即通过在原型上定义方法实现了函数复用，又能够保证每个实例都有他自己的属性。--《javascript高级程序设计》]
 */

//------js高级 "6.3.3 组合继承" 示例， P168--------
function SuperType(name){
    this.name = "wang";
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName= function(){
    alert(this.name);
};
var superType = new SuperType();

superType.sayName();