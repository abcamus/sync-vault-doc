---
title: 在NAS上搭建实时同步
tags:
  - NAS
  - 群晖
  - docker
  - corturn
author: Infi
---
**NAS是搭建TURN服务器的绝佳平台**，尤其是对于家庭实验室或个人项目。它24/7开机、低功耗的特性非常适合运行这种需要常驻的服务。

[[build-turn-server-with-corturn]]介绍了Corturn搭建Turn服务器的方法。在NAS上搭建，
根据NAS型号和系统，主要有以下三种方式：

|方法|适用场景|优点|缺点|
|---|---|---|---|
|**Docker**|**绝大多数现代NAS（群晖、QNAP、威联通等）**|**最推荐！** 部署简单、隔离性好、不污染系统、易于管理和迁移|需要基本了解Docker概念|
|**原生安装**|支持`apt`或`pkg`的Linux系统NAS（如TrueNAS Scale）|性能稍好、直接控制|可能依赖系统版本、易与系统其他组件冲突|
|**虚拟机**|所有支持虚拟化的NAS|完全隔离、灵活性最高|

> 🎈推荐基于Docker搭建

这是最简洁、最安全的方式，适用于群晖（DSM）、QNAP、华硕等大多数品牌NAS。

### 1. 前期准备

- **启用SSH访问**：在NAS控制面板中启用SSH功能，以便通过终端执行命令。
    
- **安装Docker**：在NAS的套件中心或App Center中搜索并安装 **Docker** 应用（如群晖的 "Container Manager"）。
    
- **规划路径**：在NAS上创建一个文件夹用于存放Coturn的配置文件和日志，例如 `/docker/coturn`。
    

### 2. 创建配置文件

通过SSH连接到你的NAS，或者使用NAS的文本编辑器，在你刚创建的目录下（如 `/docker/coturn`）新建一个名为 `turnserver.conf` 的文件。

```sh
# 进入目录并创建文件
cd /volume1/docker/coturn
vim turnserver.conf
```

将以下配置内容粘贴到文件中，**务必根据你的情况修改注释标注的部分**：

```ini
# 基础配置
listening-port=3478
tls-listening-port=5349
min-port=10000
max-port=20000

# ！！！最重要的一步：填写你的公网IP或DDNS域名 ！！！
external-ip=你的公网IP或DDNS域名

# 认证配置（使用长期凭证机制，密码建议修改）
lt-cred-mech
user=你的用户名:你的密码
realm=你的公网IP或DDNS域名

# 网络和安全配置
fingerprint
verbose
no-multicast-peers

# 如果你的NAS有多个IP，可能需要指定 relay-ip
# relay-ip=你的NAS内网IP

# 日志输出（可选）
log-file=/var/log/turn.log
simple-log
```

### 3. 启动Docker容器

使用NAS的Docker图形化界面（如Container Manager）或通过SSH命令行创建容器。

**图形界面操作流程：**

1. 打开 **Container Manager**。
2. 点击“注册表”，搜索 `coturn`，选择官方镜像 `coturn/coturn` 并下载。
3. 下载完成后，在“映像”中找到它，点击“启动”。
4. 在“高级设置”中：
    - **网络**：选择“使用与Docker Host相同的网络”模式（`host`网络），这是最简单的方式，能避免复杂的端口映射。    
    - **卷**：添加一个文件夹映射，将你在NAS上创建的 `/docker/coturn/turnserver.conf` 挂载到容器内的 `/etc/coturn/turnserver.conf`。
    - **环境变量**（可选）：可以添加 `TURNSERVER_ENABLED=1`。
5. 完成设置并运行容器。
    
**SSH命令行操作示例（更高效）：**

```bash

docker run -d \
  --name=coturn \
  --network=host \
  --restart=always \
  -v /volume1/docker/coturn/turnserver.conf:/etc/coturn/turnserver.conf \
  coturn/coturn
```
- `-d`：后台运行
- `--name=coturn`：给容器起个名字
- `--network=host`：使用主机网络模式，简化网络配置
- `--restart=always`：总是重启，确保NAS重启后容器自动运行
- `-v ...`：将本地配置文件挂载到容器内