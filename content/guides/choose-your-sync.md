---
title: Choose a sync solution
tags:
  - remotelysave
  - syncthing
  - ObsidianSync
  - iCloud
date: 2025-10-05
---
# Obsidian Sync Solutions Comparison

Obsidian offers multiple sync solutions. Users can choose the one that best fits their needs based on factors like the devices they need to sync, required features, and costs. Below is a comparison of [Obsidian Official Sync](https://obsidian.md/sync), [iCloud](https://www.icloud.com.cn/), [Syncthing](https://syncthing.net/), [RemotelySave](https://github.com/remotely-save/remotely-save), and [SyncVault](https://sync-vault.com/sync-vault/) for Obsidian users' reference.

1. [[sync-comparison#Cross-Platform Compatibility|Cross-Platform Compatibility Comparison]]
2. [[sync-comparison#Features|Feature Comparison]]
3. [[sync-comparison#Pricing|Key Parameters & Pricing]]

## Choose by Usage Scenario

### Scenario 1: Apple Ecosystem Only

- **Recommended**: iCloud
    
    Reason: Pre-installed on devices, no configuration required.
- **Alternatives**: Obsidian Official Sync, SyncVault, Remotely Save

### Scenario 2: Full Platform Support + Free

- **Recommended**: SyncVault Community Edition + Nutstore/Infinicloud/Alibaba Cloud Drive
    
    Reason: Simple to use with a user-friendly interface.
- **Alternative**: Remotely Save + Nutstore WebDAV

### Scenario 3: Full Platform Support + OSS Costs + Minimal Configuration

- **Recommended**: SyncVault Community Edition + Tencent Cloud Object Storage (COS)
    
    Reason: Extremely easy to install and configure, with a visual sync interface.
- **Alternative**: Remotely Save + Alibaba Cloud OSS/Amazon AWS

### Scenario 4: Full Platform Support + Multiple Repositories + Large Storage + Many Devices

- **Recommended**: SyncVault + Baidu Cloud Drive
    
    Reason: Baidu Cloud Drive offers large storage capacity (repository size limited only by cloud drive capacity), good speed with a membership, and no restrictions on the number of devices or repositories.

### Scenario 5: Full Platform Support + Few Repositories + Small Storage + Price Insensitivity

- **Recommended**: Obsidian Official Sync
    
    Reason: Built into Obsidian with simple configuration, but limited by the number and size of repositories.

### Scenario 6: Free + No iOS Devices + Enjoy DIY Configuration

- **Recommended**: Syncthing

### Scenario 7: Own a NAS

- **Recommendation 1**: SyncVault + Real-Time Sync + [[build-with-nas|NAS Deployment]]
    
    Reason: Free to use the beta version of real-time sync, with simple deployment.
- **Recommendation 2**: Syncthing + Real-Time Sync
- **Alternative 1**: Remotely Save + WebDAV
- **Alternative 2**: SyncVault Community Edition + WebDAV

### Scenario 8: Pursuit of Ultimate Privacy + Real-Time Sync

- **Recommendation 1**: SyncVault + Real-Time Sync
    
    Reason: Data shared only between devices, free to use the beta version, with relatively simple deployment.
- **Recommendation 2**: Syncthing + Real-Time Sync

## Solution Comparison: Compatibility, Features & Pricing

### Cross-Platform Compatibility

| Platform | Official Sync | iCloud | Syncthing | RemotelySave | SyncVault |
| :------- | :------------ | :----- | :-------- | :----------- | :-------- |
| Windows  | ✅             | ❌      | ✅         | ✅            | ✅         |
| macOS    | ✅             | ✅      | ✅         | ✅            | ✅         |
| Linux    | ✅             | ❌      | ✅         | ✅            | ✅         |
| iOS      | ✅             | ✅      | ❌         | ✅            | ✅         |
| Android  | ✅             | ❌      | ✅         | ✅            | ✅         |

### Features

|Feature|Official Sync|iCloud|Syncthing|RemotelySave|SyncVault|
|:--|:--|:--|:--|:--|:--|
|Selective Sync[^1]|✅|❌|✅|✅|✅|
|Plugin Sync|✅|✅|✅|✅|✅|
|Multi-User Shared Repositories[^2]|✅|❌|✅|❌|✅|
|Encryption|✅|✅|✅|✅|✅|
|Simultaneous Multi-Device Sync|✅|✅|✅|✅|✅|
|Custom Storage[^3]|❌|❌|✅ (Runs on NAS, etc.)|✅ (Supports multiple cloud drives, WebDAV, S3)|✅ (Supports Baidu Cloud Drive, Alibaba Cloud Drive, OneDrive; Community Edition supports WebDAV, S3)|
|Conflict Resolution[^4]|✅ (Generates conflict copies)|❌|✅ (Generates copies)|✅ (Generates copies)|✅[^4]|
|Revision History|✅|❌|✅|❌|✅|

### Pricing

|Parameter|Official Sync|iCloud|Syncthing|RemotelySave|SyncVault|
|:--|:--|:--|:--|:--|:--|
|Number of Repositories|1 (Standard Plan[^5])<br><br>10 (Plus Plan[^6])|Unlimited|Unlimited|Unlimited|Unlimited|
|Total Storage Capacity|1GB (Standard Plan)<br><br>10GB (Plus Plan)|5GB (Free)<br><br>50GB (¥6/month)|Equal to storage medium|Equal to storage medium|Equal to cloud drive capacity|
|Maximum File Size|200MB|Unlimited|Unlimited|Unlimited|Unlimited|
|Price|\$4/month (Standard Plan)<br><br>\$16/month (Plus Plan)|50GB for ¥6/month|Free|Free|Community Edition: Free; Pro Edition: One-time payment of ¥199; Basic Edition: One-time payment of ¥99|

[^1]: Selective Sync: Allows users to specify only certain files within a repository for syncing. iCloud can only sync entire repositories.
[^2]: Multi-User Shared Repositories: Multiple users collaboratively editing the same Obsidian repository.
[^3]: Custom Storage: The solution supports multiple storage devices (e.g., cloud drives, NAS).
[^4]: Conflict Resolution: Methods for handling cases where the same content is modified simultaneously on multiple terminals. SyncVault uses [[video-playback-revision-sync-report#Manage File Revision History|revision history generation]].
[^5]: Standard Plan Annual Billing: \$4/month; Monthly Billing: \$5/month
[^6]: Plus Plan Annual Billing: \$8/month; Monthly Billing: \$10/month

## Reference Links

[1] Obsidian Sync, [https://obsidian.md/sync/](https://obsidian.md/sync/)[2] iCloud, [https://www.icloud.com.cn/](https://www.icloud.com.cn/)[3] Syncthing, [https://docs.syncthing.net/](https://docs.syncthing.net/)[4] RemotelySave, [https://remotelysave.com/](https://remotelysave.com/)[5] SyncVault, [https://sync-vault.com/sync-vault/](https://sync-vault.com/sync-vault/)