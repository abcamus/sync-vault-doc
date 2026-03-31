---
title: 选择同步方案
tags:
  - remotelysave
  - syncthing
  - ObsidianSync
  - iCloud
date: 2025-10-05
---

# Obsidian 同步方案对比

Obsidian 同步方案很多，但**选对只看 3 点**：你用什么设备、要不要免费、需不需要多设备/多仓库/协同。
下面是 **官方同步、iCloud、Syncthing、RemotelySave、SyncVault** 的完整对比，帮你快速选出最优解。

---

## 一、快速选型（直接看这 section 就够）

### 🍎 只在用苹果设备（iPhone + Mac）
✅ **首选：iCloud**
- 开箱即用，不用装插件，不用配置

### 🆓 全平台 + 想免费
✅ **首选：SyncVault 社区版 + 阿里云盘/坚果云/InfiniCloud**
- 界面友好，一键同步，支持全平台

### ☁️ 全平台 + 极简配置 + 低成本对象存储
✅ **首选：SyncVault + 腾讯云 COS**
- 可视化面板，配置最简单

### 📦 多仓库 + 超大空间 + 不限设备
✅ **首选：SyncVault + 百度网盘**
- 空间只受网盘限制，多仓库无压力

### 💰 预算充足 + 不想折腾
✅ **首选：Obsidian 官方同步**
- 最稳定，原生支持，但空间和仓库数有限制

### 🛠️ 极客风 + 无 iOS + 纯免费
✅ **首选：Syncthing**
- P2P 同步，完全自建，无云服务商

### 📶 有 NAS + 要实时同步
✅ **首选：SyncVault（实时同步）+ NAS**
- 测试版免费，部署简单，隐私强
备选：Syncthing

### 🔒 极致隐私 + 实时同步
✅ **首选：SyncVault 实时同步 / Syncthing**
- 数据不走第三方云，只在设备间直连

---

## 二、跨平台兼容性

| 平台 | 官方同步 | iCloud | Syncthing | RemotelySave | SyncVault |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Windows | ✅ | ❌ | ✅ | ✅ | ✅ |
| macOS | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | ✅ | ❌ | ✅ | ✅ | ✅ |
| iOS | ✅ | ✅ | ❌ | ✅ | ✅ |
| Android | ✅ | ❌ | ✅ | ✅ | ✅ |

---

## 三、功能特性对比

| 特性 | 官方同步 | iCloud | Syncthing | RemotelySave | SyncVault |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 选择性同步 | ✅ | ❌ | ✅ | ✅ | ✅ |
| 插件 & 主题同步 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 多用户协同编辑 | ✅ | ❌ | ✅ | ❌ | ✅ |
| 文件加密 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 多设备同时同步 | ✅ | ✅ | ✅ | ✅ | ✅ |
| 自定义存储（网盘/NAS/OSS） | ❌ | ❌ | ✅ | ✅ | ✅ |
| 智能冲突解决 | ✅ | ❌ | ✅ | ✅ | ✅ |
| 文件版本历史 | ✅ | ❌ | ✅ | ❌ | ✅ |

---

## 四、价格与容量

| 项目 | 官方同步 | iCloud | Syncthing | RemotelySave | SyncVault |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 仓库数量 | 1 / 10 个 | 不限 | 不限 | 不限 | 不限 |
| 总空间 | 1GB / 10GB | 免费 5GB | 取决于存储介质 | 取决于存储介质 | 取决于网盘 |
| 单文件大小 | 200MB | 不限 | 不限 | 不限 | 不限 |
| 价格 | $4～$16/月 | 6元/月起 | 免费 | 免费 | 社区版免费<br>专业版一次性 ¥199 |

---

## 名词解释
- **选择性同步**：只同步部分文件夹，不整仓同步
- **自定义存储**：可对接自己的网盘、NAS、对象存储
- **协同编辑**：多人一起编辑同一个知识库
- **版本历史**：文件修改后可回溯历史版本

---

## 参考链接
- Obsidian Sync：https://obsidian.md/sync/
- iCloud：https://www.icloud.com.cn/
- Syncthing：https://docs.syncthing.net/
- RemotelySave：https://remotelysave.com/
- SyncVault：https://sync-vault.com/sync-vault/