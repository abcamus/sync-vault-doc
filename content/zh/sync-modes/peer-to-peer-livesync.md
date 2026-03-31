---
title: 点对点实时同步
tags:
  - peer-to-peer
  - 实时同步
  - 信令服务器
---
> [!warning] 基于 0.9.1 版本。如果测试版有更新，以最新版本为准。

## 使用场景

1. 需要极致的实时同步体验。
2. 需要多用户实时内容共享。

## 尝试 Web 版

请访问：[点对点同步 Web 版](https://www.doubao.com/chat/demo.sync-vault.com)

## 操作步骤

当多个需要同步的设备处于同一局域网内（或通过中继服务器，公测进行中，[点击了解更多](https://kqiu.top/obsidian-sync-vault-livesync-beta/)）时，您可以使用点对点 (P2P) 同步文件。

> 此功能需要使用信令服务器。详情请见 [启动信令服务器](#step-1-启动信令服务器)。完成上述步骤后，多个仓库的内容将自动同步；在一个仓库中所做的编辑将实时更新到其他仓库。

### 步骤 1：启动信令服务器

```bash
$ git clone git@github.com:abcamus/webrtc-signaling-server.git
$ cd webrtc-signaling-server
$ npm run docker:build
$ npm run docker:run
```

检查信令服务器 IP（假设为 `X.X.X.X:1234`）。

### 步骤 2：配置点对点同步

1. 打开 `Sync Vault` 插件设置，选择 `Get started` (开始)，然后选择 `Real-time sync` (实时同步)。
2. 点击 `Sync settings` (同步设置)，在 `Connection server` (连接服务器) 输入框中输入 `ws://X.X.X.X:1234`。

### 步骤 3：发现并连接设备

点击云图标（PC 端侧边栏 <i class="fas fa-cloud"></i>，移动端在底部汉堡菜单 <i class="fa fa-bars"></i> 中找到 <i class="fas fa-cloud"></i> 图标）。

<img src="/img/p2p-mode-view.webp" alt="P2P 模式视图" width="75%">

`Connection status` (连接状态) 显示当前设备名称和已连接设备的数量。

<img src="/img/p2p-device-connected.webp" alt="设备已连接" width="75%">

## 直连失败的场景

需要通过 [[cloud-services/turn-server| TURN 服务器]] 进行中继。关于如何在 NAS 上部署，请参考 [[build-with-nas | 这里]]。