---
title: "4. peer-to-peer实时同步"
tags:
  - Obsidian同步
  - Sync Vault
  - 实时同步
  - peer-to-peer
---
> [!warning] 基于0.9.1版本，如果beta版本有更新，以最新版本为主。
## 使用场景
1. 需要极致实时同步体验。
2. 需要多人实时共享内容。
## 如何操作
当多台待同步设备位于同一局域网内时（或者通过中转服务器，公测进行中，[点击了解](https://kqiu.top/obsidian-sync-vault-livesync-beta/)），可使用peer to peer同步文件。
> 本功能需要使用信令服务器，详见[启动信令服务器](#启动信令服务器)。
> 按照上述步骤操作完成后，多个仓库上的内容会自动进行同步；在一个仓库中编辑的内容会实时更新到其他仓库中。

### 步骤一：启动信令服务器
```bash
$ git clone git@github.com:abcamus/webrtc-signaling-server.git
$ cd webrtc-signaling-server
$ npm run docker:build
$ npm run docker:run
```

查看信令服务器IP，假设为`X.X.X.X:1234`。

### 步骤二：配置peer to peer同步
1. 打开`Sync Vault`插件设置，选择`Get started`，选择`Real-time sync`。
2. 点击`Sync settings`，在`Connection server`输入框中输入`ws://X.X.X.X:1234`。

### 步骤三：发现和连接设备
点击云朵图标（PC端侧边栏<i class="fas fa-cloud"></i>，移动端底部汉堡菜单<i class="fa fa-bars"></i>中<i class="fas fa-cloud"></i>图标）。
<!-- ![p2p模式视图](/img/p2p-mode-view.png) -->
<img src="/img/p2p-mode-view.png" alt="p2p模式视图" width="75%">

在`Connection status`中显示了当前设备名字和连接的设备数量。
<!-- ![设备已连接](/img/p2p-device-connected.png) -->
<img src="/img/p2p-device-connected.png" alt="设备已连接" width="75%">