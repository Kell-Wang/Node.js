# Linux SCP

## 目录(Catalog)
1. 什么是 `SCP (Secure Copy Protocol 安全复制协议)`
2. `Linux SCP`
3. `Linux SCP` 基本使用示例
    + 3.1 从远程复制到本地
    + 3.2 从本地复制到远程
    + 3.3 `scp` 命令参数

## 生词(New Words)



## 内容(Contents)
### 1. 什么是 `SCP (Secure Copy Protocol 安全复制协议)`?
- `SCP`(安全复制) 是指在本地主机与远程主机或者两台远程主机之间基于
  `Secure Shell (SSH)` 协议安全地传输电脑文件. 也即是
  客户端可以向服务器发送(上传)文件; 也可以请求(下载)一个服务器的文件或目录.
  `SCP` 默认通过 `TCP` 端口 `22` 运行. `SCP` 通常指安全复制协议或者程序本身.


### 2. `Linux SCP`
- `Linux SCP`: 顾名思义就是 `Linux` 系统下基于 `SSH` 登陆进行安全的远程文件拷贝命令.
  可以从本地复制到远程，也可以从远程复制到本地。
- Note: `Linux SCP` 命令也就是 `Shell` 脚本.


### 3. `Linux SCP` 基本使用示例
#### 3.1 从远程复制到本地
- ```shell
    # 此处的 ip 也可以换成域名
    scp -P 1234 -r root@192.168.23.128:/home/wwwroot/data /srv/

    # 不指定用户名默认就是 root 用户
    scp -P 1234 -r 192.168.23.128:/home/wwwroot/data /srv/
  ```

### 3.2 从本地复制到远程
- ```shell
    # 此处的 ip 也可以换成域名
    scp -r /srv/data/ root@192.168.23.128:/home/wwwroot/data

    # 不指定用户名默认就是 root 用户
    scp -r /srv/data/ 192.168.23.128:/home/wwwroot/data
  ```

#### 3.3 `scp` 命令参数
- ```text
    -1： 强制 scp 命令使用协议 ssh1
    -2： 强制 scp 命令使用协议 ssh2
    -4： 强制 scp 命令只使用 IPv4 寻址
    -6： 强制 scp 命令只使用 IPv6 寻址
    -B： 使用批处理模式（传输过程中不询问传输口令或短语）
    -C： 允许压缩。（将 -C 标志传递给 ssh，从而打开压缩功能）
    -p：保留原文件的修改时间，访问时间和访问权限。
    -q： 不显示传输进度条。
    -r： 递归复制整个目录。
    -v：详细方式显示输出。 scp 和 ssh(1) 会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
    -c cipher： 以 cipher 将数据传输进行加密，这个选项将直接传递给 ssh。
    -F ssh_config： 指定一个替代的 ssh 配置文件，此参数直接传递给 ssh。
    -i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给 ssh。
    -l limit： 限定用户所能使用的带宽，以 Kbit/s 为单位。
    -o ssh_option： 如果习惯于使用 ssh_config(5) 中的参数传递方式，
    -P port：注意是大写的 P, port 是指定数据传输用到的端口号
    -S program： 指定加密传输时所使用的程序。此程序必须能够理解 ssh(1) 的选项。
  ```
  