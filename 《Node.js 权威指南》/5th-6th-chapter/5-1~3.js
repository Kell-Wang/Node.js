/*Created by Administrator on 2017/7/12.*/
/**
  5.1 创建Buffer对象: 3种方法:
    (1.) new Buffer(size) : 第一种只需要把缓存区大小(以字节为单位)指定为构造函数的参数。被创建的Buffer对象拥有一个length属性，属性值 为缓存区大小。
    (2.) new Buffer(array): 第二种用一个存放了需要被指定数值的数组来作为构造函数的参数。
    (3.) new Buffer(str, [encoding]): 第一个参数为初始化缓存区的字符串。第二个参数为一个用于指定文字编码格式的字符串，默认为"uft8"
 **/


/** 5.6 复制缓存数据:  a.copy(b, 10) 把 a Buffer对象中的内容复制到 b Buffer对象中 **/
var a= new Buffer("Hello node.js");
console.log(a.toString().length); //13
console.log(a.length);  //13
console.log(Buffer.isBuffer(a));    //Buffer.isBuffer(); 判断一个独享是否为一个Buffer对象
/** Buffer.byteLength() **/
console.log(Buffer.byteLength(a, "uft8"));
console.log(Buffer.byteLength(a, "base64"));
var b = new Buffer(128);
b.fill(0);
a.copy(b, 10);  //从第10位开始写入数据(默认为0)
console.log(b);