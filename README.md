# Node.js 学习
> Node.js 创造者 Ryan Dahl (瑞安·达尔)

 
  
## Windows 下安装 Node
1. Node.js中的交互式运行环境 —— REPL(Read-Eval-Print-Loop)
  点击运行输入 cmd 进入 cmd 程序输入 "node" 按下回车即进入 REPL 运行环境，命令行中将
  显示 REPL 运行环境的命令提示符(默认为">").

2. node 配置环境需要安装 git bash(就是安装git这个软件) 和 nodeJS，如果安装完毕，在 cmd
   中输入node -v 显示版本号就代表安装成功了。当然打开 git bash 输入 node -v 显示版本号也
   代表安装成功了。 在git bash中输入npm -v显示npm的版本号。 (git bash 集成在git里面，
   是git的一个子模块) <br>
   npm 是一个 node 包管理和分发工具，新版的 nodejs 已经集成了 npm 包管理工具。有了 npm，
   可以很快的找到特定服务要使用的包，进行下载、安装以及管理已经安装的包。

3. 把 git 添加到系统环境变量 path 中，计算机-->属性-->高级系统设置-->环境变量-->
   系统变量-->path-->添加: ;C:\Program Files\Git\bin 成功之后在 cmd 中输入 git 就会
   看到这样的提示: usage: git[--version][--help]...这些提示代码

4. 运行文件：在 cmd 中运行 nodejs 文件需要先用 dos 命令进入到保存 nodejs 的文件夹后在
   输入node xxx.js启动运行代码。

5. 在cmd中端口被占用的代码提示为 throw er; //Unhandled 'error' event。

6. 如果更新了 nodejs 文件需要 cmd 中 ctrl+c 停掉当前的运行状态，然后 node xxx.js 从新运行。


### `npm install` 时 `--save-dev` 和 `--save` 的区别
- `--save`: 把安装包添加到 package.json 内的 dependencies (运行时依赖) 中
- `--save-dev`: 安装到 package.json 内的 devDependencies (开发时依赖) 中。



## Mac 下安装 Node
- 卸载: 通过官网安装包安装的卸载方法，终端中执行下面代码：
  `rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`
- 安装:
    + 安装 Homebrew: 见 Miscellaneous-blog/MacOS/MacOS-操作记录.md
    + 接下来的安装教程见这里：
      https://lhajh.github.io/mac/2018/11/13/Install-node-with-homebrew.html       




[npm更换成淘宝镜像源以及cnpm](https://www.jianshu.com/p/fae87fef8ad0)

- 单次使用: `npm install --registry=https://registry.npm.taobao.org`

- 永久使用
    + 设置成全局的下载镜像站点，这样每次 install 的时候就不用加 --registry,
      默认会从淘宝镜像下载，设置方法如下:
    ```base
     1. 打开 .npmrc 文件 (nodejs\node_modules\npm\npmrc, 没有的话可以使用 git 
        命令创建一个(touch .npmrc), 用 cmd 命令创建会报错)
     2. 增加 registry =https://registry.npm.taobao.org  即可。
    ```
    + 也可以按如下方式直接在命令行设置
        `npm config set registry https://registry.npm.taobao.org`
    + 检测是否成功
    ```base
        // 配置后可通过下面方式来验证是否成功
        npm config get registry
        // 或
        npm info express
    ```

 这样，我们可以使用淘宝镜像还不用更换成cnpm！虽然实际都是使用的是淘宝镜像。
 最后附上淘宝镜像官网地址：http://npm.taobao.org/
