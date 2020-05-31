/** 封装跨浏览器添加事件 **/
let EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }, //添加跨浏览器的事件

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(element, type, handler);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },//移除跨浏览器的事件

    getEvent: function (event) {
        return event ? event : window.event;
    },//取得跨浏览器的事件event

    getTarget: function (event) {
        return event.target || event.srcElement;
    },//取得事件的目标

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = null;
        }
    },//取消事件的默认行为

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },//取消事件的进一步传播和冒泡

    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }, //取得相关元素的方法

    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },// 取得跨浏览器的鼠标按钮事件

    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    }, //鼠标滚轮事件

    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    } //取得字符编码
};


// 1.trim: 去掉字符串的前后空格。 \s: 匹配一个空白字符
let trim= function(el){
    return  el.replace(/(^\s*)|(\s*$)/g, "");
};

// 2.把数字转为字符串后,截取小数点后两位
    // ( slice dot after two places [ Interception of two decimal places ] )
    // \d: 匹配0-9的任何数字。 \(?:): 非捕获型分组。 ?: 匹配前面元字符0次或1次，/ba？/: 将匹配b 或 ba
let dotAfterTwo= function(el){
    var reg = /^\d+(?:\.\d{0,2})?/;
    return String(el).match(reg)[0];
};

// 3.通过id获取元素
let getId= function(id) {
    return typeof id === "string" ? document.getElementById(id): id; 
};

// 4.通过标签名tagName获取元素
let getTagName= function(tagName, oParent){
    // 有父级就在在此元素之下查找，没有直接从document开始查找
    return (oParent || document).getElementsByTagName(tagName);
};

// 5.通过className获取元素
let getClassName= function(oClass, oParent){
    var obj = oParent || document;
    var arr = [];
    if(document.getElementsByClassName){
        return obj.getElementsByClassName(oClass);
    }else{
        var alls = obj.getElementsByTagName("*");
        for(var i=0; i<alls.length; i++){
            if(hasClass(alls[i], oClass)){
                arr.push(alls[i]);
            }
        }
        return arr;
    }
};

// 6.取得当前元素的className的数量
let getClassNum= function(el){
    // split()基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
    return el.className.split(/\s+/);
};


// 7.取得当前元素的索引
let getIndex= function(el){
    let n=0;
    // 同级节点中第一个节点的previousSibling属性为null,最后一个节点的nextSibling属性为null;
    let pre = el.previousSibling;
    while(pre != null){
        if(pre.nodeType === 1){
            n++;
        }
        pre = pre.previousSibling;
    }
    return n;
};

// 判断数组(类数组)包含特定项就返回此项的索引，如果没有就返回-1
let arrIndexOf = function (item, arr) {
    // chapter5: 5.2.7  ECMA 5 为数组实例添加了两个位置方法：indexOf()和lastIndexOf() 。
    // 接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。indexOf() 方法从数组的
    // 开头（位置 0）开始向后查找, 这两个方法都返回要查找的项在数组中的位置，没找到的情况下返回 -1。。
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(item);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

// 判断元素是不是有某个样式hasClass
let hasClass = function (curClass, ele) {
    // 通过split空字符将字符串转换成数组.
    let curClaNames = (ele.className || "").split(/\s+/);
    if (arrIndexOf(curClass, curClaNames) >= 0) {
        return true;
    } else {
        return false;
    }
};


// 给元素添加class
let addClass = function (addClassName, ele) {
    if (hasClass(addClassName, ele)) {
        return null;
    } else {
        ele.className = (ele.className || "") + " " + addClassName;
    }

};

// 删除元素的class
let removeClass = function (remClassName, ele) {
    // \s:  匹配一个空白字符
    let names = (ele.className || "").split(/\s+/);
    let i = 0,
        len = names.length,
        arr = [];
    for (; i < len; i++) {
        if (names[i] !== remClassName) {
            arr.push(names[i]);
        }
    }
    ele.className = arr.join(" ");
};




// 12.仿jQuery的siblings方法
let siblings= function(el){
    var arr = [];
    var previousSib = el.previousSibling;
    while(previousSib){
        if(previousSib.nodeType === 1){
            arr.push(previousSib);
        }
        previousSib = previousSib.previousSibling;
        arr.reverse(); //把顺序反转一下，这样元素的顺序就是按照先后的了
    }
    var nextSib = el.nextSibling;
    while(nextSib){
        if(nextSib.nodeType === 1){
            arr.push(nextSib);
        }
        nextSib = nextSib.nextSibling;
    }
    return arr;
};

// 13.获取元素的偏移量: 调用方式 getPosition(el).left/top
let getPosition= function(el){
    var curEleLeft = el.offsetLeft;
    var curEleTop = el.offsetTop;
    var curEleParent = el.offsetParent;
    while(curEleParent != null){
        curEleLeft += curEleParent.offsetLeft;
        curEleTop += curEleParent.offsetTop;
        curEleParent = curEleParent.offsetParent;
    }
    return {left: curEleLeft, top: curEleTop};
};

// 14.获取元素的样式(通过计算后的所有样式)
let getCss= function(attr, el){
    if(window.getComputedStyle){
        return window.getComputedStyle(el, false)[attr];
    }else{
        return el.currentStyle[attr];
    }
};

// 15.把字符串转换为json
let toJson = function(theData){
    if(typeof(theData) == ""){
        return JSON.parse(theData);
    }else{
        return theData;
    }
};



// requestAnimationFrame polyfill
(function() {
    let lastTime = 0;
    const vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback, element) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));   // 回调时间
            let id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        }
    }
}());