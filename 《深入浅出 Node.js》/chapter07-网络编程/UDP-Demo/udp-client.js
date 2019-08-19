const dgram = require('dgram');
let message = Buffer.from('深入浅出 Node.js');
const client = dgram.createSocket('udp4');
// - 当套接字对象用在客户端时，可以调用send() 方法发送消息到网络中。 send() 参数依次为: 
//   + Buffer、
//   + Buffer的偏移、
//   + Buffer的长度、
//   + 目标端口、
//   + 目标地址、
//   + 发送完成后的回调。
client.send(message, 0, message.length, 41234, 'localhost', (err, bytes) => {
    client.close();
});