// Created in 20190524
const net = require('net')

const PORT = 3000
const HOST = '127.0.0.1'

const server = net.createServer((socket) => {
    console.log("Server: 收到来自客户端的请求: ")

    socket.on('data', (data) => {
        console.log("Server received on client Data. The contents are: "
            + `${data}`)

        // 给客户端返回数据
        socket.write("你好，我是服务端")
    })

    socket.on('close', () => {
        console.log("Server: 客户端连接断开")
    })
})

server.listen(PORT, HOST, () => {
    console.log("Server: Start listening for requests from clients")
})
