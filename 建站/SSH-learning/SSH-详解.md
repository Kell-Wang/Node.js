# SSH 详解
- [文章来源](https://segmentfault.com/a/1190000011395818)

## 目录(Catalog)
1. `SSH` 简介
2. `SSH` 的基本框架
3. `SSH` 的加密
4. `SSH` 的主要特性
5. `SSH` 的 `Key`
6. `SSH` 安全连接的建立
    + (1) 客户端连接到服务器上
    + (2) 客户端和服务器交换自己支持的SSH协议版本号
    + (3) 客户端和服务器切换到基于报文的协议
    + (4) 服务器向客户端提供自己的身份证明和会话参数
    + (5) 客户端给服务器发送一个（会话）密钥
    + (6) 双方启用加密并完成服务器认证
    + (7) 建立安全连接
7. 客户端认证
8. `Password`
9. `Public Key`
10. 图解 `SSH`


## 生词(New Words)
- **secure [sɪ'kjʊə] --adj.安全的; 牢固的. --vt.保护; 保管**
    + This building would be secure(adj) in an earthquake.
      这栋建筑遇到地震不会有危险.
    + a secure(adj) victory. 确实可靠的胜利.
    + He feels secure(adj) about his future. 他对自己的未来感到放心.
    + Is the door secure(adj)? 门关好了吗?
- **shell [ʃɛl] --n.壳,外壳; 贝壳. --v.剥; 炮击**   


## 前置知识
### `Shell` 是什么?
- 见当前仓库的: `./Linux-Learning/Shell/Shell-Readme.md`


## 内容(Content)
### 1. `SSH` 简介
- 什么是 `SSH`? [Secure Shell - Wiki](https://zh.wikipedia.org/wiki/Secure_Shell)
    + `Secure Shell`(安全外壳协议, 简称 `SSH`) 是一种加密的网络传输协议, 
      可在不安全的网络中为网络服务提供安全的传输环境[1]. 
      `SSH` 通过在网络中创建安全隧道来实现 `SSH` 客户端与服务器之间的连接[2]. 
      虽然任何网络服务都可以通过 `SSH` 实现安全传输, 但 `SSH`
      最常见的用途是远程登录系统, 人们通常利用 `SSH` 来传输命令行界面和远程执行命令.
      `SSH` 使用频率最高的场合是类Unix系统, 但是 Windows 操作系统也能有限度地使用SSH.

### 2. `SSH` 的基本框架

### 3. `SSH` 的加密

### 4. `SSH` 的主要特性

### 5. `SSH` 的 `Key`

### 6. `SSH` 安全连接的建立
#### (1) 客户端连接到服务器上
#### (2) 客户端和服务器交换自己支持的SSH协议版本号
#### (3) 客户端和服务器切换到基于报文的协议
#### (4) 服务器向客户端提供自己的身份证明和会话参数
#### (5) 客户端给服务器发送一个（会话）密钥
#### (6) 双方启用加密并完成服务器认证
#### (7) 建立安全连接

### 7. 客户端认证

### 8. `Password`

### 9. `Public Key`

### 10. 图解 `SSH`