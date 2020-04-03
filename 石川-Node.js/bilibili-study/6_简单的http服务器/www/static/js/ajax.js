// # 封装 ajax

// - 先规定使用方法
// let obj = {
//     url: 'xxx',
//     data: {key: value},
//     type: 'get/post',
//     success: function() {},
//     error: function() {}
// };

// 拼接 json
let spliceJson = function(data) {
    let arr = [];
    for (let name of data) {
        arr.push(name + '=' + data[name]);
    }
    // - 数组的 join() 方法 : 参数为一个用作分隔符的字符串，返回包含所有数组项的字符串。
    return arr.join('&');
};

let ajax = function(obj) {
    obj = obj || {};
    if (!obj.url) {return;}
    obj.data = obj.data || {};
    obj.type = obj.type || 'get';

    let timer = null;
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    switch(obj.type) {
        case 'get':
            if (obj.data.length > 0) {
                xhr.open('GET', obj.url + '?' + spliceJson(obj.data));
            } else {
                xhr.open('GET', obj.url);
            }
            xhr.send();
            break;
        case 'post':
            xhr.open('POST', obj.url, true);
            // - 使用 XHR 来模仿表单提交: 将 Content-Type 头部信息设置为
            //   application/x-www-form-urlencoded。
            xhr.setRequestHeader('Content-Type',
                'application/x-www-form-urlencoded');
            xhr.send(spliceJson(obj.data));
            break;
    }

    // - 处理返回数据。
    xhr.onreadystatechange = function () {
        // - (1)
        if (xhr.readyState == 4) {
            clearTimeout(timer);
            // - (2)
            if (xhr.status >= 200 && xhr.status < 300
                || xhr.status === 304) {
                // - (3)
                obj.success && obj.success(xhr.responseText);
            } else {
                obj.error && obj.error(xhr.status);
            }
        }
    }
};