const net = require('net');

const PORT = 3000;
const HOST = '127.0.0.1';

const client = net.createConnection(PORT, HOST);

// const client = net.createConnection({port: 3000}, () => {
//     // 'connect' listener
//     console.log("connected to server!")
// })

client.on('connect', () => {
    console.log("Client 已经与服务器建立连接")
});

client.write("发送 112232354 到服务端");

client.on('data', (data) => {
    console.log("Client 收到服务器数据，内容为: " + `${data}`)
});

client.on('close', () => {
    console.log("Client 连接断开")
});

client.end("你好，我是客户端！");
