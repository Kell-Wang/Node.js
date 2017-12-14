/**
 * Date: 2017-12-14
 */

const http =        require("http");
const fs =          require("fs");
const querystring = require("querystring");
const urlLib =      require("url");

let users = {};     //
let server = http.createServer((req, res) => {
    // 解析数据
    let str = "";
    req.on("data", (data) => {
        str += data;
    });

    req.on("end", () => {
        let obj = urlLib.parse(req.url, true);

        const url = obj.pathname;
        const GET = obj.query;

        const POST = querystring.parse(str);

        // 区分 -- 接口、文件
        if( url === "/user") {  // 接口
            switch(GET.act) {
                case "reg":
                    // 1.检查用户名是否已经有了
                    if(users[GET.user]) {
                        res.write('{"ok":false, "msg": "此用户已存在" }')
                    } else {
                        // 2.插入users
                        users[GET.user] = GET.parse;
                        res.write('{"ok": true, "msg": "注册成功" }');
                    }
                    break;

                case "login":
                    // 1.检查用户是否存在
                    if(users[GET.user] === null) {
                        res.write('{"ok":false, "msg": "此用户不存在"}');
                    } else if(users[GET.user] != GET.pass) {
                        // 2.检查用户密码
                        res.write('{"ok":false, "msg": "用户名或密码有误"}');
                    } else {
                        res.write('{"ok":true, "msg": "登录成功"}');
                    }
                    break;

                default:
                    res.write('{"ok":false, "msg": "未知的act"}')
            }
            res.end();
        } else {        // 文件
            let file_name = "./www" + url;
            fs.readFile(file_name, (err,data) => {
                if(err){
                    res.write("404");
                } else {
                    res.write(data);
                }
                res.end();
            })
        }

    })
});

server.listen(8080);