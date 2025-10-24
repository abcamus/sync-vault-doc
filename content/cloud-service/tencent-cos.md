---
title: 腾讯云COS
date: 2025-10-24
tags:
  - obsidiansync
  - S3
  - 腾讯云
---
Sync Vault支持基于腾讯云COS进行同步。腾讯云COS服务稳定、速度快，适合大部分用户。
> [!important] 注意事项：使用前请确认对象存储容量
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
## 配置CORS
如何遇到`Failed to set CORS configuration. Please configure it manually`，请前往存储桶列表配置CORS，参考下图：
![[config cors.png]]

然后就可以通过Tencent COS进行多设备同步了。