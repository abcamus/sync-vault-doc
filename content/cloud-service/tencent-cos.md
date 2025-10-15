---
title: 腾讯云COS
date: 2025-09-08
tags:
  - obsidiansync
  - S3
  - 腾讯云
---
Sync Vault支持基于腾讯云COS进行同步。腾讯云COS服务稳定、速度快，适合大部分用户。
## 购买腾讯云COS对象存储
进入[腾讯云官网](https://cloud.tencent.com/)，选购对应的对象存储套餐。
## 配置Sync Vault
![[Pasted image 20250908145458.png | 400]]

如图所示，点击【开始使用】-【S3】-【点击授权】，然后在弹出窗口中填入对应的参数：
- Endpoint：不用填。
- Region：进入[存储桶列表](https://console.cloud.tencent.com/cos/bucket)，查看所属地域一列，把英文名复制到此处。
- Access Key ID：进入[API权限控制](https://console.cloud.tencent.com/cam/capi)，获取SecretID。
- Secret Access Key：进入[API权限控制](https://console.cloud.tencent.com/cam/capi)，获取SecretKey。
完成后，点击"Test Connection"按钮，检查配置是否正确。

然后就可以通过Tencent COS进行多设备同步了。