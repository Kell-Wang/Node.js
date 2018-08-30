# Node.js
node.js学习


[npm更换成淘宝镜像源以及cnpm](https://www.jianshu.com/p/fae87fef8ad0)

#### 单次使用
```base
    $ npm install --registry=https://registry.npm.taobao.org 
```

##### ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#### 永久使用 
 + 设置成全局的下载镜像站点，这样每次 install 的时候就不用加 --registry, 
   默认会从淘宝镜像下载，设置方法如下:
  ```base
     1. 打开 .npmrc 文件 (nodejs\node_modules\npm\npmrc, 没有的话可以使用 git 命令创建一个(touch .npmrc), 用 cmd 命令创建会报错) 
     2. 增加 registry =https://registry.npm.taobao.org  即可。
  ```
 + 也可以按如下方式直接在命令行设置
 ```base
    npm config set registry https://registry.npm.taobao.org
 ``` 
 + 检测是否成功
 ```base
    // 配置后可通过下面方式来验证是否成功
    npm config get registry
    // 或
    npm info express
 ```
 这样，我们可以使用淘宝镜像还不用更换成cnpm,是不是很爽！虽然实际都是使用的是淘宝镜像。
 最后附上淘宝镜像官网地址：http://npm.taobao.org/