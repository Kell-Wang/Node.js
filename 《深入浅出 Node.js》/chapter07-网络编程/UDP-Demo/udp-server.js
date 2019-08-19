const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
    // Server got: 深入浅出 Node.js from 127.0.0.1:49158
    console.log('Server got: ' + msg + ' from ' + rinfo.address + ':' +
        rinfo.port);
});
server.on('listening', () => {
    let address = server.address();
    // Server listening 0.0.0.0:41234
    console.log('Server listening ' + address.address + ":" + address.port);
});
// - 该套接字接受所有网卡上 41234 端口上的消息。在绑定完成后，将触发 listening 事件。
server.bind(41234);