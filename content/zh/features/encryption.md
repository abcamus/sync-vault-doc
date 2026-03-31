---
title: 端到端加密
tags:
  - AES-GCM
  - SyncVault
---
Sync Vault 支持使用 **AES-GCM 加密算法** 的端到端加密。启用加密后，您的文件将以密文形式存储在 [[cloud-services/index|云存储]] 中。

> [!important] 请妥善保管您的密钥。Sync Vault 不会备份您的密钥信息。

在插件设置中，选择 `Encryption Setting` (加密设置) 标签页，点击开关启用加密，然后输入您的密码。

<img src="/img/encryption-setting.webp" alt="端到端加密" width="75%">

> [!important] 在其他设备上必须设置 **相同的密码**，否则无法下载和解密文件。