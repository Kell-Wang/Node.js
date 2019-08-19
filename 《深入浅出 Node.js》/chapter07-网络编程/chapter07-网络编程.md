# 第 7 章 网络编程
-  Node 是一个面向网络而生的平台，它具有 事件驱动、无阻塞、单线程 等特性。
- 在 Web 领域，大多数的编程语言都需要专门的 Web 服务器作为容器，如 ASP, ASP.NET 需要 IIS
  作为服务器，PHP 需要搭建 Apache 或 Nginx 环境等，JSP 需要 Tomcat 服务器等。但对于
  Node 而言，只需要几行代码即可构建服务器，无需要额外的容器。
- Node 提供了 **net、dgram、http、https** 这 4 个模块，分别用于处理
  TCP、UDP、HTTP、HTTPS 适用于服务器和客户端。

## 7.1 构建 TCP 服务
- TCP: 传输控制协议 (Transmission Control Protocol)
- OSI: 开放式系统互联通讯参考模型 (Open System Interconnection Reference Model)
- OSI 模型 (7 层协议)
<table>
    <tr>
        <th>OSI 七层网络模型</th>
        <th>TCP/IP 四层概念模型</th>
        <th>对应网络协议</th>
    </tr>
    <tr>
        <td>应用层 (Application)</td>
        <td rowspan="3">应用层</td>
        <td>HTTP、SMTP、IMAP</td>
    </tr>
    <tr>
        <td>表示层 (Presentation): 加密/解密等</td>
        <td>Telnet、Rlogin、SNMP、Gopher</td>
    </tr>
    <tr>
        <td>会话层 (Session): 通讯连接/维持会话</td>
        <td>SMTP、DNS</td>
    </tr>
    <tr>
        <td>传输层 (Transport)</td>
        <td>传输层</td>
        <td>TCP / UDP</td>
    </tr>
    <tr>
        <td>网络层 (Network)</td>
        <td>网络层</td>
        <td>IP ...</td>
    </tr>
    <tr>
        <td>数据链路层 (Data Link): 网络特有的链路接口</td>
        <td rowspan="2">数据链路层</td>
        <td>FDDI、Ethernet、Arpanet、PDN</td>
    </tr>
    <tr>
        <td>物理层 (Physical): 网络物理硬件</td>
        <td>IEEE 802.IA, IEEE802.2 到 IEEE 802.11</td>
    </tr>
</table>

#### 7.1.1 TCP
- TCP 全名为**传输控制协议** 在 **OSI 模型**中属于传输层协议。许多应用层协议基于 TCP 构建
  典型的是 HTTP、SMTP、IMAP 等协议

#### 7.1.2 创建 TCP 服务器端
#### 7.1.3 TCP 服务的事件
- 1.服务器事件:
    + listening: 具体是用见书本
    + connection: 每个客户端套接字连接到服务器是触发，简洁写法为通过 
      net.createServer(), 最后一个参数传递。net.createServer((scoket) => {})
    + close:
    + error: 
- 2.客户端连接事件（服务器可以同时与多个客户端保持连接）
    + data
    + end
    + connect
    + drain
    + error
    + close
    + timeout    
- **TCP 套接字是可读可写的 Stream 对象**，可以利用 pipe() 方法巧妙地实现管道操作。

## 7.2 构建 UDP 服务
#### 7.2.1 创建 UDP 套接字
#### 7.2.2 创建 UDP 服务器端
#### 7.2.3 创建 UDP 客户端
#### 7.2.4 UDP 套接字事件


## 7.3 构建 HTTP 服务
#### 7.3.1 HTTP
- 1.初始 HTTP
- 2.HTTP 报文
#### 7.3.2 http 模块
- 1.HTTP 请求
- 2.HTTP 响应
- 3.HTTP 事务的事件
#### 7.3.3 HTTP 客户端
- 1.HTTP 响应
- 2.HTTP 代理
- 3.HTTP 客户端事件


## 7.4 构建 WebSocket 服务
#### 7.4.1 WebSocket 握手
#### 7.4.2 WebSocket 数据传输
#### 7.4.3 小结


## 7.5 网络服务于安全
#### 7.5.1 TLS/SSL
- 1.密钥
- 2.数字证书
#### 7.5.2 TLS 服务
- 1.创建服务器端
- 2.TLS 客户端
#### 7.5.3 HTTPS 服务
- 1.准备证书
- 2.HTTPS 客户端


## 7.6 小结

## 7.7 参考资料

