---
title: 腾讯云 COS
date: 2025-10-24
tags:
  - obsidiansync
  - S3
  - 腾讯COS
---
Sync Vault 支持通过腾讯云对象存储 (COS) 进行同步。腾讯云 COS 提供稳定的服务和快速的传输速度，适合大多数用户。

> [!important] 注意：使用前请确认对象存储容量。

## 购买腾讯云 COS 对象存储

前往 [腾讯云官网](https://cloud.tencent.com/) 并选择相应的对象存储方案。

## 配置 Sync Vault

![[Pasted image 20250908145458.webp | 400]]

如图所示，点击 【Get Started】(开始)-【S3】-【Authorize】(授权)，然后在弹出的窗口中输入相应参数：

- **Endpoint**: 无需填写。
- **Region** (地域): 前往 [存储桶列表](https://console.cloud.tencent.com/cos/bucket)，查看 "所属地域" 列，并复制对应的英文名称（例如 `ap-guangzhou`）。
- **Access Key ID**: 前往 [API 密钥管理](https://console.cloud.tencent.com/cam/capi) 获取 SecretID。
- **Secret Access Key**: 前往 [API 密钥管理](https://console.cloud.tencent.com/cam/capi) 获取 SecretKey。

完成后，点击 "Test Connection" (测试连接) 按钮以验证配置是否正确。

## 配置 CORS (跨域资源共享)

如果您遇到错误 `Failed to set CORS configuration. Please configure it manually` (无法设置 CORS 配置，请手动配置)，请前往存储桶列表配置 CORS，参考下图：

![[config cors.webp]]

配置完成后，您就可以通过腾讯云 COS 开始多设备同步了。