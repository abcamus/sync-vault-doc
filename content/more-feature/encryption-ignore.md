---
title: 其他设置：加密、忽略文件、加载时同步
tags:
  - Obsidian同步
  - 端到端加密
  - 忽略文件
  - 加载时同步
  - syncvault
---

## 端到端加密
在插件设置中，选择`Encryption setting`页签，点击开关启用后，输入密码。
<!-- ![端到端加密](/img/encryption-setting.png) -->
<img src="/img/encryption-setting.png" alt="端到端加密" width="75%">

> 在其他设备中需设置同样的密码，否则将无法下载。

## 文件过滤
Sync Vault支持按照正则表达式匹配文件路径进行过滤和按照文件大小过滤。
[按照正则表达式过滤文件](https://kqiu.top/sync-vault-use-regexr/)

<img src="/img/sync-vault-ignore-files.png" alt="文件过滤" width="75%">

## 加载时同步
在加载或者刷新受控模式下的视图时，会自动从云端下载待下载的文件。减少用户手动操作的次数。

<img src="/img/sync-vault-update-on-load.png" alt="加载时同步" width="75%">
