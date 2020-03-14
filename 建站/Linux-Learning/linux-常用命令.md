# Linux 常用命令

## 目录(Catalog)
1. `Linux` 常用命令及命令对应的原单词
2. `Linux` 或 类 `Linux` 系统中, 打开终端显示的默认路径为什么?


## 生词(New Words)


## 内容(Content)
### 1. `Linux` 常用命令
- `ls`: **List** the contents of your present working directory.
  (列出当前工作目录的内容.)
- `pwd`: Shows you what your **present working directory** is.
  (显示当前的工作目录)
- `cd`: Let you **change directories**.
    + (1) `cd` + `..`: 返回到上层目录 (`cd ..`)
    + (2) `cd` + `\`: 返回到根目录 (`cd \`)
    + (3) `cd` + `/其他文件夹`: 将当前路径切换到所在应用程序文件夹
      (`cd /Applications`)
    + (4) `cd` + `~`: 进入用户主目录(即: 打开 terminal 默认的用户根目录) 
    + (5) `cd` + `-`: 返回进入此目录之前所在的目录.
- `rm`: **Remove** one or more files.
- `rmdir`: **Remove** an empty **directory**.
- `mkdir`: **Make a **directory**.
- `ps`: Provides a list of currently running **processes**.
- `cp`: **Copy** a file.
- `mv`: **Move** a file (this is also used to rename a file. "Moving" it
  from one file name to another).
- `grep`: The **global regular expression print program** lets you search
  through a file or output of another program.
- `find`: **Find** a file on the filesystem (100% accurate, but not fast).
- `locate`: Find a file on the filesystem from a cached list of files
  (Fast, but not 100% accurate).
- `man`: Displays the **manual** for most commands (including 'man').
    + `man` 命令: `Linux` 下的帮助指令, 通过 `man` 指令可以查看 `Linux`
      中的指令帮助, 配置文件帮助和编程帮助等信息.
- `clear`: **clear** the screen
- `less`: view the contents of a file
- `nano`: Nano's ANOther editor 
- `sudo`: super user do
- `su`: **switch user** (default to root)
- `view`: Start in read-only mode. You will be protected from writing the
  files. Can also be done with the "-R" argument.
- 更多参考: [这里](https://i.linuxtoy.org/docs/guide/ch02s02.html)


### 2. `Linux` 或 类 `Linux` 系统中, 打开终端显示的默认路径为什么?
- 终端启动后，它的默认路径在当前用户文件夹的根目录上，为了确定这一点，你可以输入 `pwd`
  命令来查看当前路径.

