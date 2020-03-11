# Node.js 学习
> Node.js 创造者 Ryan Dahl (瑞安·达尔)

## 目录(Catalog)
1. Windows 下安装  `Node`
2. Mac 下安装 `Node`
3. `npm install` 时 `--save-dev` 和 `--save` 的区别
4. 更换 `npm` 镜像为 `cnpm`

## 生词 (New Words)


## 内容 (Content)
#### 1. `Windows` 下安装 `Node`
1. 下载 `Node` 的安装包, 正常安装会自动把 `Node` 添加到系统变量中
	+ 默认的 `Node` 的安装路径为: `C:\Program Files\nodejs`; 
    + 接着我们来看另外 2 个目录, `npm` 和 `npm-cache`, 默认 `Node`
      的本地仓库是跑在系统 `C` 盘的用户目录中的 (即:
      `C:\Users\Administrator\AppData\Roaming`), 不过是可以更改的, 
      [详见这里](https://www.cnblogs.com/laizhouzhou/p/8027908.html), 
      我们通过 `npm install` 安装的组件和库都会在 `npm` 文件夹下的 `mode_modules`
      文件夹中.
2. `Node` 的配置环境需要使用 `git bash`, 由于`git bash` 集成在 `Git` 软件中, 
   所以我们需要下载并安装 `Git`, 并把 `git` 添加到环境变量: 
	+ 把 `git` 添加到 `系统环境变量 path` 中, 步骤为: `计算机` --> `属性` -->
      `高级系统设置` --> `环境变量` --> `系统变量`--> `path` --> 添加:
      `C:\Program Files\Git\bin`, 成功之后在命令行中输入 `git` 就会看到这样的提示:
      `usage: git[--version][--help]...`
3. 什么是 `NPM`? A: `npm` 是一个 `NodeJS` 包管理和分发工具, 新版的 `NodeJS`
   已经集成了 `npm` 包管理工具. 有了 `npm` 开发人员可以很快的找到特定服务要使用的包,
   进行下载、安装以及管理已经安装的包。
4. 查看 `Node` 和 `NPM` 的版本号, 按下 `Ctrl + R` 弹出 `运行`, 在其中输入 `cmd` 后,
   在弹出的控制台中输入: 
    + `node --version` 查看 node 的版本号 
    + `npm --version` 查看 npm 的版本号
5. `Node.js` 中的`交互式运行环境--REPL(Read-Eval-Print-Loop)`: 
    + 当我们点击`运行` 输入 `cmd` 进入控制台后, 在其中输入 `node` 按下回车即进入 `REPL`
      运行环境, 命令行中将显示 `REPL` 运行环境的命令提示符(默认为`>`).
6. 如何运行 `NodeJS` 文件?  A: 在控制台中运行 `NodeJS` 文件需要先用 `DOS`
   命令进入到保存 `NodeJS` 的文件夹内, 然后 输入`node xxx.js` 启动并运行文件。
7. 如果在编辑器中更新了 `NodeJS` 文件, 需要在控制台中按 `Ctrl + c` 停掉当前的运行状态,
   然后从新运行文件.
8. 当我们没有停掉其他 `NodeJS` 文件就接着运行新的文件时, 控制台中会提示端口被占用, 
   其代码显示为: `throw er; //Unhandled 'error' event`.

####  2. `Mac` 下安装 `Node`
- 卸载: 通过官网安装包安装的卸载方法, 终端中执行下面代码：
  `rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`
- 安装:
    + 安装 Homebrew: 见 Miscellaneous-blog/MacOS/MacOS-操作记录.md
    + 接下来的安装教程见这里：
      https://lhajh.github.io/mac/2018/11/13/Install-node-with-homebrew.html       

####  3.  `npm install` 时 `--save-dev` 和 `--save` 的区别
- `--save`: 把安装包添加到 package.json 内的 dependencies (运行时依赖) 中
- `--save-dev`: 安装到 package.json 内的 devDependencies (开发时依赖) 中。

#### 4. [npm更换成淘宝镜像源以及cnpm](https://www.jianshu.com/p/fae87fef8ad0)
- 单次使用: `npm install --registry=https://registry.npm.taobao.org`
- 永久使用
    + 设置成全局的下载镜像站点, 这样每次 `install` 的时候就不用加 `--registry`,
      默认会从淘宝镜像下载, 设置方法如下:
        - 方法 1: 
            + 打开 `.npmrc` 文件 (`nodejs\node_modules\npm\npmrc`,
              没有的话可以使用 `git` 命令创建一个(`touch .npmrc`), 用控制台创建会报错)
            + 增加 `registry=https://registry.npm.taobao.org` 即可。
          ```
        - 方法 2: 也可以按如下方式直接在命令行设置
            + `npm config set registry https://registry.npm.taobao.org`
            + 配置后可通过下面方式来验证是否成功 `npm config get registry` 或 
              `npm info express`
    + 这样, 我们可以使用淘宝镜像还不用更换成`cnpm`, 虽然实际都是使用的是淘宝镜像.
       最后附上淘宝镜像官网地址：`http://npm.taobao.org/`


