---
title: Getting started
tags:
  - syncvault
  - installation
  - obsidiansync
date: 2025-10-15
---
> [!important] Note:
> 
> 1. Please disable other synchronization plugins when using Sync Vault, including the official Obsidian Sync.
> 2. Do not place your vault in synchronization directories such as iCloud Sync Folder or Baidu Sync Space while using Sync Vault; otherwise, unpredictable errors may occur.
> 3. It is recommended to disable proxies during cloud disk synchronization, as proxies may cause abnormal cloud disk access.

## Installation

Install `Sync Vault CE` from the Obsidian Community Plugins market.
![[sync vault ce.webp]]

The interface after a successful setup is shown in the image below:
![[sync-vault-setup-en.webp]]

> [!note] Click [here](https://sync-vault.com/#pricing) to obtain an activation code.

## Quick Setup

### Authorize
1. Navigate to the plugin settings page.
2. Click the **"Get Started"** tab.
3. Click the **"Start Authorization"** button and follow the on-screen instructions to complete the cloud disk authorization.

> [!tip] The Welcome Page
> After successful authorization, you will be redirected to the [Welcome Page](https://kqiu.top/welcome-to-sync-vault/). Follow the steps described there or as detailed below.

### Open Dashboard
Find the ☁️ ribbon icon in the left sidebar (for mobile users, find the **'≡'** menu in the bottom-right corner and click it). Once clicked, the **Live Sync Status Dashboard** will be displayed. This view provides a visual map of your synchronization network:

![[sync-vault-dashboard-en.webp]]

> [!note] Dashboard Overview:
> 1. **Visual Topology**: Displays the real-time connection status between your **Cloud Storage** (e.g., Alibaba Drive), your **Current Device**, and any connected **Peers**.
> 2. **Status Indicators**: Quick view of saved space, login status, and room connectivity.
> 3. **Security**: Toggle **End-to-End Encryption (E2EE)** directly from the dashboard.
> 4. **Navigation Tabs**:
>    - **Vault Info**: Detailed statistics about your local vault.
>    - **Quick Actions**: Shortcuts for common tasks like manual sync or indexing.
>    - **Cloud Explorer**: Browse and manage files directly on your cloud drive.
>    - **Activity Logs**: Real-time sync logs and history.
>    - **Collab Details**: Manage peer connections and sharing settings.

### Explore and Sync Files
To manage your cloud files or trigger synchronization:
1. Switch to the **'Cloud Explorer'** tab at the bottom of the dashboard.
2. Browse your vault's cloud structure.

The explorer's behavior depends on your sync mode:

- In **[[sync-modes/restricted-mode | Restricted Mode]]**, you can manually select files to download or upload.
- In **[[sync-modes/auto-mode | Auto Mode]]**, the dashboard will primarily show synchronization progress and conflicts.
- In **[[sync-modes/peer-to-peer-livesync | P2P Mode]]** (Live Sync), files are synchronized in real-time across connected peers.

### MCP Configuration

Sync Vault supports the Model Context Protocol (MCP), allowing AI tools to interact with your cloud files.

#### Claude Code CLI

Add the configuration in your `.claude/mcp.json` file (usually located in your user home directory):

```json
{
  "mcpServers": {
    "sync-vault-mcp": {
      "type": "sse",
      "url": "http://127.0.0.1:3000/sse"
    }
  }
}
```

#### Claude Desktop

> Claude Desktop only supports MCP Servers via **STDIO**. A bridge is required to connect to the Sync Vault MCP (which uses SSE). We recommend using `sse-bridge`.

1. Install the bridge: `npm install -g @mcpwizard/sse-bridge`
2. Open Claude Desktop, go to **Settings** -> **Developer**, and click the **Edit Config** button.
3. Add the following configuration:

```json
{
  "mcpServers": {
    "sync-vault-mcp": {
      "command": "npx",
      "args": [
        "@mcpwizard/sse-bridge",
        "http://127.0.0.1:3000/sse"
      ]
    }
  }
}
```

#### Cursor / Trae

Open your **Cursor/Trae MCP settings** and manually add a new MCP Server.

- **Name**: `Sync Vault MCP`
- **Type**: `SSE`
- **URL**: `http://127.0.0.1:3000/sse` (default)

```json
{
  "mcpServers": {
    "sync-vault-mcp": {
      "type": "sse",
      "url": "http://127.0.0.1:3000/sse"
    }
  }
}
```

> [!done] Congratulations, enjoy your Sync Vault journey! 🍻