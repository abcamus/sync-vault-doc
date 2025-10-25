---
title: Peer-to-peer Live Sync
tags:
  - peer-to-peer
  - LiveSync
  - SignalingServer
---
> [!warning] Based on version 0.9.1. If there are updates to the beta version, the latest version shall prevail.

## Usage Scenarios

1. Need an extreme real-time synchronization experience.
2. Need multi-user real-time content sharing.

## Try the Web Version

Please visit: [Peer-to-Peer Sync Web Version](https://www.doubao.com/chat/demo.sync-vault.com)

## How to Operate

When multiple devices to be synchronized are on the same LAN (or via a relay server, public beta in progress, [click to learn more](https://kqiu.top/obsidian-sync-vault-livesync-beta/)), you can use peer-to-peer (P2P) to sync files.

> This feature requires the use of a signaling server. For details, see [Start the Signaling Server](https://www.doubao.com/chat/26013069559978498#start-the-signaling-server).After following the above steps, the content across multiple vaults will sync automatically; edits made in one vault will be updated to other vaults in real time.

### Step 1: Start the Signaling Server

bash

```bash
$ git clone git@github.com:abcamus/webrtc-signaling-server.git
$ cd webrtc-signaling-server
$ npm run docker:build
$ npm run docker:run
```

Check the signaling server IP (assumed to be `X.X.X.X:1234`).

### Step 2: Configure Peer-to-Peer Sync

1. Open the `Sync Vault` plugin settings, select `Get started`, then choose `Real-time sync`.
2. Click `Sync settings`, and enter `ws://X.X.X.X:1234` in the `Connection server` input box.

### Step 3: Discover and Connect Devices

Click the cloud icon (sidebar <i class="fas fa-cloud"></i> on PC, or <i class="fas fa-cloud"></i> icon in the bottom hamburger menu <i class="fa fa-bars"></i> on mobile).

<img src="/img/p2p-mode-view.png" alt="P2P Mode View" width="75%">

The `Connection status` shows the current device name and the number of connected devices.

<img src="/img/p2p-device-connected.png" alt="Devices Connected" width="75%">

## Scenarios Where Direct Connection Fails

Relay via a [[turn-server| TURN Server]] is required. For how to deploy it on a NAS, refer to [[build-with-nas | here]].