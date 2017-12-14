/**
 * Author:  strive
 * Date:    2016/1/13
 * copy:    2017-12-7
 */

// 最简易的原生ajax写法
/*(function(){
    let createXHR = () => {
        if(typeof  XMLHttpRequest !== "undefined"){
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject('Microsoft XMLHTTP');
        }
    };

    let xhr = createXHR();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
                console.log(xhr.responseText);  // 只有当xhr.send()执行之后，才会触发
            } else {
                console.log("Request was unsuccessful: " + xhr.status );
            }
        }
    };

    xhr.open("get/post", "url", true);          // true代表异步传输
    xhr.setRequestHeader("Content-type", "application/x-www.form-urlencoded");
    const btn = getClassName("defaultNext")[0];
    const myForm = getClassName("myForm")[0];
    myForm.addEventListener("click", function(){
        xhr.send(seriallize(myForm));
    }, false);

}());*/





let json2url = (json) => {
    let arr = [];
    for(let name of json){
        arr.push(name + "=" + json[name]);
    }
    // join() : 数组方法。参数为一个用作分隔符的字符串，然后返回包含所有数组项的字符串
    return arr.join("&");
};

let ajax = (json) => {
    json = json || {};
    if(!json.url)return;
    json.data = json.data || {};
    json.type = json.type || "get";

    let timer = null;
    let oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject("Microsoft.XMLHTTP")
    }

    switch(json.type){
        case "get":
            oAjax.open("GET", json.url + "?" + json2url(json.data), true);
            oAjax.send();
            break;

        case "post":
            oAjax.open("POST", json.url, true);
            oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            oAjax.send(json2url(json.data));
            break;
    }

    oAjax.onreadystatechange = function () {
        if(oAjax.readyState === 4){
            clearTimeout(timer);
            if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status === 304 ) {
                json.success && json.success(oAjax.responseText);
            }else {
                json.error && json.error(oAjax.status);
            }
        }
    }

};
