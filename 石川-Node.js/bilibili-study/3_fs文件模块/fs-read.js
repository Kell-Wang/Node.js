const fs = require('fs');
// - fs.readFile(path[, options], callback);
//   + path： <string>|<Buffer>|<URL>|<integer> 文件名或文件描述符
//   + options:
//      - encoding: <string>|<null> 默认值： null;
fs.readFile('./www/aaa.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('data:', data);
    }
});