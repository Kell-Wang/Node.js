/**
 * Date:    2017/12/15.
 * TODO:    js-公共函数集
 */


// 公共函数集
const Tools = {

    getId(id){
        return typeof id === "string" ? document.getElementById("id") : id;
    },

    getTagName(tagName, oParent){
        return (oParent || document).getElementsByTagName(tagName);
    },

    getClassName(oClass, oParent){
        let obj = oParent || document,
            arr = [];
        if(document.getElementsByClassName){
            return obj.getElementsByClassName(oClass);
        } else {
            let oTags = obj.getElementsByTagName("*"),
                i = 0,
                len = oTags.length;
            for(; i < len; i++){
                if(this.hasClass(oTags[i], oClass)){
                    arr.push(oTags[i]);
                }
            }
            return arr;
        }
    },


    // 找到当前项在数组中的索引
    index(arr, item){
        let i =0,
            len = arr.length;
        for(; i < len; i++) {
            if(arr[i] === item){
                return i;
            }
        }
        return -1;
    },

    hasClass(ele, cla){
        // split(): 基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中
        // \s     : 匹配一个空白字符
        let nameArr = ele.className.split("/\s+/");
        if(this.index(nameArr, cla) >= 0){
            return true;
        } else {
            return false;
        }
    },

    addClass(ele, cla){
        if(this.hasClass(ele, cla)){
            return null;
        }
        ele.className = (ele.className || "") + " " + cla;
    },

    removeClass(ele, cla){
        let nameArr = ele.className.split(/\s+/);
        let i = 0,
            len = nameArr.length,
            arr = [];
        for(; i < len; i++){
            if(nameArr[i] !== cla){
                arr.push(nameArr[i]);
            }
        }
        // join(): 数组方法，只接受一个参数，即用作分隔符的字符串，返回包含所有数组项的字符串
        ele.className = arr.join(" ");
    },


    // 获取元素的偏移量: 调用 getPosition(el).left/top
    getPosition(el){
        let curLeft = el.offsetLeft,
            curTop = el.offsetTop,
            curParent = el.offsetParent;
        while (curParent !== null) {
            curLeft += curParent.offsetParent;
            curTop += curParent.offsetParent;
            curParent = curParent.offsetParent;
        }
        return {left: curLeft, top: curTop}
    },

    // 获取计算后的元素样式
    getCompCss(el, attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(el,false)[attr];
        } else {
            return el.currentStyle[attr];
        }
    },

    // 全屏弹框
    fullScreen(el){

    },



};




// 跨浏览器添加事件
const EventUtil = {
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