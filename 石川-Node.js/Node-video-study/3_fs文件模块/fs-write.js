const fs = require("fs");

// 直接运行此文件，fs-write-content.txt中便会写入第二个参数的内容
const filePath = "./www/fs-write-content.txt";
// - 在终端中运行
fs.writeFile(filePath, "Hope to write content", (err) => {
    console.log(err);
});

