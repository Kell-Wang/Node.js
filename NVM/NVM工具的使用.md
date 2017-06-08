**Create 2017-6-8**
# 为什么要使用Node.js？
+ Node.js在服务器端与其他语言相比有个很大的优势就是非阻塞IO，专为网络服务设计，高校的解决输入和输出，Node.js使用事件循环和线程池的方式来解决高并发的问题，但对于大量的计算，nodejs却并不合适。
## 为什么Node.js不适合大量的计算？


## NVM工具的使用
+ Node Version Manager(Node版本管理工具): 由于以后的开发可能要在多个Node版本中测试，Node版本较多，所以需要这款工具管理 (用Go语言写成)

### 安装操作步骤
*Node.js有很多种安装方式，下面用一种nvm的方式，来安装node.js，nvm是node.js版本管理工具的意思。*
- 0.下载: nvm-windows [https://github.com/coreybutler/nvm-windows/releases]，选择第一个: nvm-noinstall.zip下载完成之后解压到一个地方: 如: C:\dev\nvm 里面的文件列表: elevate.cmd， elevate.vbs, install.cmd, LICENSE, nvm.exe