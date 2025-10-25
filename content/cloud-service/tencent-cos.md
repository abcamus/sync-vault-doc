---
title: Tencent COS
date: 2025-10-24
tags:
  - obsidiansync
  - S3
  - TencentCOS
---
Sync Vault supports synchronization via Tencent Cloud Object Storage (COS). Tencent Cloud COS offers stable service and fast speeds, making it suitable for most users.

> [!important] Note: Before use, please confirm the object storage capacity.

## Purchasing Tencent Cloud COS Object Storage

Go to the [Tencent Cloud official website](https://cloud.tencent.com/) and select the corresponding object storage plan.

## Configuring Sync Vault

![[Pasted image 20250908145458.png | 400]]

As shown in the figure, click 【Get Started】-【S3】-【Authorize】, then enter the corresponding parameters in the pop-up window:

- Endpoint: No need to fill in.
- Region: Go to the [Bucket List](https://console.cloud.tencent.com/cos/bucket), check the "Region" column, and copy the English name here.
- Access Key ID: Go to [API Permission Control](https://console.cloud.tencent.com/cam/capi) to obtain the SecretID.
- Secret Access Key: Go to [API Permission Control](https://console.cloud.tencent.com/cam/capi) to obtain the SecretKey.

After completion, click the "Test Connection" button to verify if the configuration is correct.

## Configuring CORS

If you encounter the error `Failed to set CORS configuration. Please configure it manually`, go to the Bucket List to configure CORS, referring to the figure below:![[config cors.png]]

After this, you can start multi-device synchronization via Tencent Cloud COS.