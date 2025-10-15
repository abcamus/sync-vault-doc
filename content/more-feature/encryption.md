---
title: 加密
tags:
  - Obsidian同步
  - 加密
---
Sync Vault支持 AES GCM加密算法进行端到端加密，打开加密后，您的文件将以密文形式存储在 [[cloud-service/index|云存储]] 中。
> [!important] 请妥善保管密钥，Sync Vault不会备份您的密钥信息。

在插件设置中，选择`Encryption setting`页签，点击开关启用后，输入密码。
<img src="/img/encryption-setting.png" alt="端到端加密" width="75%">

> 在其他设备中需设置同样的密码，否则将无法下载。