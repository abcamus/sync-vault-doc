---
title: Changelog
tags:
  - syncvault
  - Changelog
date: 2025-10-03
created: 2025-01-01
---

## Major Milestones

| Version | Core Breakthroughs | Impact |
| :--- | :--- | :--- |
| **v1.12.x** | **VFS (Virtual File System)** | "On-Demand Sync" era begins, instant access to massive data |
| **v1.10.x** | **MCP AI Integration** | Knowledge vaults become AI's energy source |
| **v1.0.x** | **Official Release** | Commercial readiness, supporting top 5 cloud providers |
| **v0.8.x** | **Live Sync & Video** | Real-time collaboration and cloud media streaming |

## Recent Updates

### 1.12.8 (20260331)
- Added: 3 Baidu Netdisk MCP tools: semantic search, file sharing, and upload via URL.
- Added: Video notes click timestamp to jump to video position.
- Optimized: Real-time sync control flow and interface.

### 1.12.4 (20260326)
- Fixed: Locale and typo issues.

### 1.12.3 (20260325)
- Fixed: Controlled mode panel cannot be opened.
- Fixed: Dashboard sync status not auto-refreshed after sync ends.

### 1.12.2 (20260324)
#### Sync
- Added: VFS (Virtual File System), auto-sync only syncs directory structure, opening files on demand.
- Added: 1+N hybrid sync, combining cloud backup and real-time collaboration to improve multi-device experience.
#### Image
- Added: Zoom in, zoom out, and reset buttons.
#### UI
- Optimized: Real-time sync control dashboard shows editing status of collaborators and cloud sync status in real time.

### 1.10.6 (20260317)
#### MCP
- Added: MCP server toolcall adds creating, deleting, moving, downloading, and uploading cloud files.
- Added: MCP setting write control switch.
- Optimized: MCP atomization, combined with `sync-vault-skills` to improve model capabilities.
- Optimized: `list_cloud_files` and `search_cloud_files` support pagination.
#### Video Playback
- Added: Web display and speed control playback.
- Fixed: Quark Cloud Drive m3u8 video playback.
- Optimized: Pause/play interface.
- Optimized: Baidu Netdisk video multi-resolution selection.
#### Image
- Added: Image preview supports rotation.
#### Sync
- Ignore files: `.tmp` files.
- Optimized: Quark Cloud Drive cookie failure prompt.
- Optimized: Collaboration info display unified in the dashboard.

### 1.10.1 (20260307)
- Fixed: Compatibility with Obsidian 1.12 and Aliyun Drive video playback.
- Added: MCP server supports getting cloud file links.
- Added: MCP server supports getting cloud file video code blocks.

### 1.10.0 (20260301)
- Added: MCP server.
- Fixed: Baidu Netdisk video playback on mobile.

<details>
<summary>View Archived History (v1.0.0 to v1.9.2)</summary>

## v1.0 (since 2025-10-22, oracle-shell)

### 1.0.0 (20251022)

- Added cloud services: Nutstore, InfiniCloud, Tencent Cloud Object Storage (COS), Quark Cloud Drive.
- Performance optimization: Aliyun Drive file scanning speed improved by about 20x.
- UI:
    - Compatible with Cupertino theme.
    - More help information provided.
    - Simplified authorization process.
- Others:
    - Auto-reload when Aliyun Drive video playback link expires.

### 1.0.1 (20251027)
- Fixed: 31066 error when opening Baidu Netdisk dashboard after activating a new vault for the first time.
- Fixed: Baidu Netdisk still prompts failure after unlocking Pro for a new vault.
- Fixed: Upload cancelled warning when switching from auto mode to controlled mode.

### 1.0.2 (20251102)
- Fixed: Font issue in online PDF preview, occasional failure to open some PDFs.
- Fixed: View not refreshed after deleting hidden files in controlled mode.
- Fixed: Incomplete file display for Aliyun Drive in controlled mode.
- Optimized: Quark Cloud Drive file indexing speed.
- Added: Open cloud PDF via built-in PDF reader (also supports PDF Plus plugin).
- Added: Web real-time sync supports showing current cursor via awareness.
- Added: Kanban settings button to open Sync Vault settings.

### 1.0.3 (20251107)
- Optimized: Added fingerprint mechanism for cloud auto-sync.
- Optimized: 115 Cloud Drive PDF reading experience.
- Fixed: Real-time sync – read-only / read-write buttons did not correctly recognize permissions.
- Fixed: Dashboard cloud file count did not include hidden files.

### 1.0.4 (20251116)
- Optimized: File browser shows thumbnails.
- Optimized: Cloud drive re-authorization mechanism.
- Fixed: Event not properly preprocessed when renaming folders.

### 1.0.5 (20251122)
- Optimized: File event handling.
- Added: Onboarding guide interface.
- Added: Support for online MP3 playback on Baidu Netdisk.

### 1.0.6 (20251130)
- Fixed: Large file upload errors for Baidu Netdisk and OneDrive.
- Optimized: 31304 error prompt for Baidu video playback.
- Added: One-click copy file path in file browser.

### 1.0.7 (20251205)
- Fixed: 'local file is null' during file merge, local file not saved.
- Optimized: Simplified Tencent COS configuration.
- Optimized: Kanban display.
- Optimized: Auto-sync delay.

### 1.2.0 (20251216)
- Added: '@' command quick search for Aliyun Drive.
- Added: Auto-sync plugins and themes.
- Added: One-way sync in auto mode.
- Added: Restore files deleted by deleteLocal event.
- Added: Quark Cloud Drive support in My Cloud Drive.
- Added: File filtering in cloud drive browser.
- Improved: File browser right-click menu, one-click copy video code block, show file info.
- Optimized: File event management.

### 1.3.0 (20251222)
- Real-time sync & collaborative editing v2.
- Sync status stored in IndexedDB.

### 1.3.1 (20251223)
- Optimized: Unified event management for cloud sync and real-time sync.
- Fixed: Directory real-time sync.

### 1.3.2 (20251228)
- Optimized: File revision history display.
- Optimized: Upgraded Obsidian dependency to 1.10.2.
- Optimized: Kanban real-time activity card replaced auto-sync status view.

### 1.4.0 (20251230)
- Added: Support for custom cloud file paths.
- Added: Delete file/folder support in right-click menu of My Resources browser.

### 1.5.0 (20260107)
- Fixed: DB not adapted for multi-cloud vaults.
- Fixed: Tencent COS not adapted for multi-cloud vaults.
- Fixed: Inconsistent time precision in event manager.
- Optimized: Real-time sync kanban shows current editing position.
- Optimized: Real-time sync kanban shows current shared files.
- Optimized: Activity log shows more details.
- Optimized: Improved sync stop efficiency.

### 1.5.1 (20260111)
- Added: Online WMA audio playback.
- Added: Video resolution control.
- Added: Subtitle support.

### 1.5.2 (20260112)
- Added: Load subtitles via video right-click menu.
- Optimized: Clean up invalid logs.

### 1.5.3 (20260116)
- Added: Insert cloud file links into notes.
- Optimized: Baidu Netdisk error messages.
- Optimized: Aliyun Drive cache usage efficiency.

### 1.5.4 (20260117)
- Added: PDF reading support for OneDrive.
- Added: Audio & video playback support for OneDrive.
- Added: Insert OneDrive hyperlinks into notes.
- Added: Hover preview for OneDrive hyperlinks.
- Added: OneDrive resources show thumbnails in cloud resource browser.
- Fixed: OneDrive patch for large files returns 204 status.

### 1.5.5 (20260119)
- Added: File rename support in cloud browser right-click menu.
- Added: Original quality playback for 115 Cloud Drive audio & video.
- Fixed: OneDrive Patch returns 204.

### 1.5.6 (20260120)
- Added: Sort button in cloud drive browser toolbar.
- Optimized: Show Quark Cloud Drive VIP level.
- Optimized: Audio album cover uses cloud drive native cover first.
- Fixed: 115 Cloud Drive file rename.
- Fixed: 31066 error on first sync with Baidu Netdisk.

### 1.5.7 (20260121)
- Fixed: HTTP2_PROTOCOL_ERROR when uploading large files to OneDrive.
- Optimized: Refresh token frequency, reduce authorization expiration prompts.
- Added: Sort by files first / folders first in cloud browser.

### 1.5.8 (20260122)
- Fixed: Quark & WebDAV incorrectly triggering OAuth interface.
- Fixed: OneDrive large file last chunk boundary calculation error.
- Optimized: Real-time sync sharing mechanism:
    - New files do not trigger sharing by default.
    - Opening files does not trigger sharing by default.
    - Only files marked as shared sync in real time when changed.

### 1.6.0 (20260123)
- Added: Aliyun Drive audio playback.
- Added: Open images online.
- Added: One-click open cloud markdown/txt/excel.
- Optimized: Various prompts.

### 1.7.0 (20260127)
- Fixed: #10.
- Optimized: Image online preview supports SVG.
- Added: "Open in Cloud Drive" in file right-click menu.
- Added: Support inserting cloud images using `![]()` syntax.
- Added: Support cloud text files using `![]()` syntax.

### 1.7.1 (20260129)
- Added: Image preview and insert support for Quark Cloud Drive.
- Optimized: Hidden file sync and ignore file mechanism.
- Optimized: Auto-refresh preview images.

### 1.8.0 (20260202)
- Added: Playlist support.
- Added: "Convert Link" in file right-click menu.

### 1.8.1 (20260203)
- Fixed: Duplicate display of embedded cloud links in callouts.
- Fixed: Right-click menu trigger on mobile files.
- Fixed: 403 error when playing Aliyun Drive videos on iOS.
- Fixed: Button display in iOS music player.
- Optimized: Mobile cloud drive file browser UI.
- Optimized: Embedded cloud text files in reading mode.

### 1.8.2 (20260204)
- Fixed: Quark Cloud Drive `ha3 start exceed` error.
- Optimized: More file extension support.
- Optimized: Playlist loop playback.
- Added: Support embedding Quark Cloud Drive text files.

### 1.9.0 (20260206)
- Fixed: Embedded cloud resources not adapted to source mode.
- Fixed: Hover not showing for links in tables.
- Fixed: Wrong text prompt in subtitle selector.
- Fixed: Redundant empty folders during OneDrive sync.
- Optimized: PDF viewer close process.
- Optimized: Preview control via Cmd/Ctrl.
- Added: Quark Cloud Drive online PDF reading support.
- Added: Quark Cloud Drive video playback on PC.
- Added: Command: "Convert local links to cloud links".

### 1.9.1 (20260209)
- Optimized: Batch image preview.
- Optimized: Drag cloud files to local.

### 1.9.2 (20260213)
- Fixed: Memory issue with large file downloads on mobile.
- Fixed: Unicode encoding issues.
- Optimized: Redundant sync logs.
- Added: Vinyl music player.

</details>

<details>
<summary>View Beta History (v0.5.6 to v0.9.1)</summary>

### 0.9.1 (2025-07-08)

- Fixed: Settings warning and sync mode switch warning.

### 0.9.0 (2025-07-07)

- Feature: Cloud drive browser, supporting online PDF reading and one-click online video playback.

### 0.8.12 (2025-06-19)

- Feature: One-click vault diagnosis.
- Optimized: Sync status display in restricted mode.

### 0.8.11 (2025-06-11)

- Optimized: File icons and sync status icons in restricted mode.
- Feature: Video playback right-click menu.

### 0.8.10 (2025-06-04)

- Feature: Added plugin sync, theme sync, and hidden file sync in restricted mode.
- Optimized: Real-time performance of cloud drive sync.

### 0.8.9 (2025-06-03)

- Optimized: Settings interface.

### 0.8.8 (2025-05-30)

- Optimized: WebRTC data channel transmission.
- Optimized: Simplified settings interface.
- Feature: Show plugin versions in sync report.

### 0.8.7 (2025-05-26)

- Feature: Manual conflict merge and incremental auto-merge.
- Optimized: Delete versions in version history view.

### 0.8.6 (2025-05-19)

- Fixed: Cross-Origin Resource Sharing (CORS) issues.

### 0.8.5 (2025-05-19)

- Feature: Added file right-click menu in restricted mode.
- Feature: Support online video playback for Baidu Netdisk and Aliyun Drive.
- Fixed:
    - [IC8K1L](https://gitee.com/abcamus/obsidian-sync-vault-release/issues/IC8K1L)
    - OneDrive plugin sync logs.

### 0.8.4 (2025-05-12)

- Feature: Added navbar right-click menu in restricted mode.
- Feature: Show cloud storage capacity in auto-sync view.
- Changed: Partial UI adjustments.
- Fixed: [IC6W56](https://gitee.com/abcamus/obsidian-sync-vault-release/issues/IC6W56).

### 0.8.3 (2025-05-09)

- Changed: Optimized automatic cloud metadata sync.
- Changed: Optimized device direct-connect mode.

### 0.8.2 (2025-04-28)

- Feature: Sync progress display in restricted mode.
- Feature: Prompt and auto-retry on network errors.
- Feature: One-click refresh sync status in restricted mode.

### 0.8.1 (2025-04-25)

- Feature: Baidu Netdisk segmented download in restricted mode.
- Changed: Optimized sync progress display in restricted mode.
- Feature: Interruption mechanism in restricted mode.

### 0.8.0 (2025-04-24)

- Support device direct-connect sync.

### 0.7.5 (2025-03-30)

- Upgraded version history view, added version source info.
- Generate sync reports.
- 115 Cloud Drive closed beta.
- Auto conflict merge closed beta.
- Fixed plugin sync path.

### 0.7.4 (2025-03-22)

- Optimized: Logs.

### 0.7.3 (2025-03-21)

- Optimized: Sync algorithm.

### 0.7.2 (2025-03-20)

- Optimized: Flow control for improved stability.

### 0.7.1 (2025-03-18)

> Upgrade recommended

- Optimized: Cloud service interface.
- Fixed known issues.

### 0.7.0 (2025-03-17)

> Upgrade recommended

- Feature: Event-triggered sync for improved real-time performance.
- Feature: Metadata conflict detection and resolution, supporting delete, move, and update events.
- Optimized: Sync status UI, show last and next sync time.
- Optimized: Improved settings interface loading speed.
- Fixed:
    - Baidu Netdisk batch file download.
    - Auto-create remote vault on first auto-sync for new vault.
    - Aliyun Drive upload timestamp modification.

### 0.6.3 (2025-03-01)

> Aliyun Drive users recommended to upgrade.

- Optimized: Document loading performance.
- Optimized: Aliyun Drive upload flow.
- Fixed: Plugin folder not auto-created during plugin download.

### 0.6.2 (2025-02-22)

> Upgrade recommended.

- Fixed: File overwrite caused by conflicts in non-merge mode.
- Improved: Added plugin upload error prompt.

### 0.6.1 (2025-02-20)

> Upgrade recommended.

- Improved: Improved language support.
- Fixed: Fixed known issues.

### 0.6.0 (2025-02-13)

> Upgrade recommended. **Note: Users with encryption enabled must back up original files before upgrading, and re-encrypt & upload after upgrade.**

- Support upload and download of third-party plugins.
- Significantly improved Aliyun Drive download speed.
- More robust encryption and decryption scheme.

### 0.5.10 (2025-02-09)

> Mandatory upgrade for Aliyun Drive users; encryption users recommended to upgrade.

- Fixed: Aliyun Drive stability.
- Improved: Encryption and decryption logic.

### 0.5.9 (2025-02-02)

> Upgrade recommended.

- Feature: Support adaptive sync interval.
- Fixed: Baidu Netdisk timestamp error.

### 0.5.8 (2025-01-31)

> Upgrade recommended.

- Improved Aliyun Drive sync stability and performance.
- Support excluding file sync via regex.

### 0.5.7 (2025-01-29)

> Optional upgrade.

- Feature: Support file version history.
- Feature: Added shortcut (Ctrl+Shift+H) to open version history view.

### 0.5.6 (2025-01-26)

> Upgrade recommended.

- Fixed: Remote files not displayed in empty folders under restricted sync mode.

</details>