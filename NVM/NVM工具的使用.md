**Create 2017-6-8**
# 为什么要使用Node.js？
+ Node.js在服务器端与其他语言相比有个很大的优势就是非阻塞IO，专为网络服务设计，高校的解决输入和输出，Node.js使用事件循环和线程池的方式来解决高并发的问题，但对于大量的计算，nodejs却并不合适。
## 为什么Node.js不适合大量的计算？
+ 在计算机体系结构中，I/0(input/output)离CPU越近，速度越快(但鱼和熊掌不可兼得，代价是存储能力越小)。我们来看看这张表(每次I/O所花CPU cycle): 
- (1.) L1: 几个。
- (2.) L2: 几十。
- (3.) RAM: 几百。
- (4.) Disk: 几十million(百万)。
- (4.) Network: 几百个million。

## NVM工具的使用
+ Node Version Manager(Node版本管理工具): 由于以后的开发可能要在多个Node版本中测试，Node版本较多，所以需要这款工具管理 (用Go语言写成)

### 安装操作步骤
  *Node.js有很多种安装方式，下面用一种nvm的方式，来安装node.js，nvm是node.js版本管理工具的意思。*
-  0.下载: nvm-windows [https://github.com/coreybutler/nvm-windows/releases]，选择第一个: nvm-noinstall.zip下载完成之后解压到一个地方: 如: C:\dev\nvm 里面的文件列表: elevate.cmd， elevate.vbs, install.cmd, LICENSE, nvm.exe [注:所有的nvm文件默认就放在c:\dev\nvm\下 ]

-  1.双击install.cmd 然后提示输入"压缩文件解压或拷贝到一个绝对路径"先不用管，直接回车，成功后会在C盘的根目录生成一个settings.txt的文件，把这个文件剪切到C:\dev\nvm目录中，然后把内容改成这样:
    
            
            `root: C:\dev\nvm           --> 当前 nvm.ext所在目录
             path: C:\dev\nodejs        --> node快捷键方式所在的目录
             arch: 64                   --> 当前操作系统的位数
             proxy: none                --> 代理不用配置
             `
             
-  2.配置环境变量 (快捷键: window + r --> sysdm.cpl)
   **在: Administrator的用户变量(U):中配置**
   + `NVM_HOME =  C:\dev\nvm  [当前nvm.exe所在目录]`
   + `NVM_SYMLINK = C:\dev\nodejs [node快捷方式所在的目录]`
   + `Path += %NVM_HOME%;%NAM_SYMLINK%;  [在Path路径的最前面 添加这两个NVM]`
   + 打开cmd 通过set命令查看环境变量是否配置成功 : 例如: set NVM_HOME 
   + PowerShell 中通过 div env [PowerShell在win 8.1的系统之后才有，命令很多兼容Linux的命令]

-  3.上面的环境变量配置好，这里罗列一些cmd中查看和安装nvm和安装各个版本的nodejs的命令
   + nvm -v                -->查看nvm的版本号 (安装成功后也会在nvm.exe的同级目录显示:例如现在安装的v8.1.0)
   + nvm install latest    -->下载最新的node版本号
   + nvm install 4.4.4     -->安装想要的node版本号
   + nvm install 6.2.0 32  -->如果是32位系统就需要指定系统的位数，默认是64位需要指定
   + nvm uninstall 6.2.0   -->卸载已安装的node版本号
   + nvm use 8.1.0         -->使用8.1.0版本的node.js
   + nvm list              -->查看已经安装的node版本号
   
   
-  4.到此步C:\dev\nvm中包含的文件有:
    + v8.1.0文件夹(安装的node.js版本)
    + elevate.cmd
    + elevate.vbs
    + install.cmd
    + LICENSE
    + nvm.exe
    + settings.txt
   

-  5.NPM目录配置























 