---
title: 如何选择Obsidian同步方案
tags:
  - Obsidian同步
  - icloud
  - syncvault
  - remotelysave
  - syncthing
---
Obsidian同步可以有多种方案，用户可基于自己的现状，比如需要同步的设备、需要支持的特性、成本等多因素选择适合自己的同步方案。下面是[Obsidian官方同步](https://obsidian.md/sync)、[iCloud](https://www.icloud.com.cn/)、[Syncthing](https://syncthing.net/)、[RemotelySave](https://github.com/remotely-save/remotely-save)、[SyncVault](https://sync-vault.com/sync-vault/)方案之间的对比，供Obsidian朋友们参考。

1. [[sync-comparison#平台兼容性|跨平台兼容性对比]]。
2. [[sync-comparison#功能|特性对比]]。
3. [[sync-comparison#定价|主要参数与定价]]。

## 如何选择
> [!info] 仅苹果平台
- 推荐：iCloud。推荐理由：设备自带，无需配置。
- 可选：Obsidian官方、Sync Vault、Remotely Save
> [!info] 全平台+免费
- 推荐：Sync Vault社区版+坚果云/Infinicloud/阿里云盘。推荐理由：简单、界面用户友好。
- 可选：Remotely Save+坚果云Webdav
> [!info] 全平台+OSS费用+少量配置操作
- 推荐：Sync Vault社区版+腾讯COS。推荐理由：安装、配置极为简单，有可视化同步界面。
- 可选：Remotely Save+阿里云OSS/亚马逊AWS
> [!info] 全平台+仓库多+容量大+设备多
- 推荐：Sync Vault+百度网盘。推荐理由：百度网盘容量大，仓库容量上限为网盘容量，会员速度体验佳，不限设备和仓库数量。
> [!info] 全平台+仓库不多+容量不大+对价格不敏感
- 推荐：Obsidian官方同步。推荐理由：Obsidian内置，配置简单，但对仓库数量和大小有限制。
> [!info] 免费+无iOS设备+喜欢自己动手研究
- 推荐：Syncthing
> [!info] 有NAS
- 推荐一：Sync Vault+实时同步+[[build-with-nas|NAS部署]]。推荐理由：实时同步Beta版本免费使用，部署较简单。
- 推荐二：Syncthing+实时同步。
- 可选一：Remotely Save+Webdav。
- 可选二：Sync Vault社区版+Webdav。
> [!info] 极致隐私和实时同步
- 推荐一：Sync Vault+实时同步。推荐理由：仅设备间数据共享，Beta版本免费使用，部署较为简单。
- 推荐二：Syncthing+实时同步。

## 各方案比较：兼容性+功能+价格
### 平台兼容性

|  平台名称   | 官方同步 | iCloud | Syncthing | RemotelySave | SyncVault |
| :-----: | :--: | :----: | :-------: | :----------: | :-------: |
| Windows |  ✅   |   ❌    |     ✅     |      ✅       |     ✅     |
|  macOS  |  ✅   |   ✅    |     ✅     |      ✅       |     ✅     |
|  Linux  |  ✅   |   ❌    |     ✅     |      ✅       |     ✅     |
|   iOS   |  ✅   |   ✅    |     ❌     |      ✅       |     ✅     |
| Android |  ✅   |   ❌    |     ✅     |      ✅       |     ✅     |
### 功能

|     功能名称      |   官方同步   | iCloud |   Syncthing   |    RemotelySave    |               SyncVault                |
| :-----------: | :------: | :----: | :-----------: | :----------------: | :------------------------------------: |
|   选择性同步[^1]   |    ✅     |   ❌    |       ✅       |         ✅          |                   ✅                    |
|     插件同步      |    ✅     |   ✅    |       ✅       |         ✅          |                   ✅                    |
|  多人共享仓库[^2]   |    ✅     |   ❌    |       ✅       |         ❌          |                   ✅                    |
|      加密       |    ✅     |   ✅    |       ✅       |         ✅          |                   ✅                    |
|    多设备同时同步    |    ✅     |   ✅    |       ✅       |         ✅          |                   ✅                    |
| 自定义存储[^3]<br> |    ❌     |   ❌    | ✅，可运行在NAS等设备中 | ✅，支持多种云盘及Webdav、S3 | ✅，支持百度网盘、阿里云盘、onedrive；社区办支持Webdav、 S3 |
|  冲突处理方式[^4]   | ✅，生成冲突副本 |   ❌    |    ✅，生成副本     |       ✅，生成副本       |                 ✅[^4]                  |
|     修订历史      |    ✅     |   ❌    |       ✅       |         ❌          |                   ✅                    |
### 定价

|   参数   |             官方同步              |        iCloud         | Syncthing | RemotelySave |              SyncVault              |
| :----: | :---------------------------: | :-------------------: | :-------: | :----------: | :---------------------------------: |
|  仓库数量  | 1个（标准版[^5]）<br>10个（Plus版[^6]） |          不限           |    不限     |      不限      |                 不限                  |
| 总存储容量  |    1GB（标准版）<br>10GB（Plus版）    | 5GB（免费）<br>50GB（¥6/月） | 等于存储媒介的大小 |  等于存储媒介的大小   |               等于网盘容量                |
| 最大文件尺寸 |             200MB             |          不限           |    不限     |      不限      |                 不限                  |
|   价格   |  \$4/月（标准版）<br>\$16/月（Plus版）  |       50GB，¥6/月       |    免费     |      免费      | 社区版本免费；Pro版本一次性买断¥199，基础版本一次性买断¥99。 |
[^1]: 选择性同步：指用户指定仓库中的部分文件进行同步。iCloud只能同步整个仓库。
[^2]: 多人共享仓库：多个用户共同编辑同一个Ob仓库。
[^3]: 自定义存储：方案可以支持多种存储设备，比如云盘、NAS等。
[^4]: 冲突处理方式：多个终端同时修改相同的内容时的处理方法。Sync Vault为[[video-playback-revision-sync-report#管理文件修订历史|生成修订历史]]
[^5]: 标准版年付：\$4/月，月付：\$5/月
[^6]: Plus版年付：\$8/月，月付：\$10/月
## 参考链接
1. Obsidian sync, https://obsidian.md/sync/
2. iCloud, https://www.icloud.com.cn/
3. Syncthing, https://docs.syncthing.net/
4. RemotelySave, https://remotelysave.com/
5. SyncVault, https://sync-vault.com/sync-vault/