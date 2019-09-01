let toString = Object.prototype.toString;
let isType = function(type) {
    return function(obj) {
        return toString.call(obj);
    }
};
let isString = isType('String');
// let isFunction = isFunction('Function');


// - 下面这个示例来自 --《JavaScript设计模式与编程实践》- 3.1.2
(function() {
    let Type = {};
    for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
        (function(type) {
            Type['is' + type] = function(obj) {
                return Object.prototype.toString.call(obj) 
                    === '[object ' + type + ']';
            }
        })(type)
    }
    console.log('Type.isArray([]): ', Type.isArray([]));
    console.log('Type.isString("str"): ', Type.isString('str'));

})();