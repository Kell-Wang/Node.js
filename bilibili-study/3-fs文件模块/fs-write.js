const fs = require("fs");

// 直接运行此文件，fs-write-content.txt中便会写入第二个参数的内容
fs.writeFile("fs-write-content.txt", "Hope to write content", (err) => {
    console.log(err);
});