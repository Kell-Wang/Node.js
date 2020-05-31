const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const queryString = require('querystring');


// - 模拟假数据
let users = {};


// > 接口
// - 注册:
//   + /user?act=register&user=aaa&pass=123456
//   + {'ok':false, 'msg': '原因'}
// - 登录:
//   + /user?act=login&user=aaa&pass=123456
//   + {'ok':false, 'msg': '原因'}    

// - 请求接口
//   + http://localhost:8020/user?act=xxx...



let server = http.createServer((req, res) => {
    // - 解析数据
    let str = '';
    req.on('data', function(data) {
        str += data;
    });

    req.on('end', function() {
        let obj = urlLib.parse(req.url, true);

        const url = obj.pathname;
        const GET = obj.query;
        const POST = queryString.parse(str);

        // - 区分是访问 "接口" 还是访问 "文件"
        if (url === '/user') {
            switch(GET.act) {
                case 'register':
                    // - 检查用户名是否注册
                    if (users[GET.user]) {
                        res.write("{'ok': false, 'msg': '此用户已存在'}");
                    } else {
                        // - 插入 users
                        users[GET.user] = GET.pass;
                        res.write("{'ok': true, 'msg': '注册成功'}");
                    }
                    break;
                case 'login':
                    // - 检查用户是否已存在
                    if (users[GET.user] == null) {
                        res.write("{'ok': false, 'msg': '此用户不存在'}");
                    }
                    // - 如果用户存才，就检查用户密码 
                    else if (users[GET.user] !== GET.pass) {
                        res.write("{'ok': false, 'msg': '用户名或密码有误'}");
                    } 
                    else {
                        req.write("{'ok': true, 'msg': '登陆成功'}");
                    }
                    break;
                default: 
                    res.write("{'ok':false, 'msg': '位置的 act'}");
            }
            res.end();
        } else {
            // - 读取文件
            let file_Name = './www' + url;
            fs.readFile(file_Name, (err, data) => {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }

                // - 一定不要忘记调用 end() 方法
                res.end();
            });
        }

    });
});
server.listen(8020);