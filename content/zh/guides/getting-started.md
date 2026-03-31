---
title: 快速开始
tags:
  - syncvault
  - 安装
  - obsidiansync
date: 2025-10-15
---
> [!important] 注意：
> 
> 1. 使用 Sync Vault 时，请禁用其他同步插件，包括官方的 Obsidian Sync。
> 2. 不要将您的仓库放在 iCloud 同步文件夹或百度同步空间等同步目录中，否则可能会发生不可预知的错误。
> 3. 建议在云盘同步期间禁用代理，因为代理可能导致云盘访问异常。

## 安装

从 Obsidian 社区插件市场安装 `Sync Vault CE`。
![[sync vault ce.webp]]

设置成功后的界面如下图所示：
![[setup-zh.webp]]

> [!note] 点击 [这里](https://sync-vault.com/#pricing) 获取激活码

## 快速设置

### 授权
1. 导航至插件设置页面。
2. 点击 **"Get Started"** (开始) 标签页。
3. 点击 **"Start Authorization"** (开始授权) 按钮，按照屏幕提示完成云盘授权。

> [!tip] 欢迎页面
> 授权成功后，您将被重定向到 [欢迎页面](https://kqiu.top/welcome-to-sync-vault/)。请按照那里的步骤操作，或参考下方说明。

### 打开仪表盘
在左侧边栏找到 ☁️ 图标（对于移动端，点击右下角的 **'≡'** 菜单），点击后将打开 **实时同步状态仪表盘 (Live Sync Status Dashboard)**。该界面直观地展示了您的同步网络：

![[dashboard-zh.webp]]

> [!note] 仪表盘功能概览：
> 1. **视觉拓扑图**：实时展示 **云端存储**（如阿里云盘）、**当前设备** 以及 **同步同伴 (Peers)** 之间的连接状态。
> 2. **状态指示器**：快速查看已节省空间、登录状态及房间连接情况。
> 3. **安全性控制**：直接在仪表盘开启或关闭 **端到端加密 (E2EE)**。
> 4. **底部导航标签**：
>    - **仓库信息 (Vault Info)**：查看本地仓库的详细统计数据。
>    - **快速操作 (Quick Actions)**：快速触发手动同步、索引更新等任务。
>    - **云端浏览器 (Cloud Explorer)**：直接浏览和管理云盘文件。
>    - **活动日志 (Activity Logs)**：查看实时的同步日志和历史记录。
>    - **协作详情 (Collab Details)**：管理同伴连接和共享设置。

### 浏览与同步文件
要管理云端文件或触发同步：
1. 切换到仪表盘底部的 **“云端浏览器 (Cloud Explorer)”** 标签页。
2. 浏览您仓库的云端文件结构。

浏览器的行为取决于您的同步模式：

- 在 **[[zh/sync-modes/restricted-mode | 受限模式]]** 下，您可以手动选择文件进行下载或上传。
- 在 **[[zh/sync-modes/auto-mode | 自动模式]]** 下，仪表盘将主要显示同步进度和冲突情况。
- 在 **[[zh/sync-modes/peer-to-peer-livesync | P2P 模式]]**（实时同步）下，文件将在连接的同伴之间实时同步。

### 配置 MCP

Sync Vault 支持 Model Context Protocol (MCP)，允许 AI 工具直接与您的云端文件交互。

#### Claude Code CLI

在 `.claude/mcp.json` 中添加如下配置（该文件通常位于用户根目录）：

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

> 由于 Claude Desktop 仅支持通过 **STDIO** 方式接入 MCP Server，需要使用桥接器将 Sync Vault 的 SSE 接口转换为 STDIO 接口。我们推荐使用 `sse-bridge`。

1. 安装桥接器：`npm install -g @mcpwizard/sse-bridge`
2. 在 Claude Desktop **【设置】**-**【开发者】** 中点击编辑配置按钮，添加以下代码：

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

在 Cursor/Trae 的 MCP 设置中，选择手动添加 MCP Server：

- **名称**: `Sync Vault MCP`
- **类型**: `SSE`
- **URL**: `http://127.0.0.1:3000/sse`（默认地址）

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

> [!done] 恭喜您，开启 Sync Vault 之旅吧！ 🍻
      }
  }
}
```

> [!done] 恭喜，开始您的 Sync Vault 之旅吧！🍻