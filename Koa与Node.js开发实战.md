# 《Koa 与 Node.js 开发实践》


## 第 1 章: Node.js 入门
### 1.1 Node.js 介绍
##### 1.2.3 使用 NVM 控制 Node.js 版本
- NVM (Node Version Manager, Node 版本管理器) 是在 Mac 环境下管理 Node.js
    版本的工具, 类似于管理 Ruby 的 RVM (Ruby Version Manager, Ruby 版本管理器).
    在 Windows 环境下推荐使用 nvmw 或 nvm-windows. 本节介绍 NVM 的安装过程及切换
    Node.js 版本的方式.
- (1) 卸载已经安装的 Node.js 
    + (1) **卸载已经全局安装的 Node.js 和 NPM (推荐, 非必要)**
        - 第 1 种方式: 卸载通过官网安装包安装的 Node.js，终端中执行下面代码：
            `rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`  
        - 第 2 种方式: 卸载通过官网安装包安装的 Node.js
            + 删除 `/urs/local/lib` 和 `/usr/local/include` 两个文件夹中所有和 
                node.js 及 node_modules 相关的文件. 
            + 检查个人主文件夹下所有的 local, lib, include 文件夹并删除所有与 Node.js
                和 node_modules 有关的内容.
            + 从 `/urs/local/bin` 中删除 Node.js 的可执行文件.  
    + (2) 通过 brew 安装的 Node.js 通过运行 `brew uninstall node` 命令来进行卸载. 
- (2) 安装 NVM 
    + 2.在安装 NVM 之前还需要一个 C++ 编译器，在 Mac 上可以安装 `Xcode命令行工具`
      (如已安装请忽略)。 <br/>
      `xcode-select -install` <br/>
      然后可以使用 cURL 或 Wget 安装 NVM，命令如下: <br/>
      `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
      <br/>或者 <br/>
      `wget -q0- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
    + **注意: 请访问 `https://github.com/creationix/nvm`** 
      (Tip: creation) 查看当前最新版本.
    + 输入以下命令: `command -v nvm` <br/>
      如果安装成功会输出 "nvm"，如果出现 "nvm: command not found"，则可能有以下原因:
        - 安装时系统缺少 `.bash_ profile` 文件，使用 `touch ~/.bash_ profile` 命令
          创建所需文件并重新安装 NVM;
        - 重启命令行工具，再次尝试输入该命令。
        - 如果仍然提示安装失败，请打开 `.bash_ profile` 文件并添加以下代码: 
          `source ~/.bashrc`
- (3) 女装并切换不同 Node.js 版本
    + 可能用到的命令如下:
      ```shell
        // - 安装最新稳定 Node.js
        `nvm install stable` 
        // - 安装指定版本 (此处安装 8.11.1)
        `nvm install 8.11.1`
        // - 安装 8.11.x 系统的最新版本
        `nvm install 8.11`
        // - 列出远程服务器上的所有可用版本
        `nvm ls-remote`

        // - 切换到 8.11.1 版本
        `nvm use 8.11.1`
        // - 切换到 8.11.x 系列的最新版本
        `nvm use 8.11`
        // - 切换到最新版本
        `nvm use node`
        // - 设置默认版本为当前版本 (当前为 9.11.1 版本)
        `nvm nvm alias default node`
        // - 列出所有已经安装的版本
      ```
    + 提示: 更多NVM命令的详细介绍可参考 `https://github.com/creationix/nvm#usage` 
- (4) 配置项目所使用的 Node.js 版本
    + 如果项目所需 Node.js 版本不是默认版本, 可以在项目根目录下创建 `.nvmrc` 文件并在
      其中预先指定版本号, 可能用到的命令(iTerm/命令行)如下:
      ```shell
        // - 创建 .nvmrc 文件
        `echo 9.11.1 > .nmvrc`
        // - 运行 nvm 将自动安装设定好的版本号 (这里为 9.11.1 版本)
        `nvm use`
        // - 检查 Node.js 版本
        `node -v`
      ```
##### 1.2.4 Web 代理工具 NProxy
- NProxy 是一个跨平台, 支持单文件, 多文件及目录替换, 支持 HTTP 和 HTTPS 协议的 Web 
  代理工具, 在文件替换功能上尤其出色. 官网为 `https://www.npmjs.com/package/nprox`.  
- 使用 NPM 进行安装 (Node.js 版本必须大于 0.8.x), 命令如下: <br/>
  `npm install -g nproxy` <br/>
  启动 NProxy 也非常简单, 命令如下: <br/>
  `nproxy -l replace_rule.js  // - 设置浏览器代理为 127.0.0.1:port (默认为 8989)` 


## 第 3 章: 路由
### 3.1 路由介绍
### 3.2 koa-router 路由中间件
##### 3.2.1 koa-router 的安装和介绍
##### 3.2.2 RESTful 规范
##### 3.2.3 koa-router 用法 (视频演示)
##### 3.2.4 通过 koa-router 实现接口的权限控制
- 本节将通过一个案例演示如何通过koa-router在接口层面实现权限控制。首先，需要了解什么是
  权限控制。权限控制可以定义为对资源访问的选择性限制。权限系统-般需要结合账号系统实施控制，
  常见的后台系统一般会包括管理员(拥有最高权限)、一般用户(具有读和一定的修改权限)、游客(只
  拥有读权限或不允许访问)等账号，具体权限需要根据系统的需求设置。
- 在一个基于RESTful规范的应用中，URL对应的不同路径意味着不同的资源，所以对资源访问的限制
  即对 URL 访问的限制。常见鉴别用户权限的方式有两种: 
    + 1 种是广泛使用的 `Cookie-Based Authentication (基于Cookie 的认证模式)`，
    + 另 1 种是 `Token-Based Authentication (基于Token的认证模式)`。<br/>
  本案例采用Token方式认证。Token 方式最大的优点在于采用了无状态机制，在此基础上，可以实现
  天然的跨域支持、前后端分离等，同时降低了服务端开发和维护的成本。Token 方式的缺点在于服务
  器每次都需要对 Token 进行校验，这一步骤会对服务器产生运算压力。另一方面，无状态 API 缺乏
  对用户流程或异常的控制，为了避免出现一些例如回放攻击的异常情况，应该设置较短的过期时间，且
  需要对密钥进行严格的保护。对于具有复杂流程的高危场景(如支付等)，则要谨慎选择 Token 认证
  模式。.
### 3.3 本章小结