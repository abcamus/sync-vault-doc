---
title: ChangeLog
tags:
  - syncvault
  - changelog
date: 2025-10-03
created: 2025-01-01
---
### 1.0.0 (2025-10-22, oracle-shell)

- New cloud services added: Nutstore, Infinicloud, Tencent Cloud Object Storage (COS), KuaKe Cloud Drive.
- Performance optimization: File scanning speed of Alibaba Cloud Drive increased by approximately 20 times.
- Interface:
    - Compatible with Cupertino theme.
    - More help information provided.
    - Simplified authorization process.
- Others:
    - Automatic reloading of expired video playback URLs for Alibaba Cloud Drive.

### 0.9.1 (2025-07-08)

- Fix: Setting warning and sync mode switch warning.

### 0.9.0 (2025-07-07)

- New feature: Cloud drive browser, supporting online PDF reading and online video playback with a click.

### 0.8.12 (2025-06-19)

- New feature: One-click repository diagnosis.
- Optimization: Display of sync status in controlled mode.

### 0.8.11 (2025-06-11)

- Optimization: File icons and sync status icons in controlled mode.
- New feature: Right-click menu for video playback.

### 0.8.10 (2025-06-04)

- New feature: Added plugin sync, theme sync, and hidden file sync in controlled mode.
- Optimization: Real-time performance of cloud drive sync.

### 0.8.9 (2025-06-03)

- Optimization: Settings interface.

### 0.8.8 (2025-05-30)

- Optimization: WebRTC data channel transmission.
- Optimization: Simplified settings interface.
- New feature: Plugin version display in sync report.

### 0.8.7 (2025-05-26)

- New feature: Manual conflict merging and incremental automatic merging.
- Optimization: Revision history view supports revision deletion.

### 0.8.6 (2025-05-19)

- Fix: Cross-Origin Resource Sharing (CORS) issue.

### 0.8.5 (2025-05-19)

- New feature: Added right-click menu for files in controlled mode.
- New feature: Supported online video playback for Baidu Cloud Drive and Alibaba Cloud Drive.
- Fixes:
    - [IC8K1L](https://gitee.com/abcamus/obsidian-sync-vault-release/issues/IC8K1L)
    - Sync logs for OneDrive plugin.

### 0.8.4 (2025-05-12)

- New feature: Added right-click menu for navigation bar in controlled mode.
- New feature: Display of cloud drive storage capacity in sync view under automatic mode.
- Modification: Partial UI adjustments.
- Fix: [IC6W56](https://gitee.com/abcamus/obsidian-sync-vault-release/issues/IC6W56).

### 0.8.3 (2025-05-09)

- Modification: Optimized automatic sync of cloud drive metadata.
- Modification: Optimized device direct-connection mode.

### 0.8.2 (2025-04-28)

- New feature: Sync progress display in controlled mode.
- New feature: Added prompts and automatic retries when network errors occur.
- New feature: Supported one-click sync status refresh in controlled mode.

### 0.8.1 (2025-04-25)

- New feature: Supported segmented download for Baidu Cloud Drive in controlled mode.
- Modification: Optimized sync progress display in controlled mode.
- New feature: Interruption mechanism in controlled mode.

### 0.8.0 (2025-04-24)

- Supported device direct-connection sync.

### 0.7.5 (2025-03-30)

- Upgraded revision history view, adding revision source information.
- Generated sync reports.
- Internal testing for 115 Cloud Drive.
- Internal testing for automatic conflict merging.
- Fixed plugin sync path.

### 0.7.4 (2025-03-22)

- Optimization: Logs.

### 0.7.3 (2025-03-21)

- Optimization: Sync algorithm.

### 0.7.2 (2025-03-20)

- Optimization: Flow control to improve stability.

### 0.7.1 (2025-03-18)

> Upgrade recommended

- Optimization: Cloud drive service interface.
- Fixed known issues.

### 0.7.0 (2025-03-17)

> Upgrade recommended

- Features: Event-triggered sync to improve sync real-time performance.
- Features: Metadata conflict detection and resolution, supporting handling of deletion, movement, and update events.
- Optimization: Sync status interface, displaying last and next sync times.
- Optimization: Improved loading speed of settings interface.
- Fixes:
    - [Batch file download for Baidu Cloud Drive](https://gitee.com/abcamus/obsidian-sync-vault-release/issues/IBRJ5N).
    - Automatic creation of remote repository for first-time auto-sync of new repositories.
    - Timestamp modification issue for uploads to Alibaba Cloud Drive.

### 0.6.3 (2025-03-01)

> Upgrade recommended for Alibaba Cloud users.

- Optimization: Document loading performance.
- Optimization: Upload process for Alibaba Cloud Drive.
- Fix: Plugin folder not automatically created for plugin downloads.

### 0.6.2 (2025-02-22)

> Upgrade recommended.

- Fix: Content overwriting caused by file conflicts in non-merge mode.
- Enhancement: Added error prompts for plugin uploads.

### 0.6.1 (2025-02-20)

> Upgrade recommended.

- Enhancement: Improved language support.
- Fix: Fixed known issues.

### 0.6.0 (2025-02-13)

> Upgrade recommended. **Note: Users with encryption enabled must back up original files before upgrading and re-encrypt for upload after the upgrade is complete.**

- Supported upload and download of third-party plugins.
- Significantly improved download speed for Alibaba Cloud Drive.
- More robust encryption and decryption solution.

### 0.5.10 (2025-02-09)

> Mandatory upgrade for Alibaba Cloud Drive users; upgrade recommended for users with encryption enabled.

- Fix: Stability of Alibaba Cloud Drive.
- Enhancement: Encryption and decryption logic.

### 0.5.9 (2025-02-02)

> Upgrade recommended.

- Feature: Supported adaptive sync cycle.
- Fix: Timestamp error in Baidu Cloud Drive.

### 0.5.8 (2025-01-31)

> Upgrade recommended.

- Improved sync stability and performance for Alibaba Cloud Drive.
- Supported file sync exclusion via regular expressions.

### 0.5.7 (2025-01-29)

> Optional upgrade.

- Feature: Supported file revision history.
- Feature: Added shortcut key support (Ctrl+Shift+H) to open file revision view.

### 0.5.6 (2025-01-26)

> Upgrade recommended.

- Fix: Issue where remote files in empty folders were not displayed in controlled sync mode.
- Fix: Adjusted request intervals for file downloads from Alibaba Cloud Drive to reduce 403 errors.
- Feature: Added dynamic sync cycle adjustment mechanism in automatic mode.

### 0.5.5 (2025-01-24)

> Upgrade recommended.

- Fix: File decryption issue in automatic mode.
- Fix: Timestamp error causing upload failures for Alibaba Cloud Drive.

### 0.5.4 (2025-01-23)

> Optional upgrade.

- Optimized sync performance detector.
- Optimized API requests during file operations.

### 0.5.3 (2025-01-21)

> Upgrade recommended.

- New feature: Supported OneDrive sync.
- Optimized sync status view.
- Fixed known issues.

### 0.5.2 (2025-01-15)

> Optional upgrade.

- Reduced redundant "rename" API calls for cloud drives.
- Fixed issue where folder status display might be incorrect for multi-level folders in controlled mode.

### 0.5.1 (2025-01-14)

> Upgrade recommended.

- Added start/stop button in automatic sync view.
- Supported password hiding and display in settings interface.

### 0.5.0 (2025-01-13)

> Upgrade recommended.

- New sync mode: Automatic mode.
- Optimized activation process, eliminating the need to copy plugins between devices.
- Optimized controlled sync mode.

### 0.4.6 (2024-12-25)

> Optional upgrade.

- Added more error logs to log mode.
- New settings interface.

### 0.4.5 (2024-12-22)

> Optional upgrade.

- Added more error records to log mode.
- Optimized interface display.

### 0.4.4 (2024-12-09)

> Optional upgrade.

- Feature: Added log mode.

### 0.4.3 (2024-12-03)

> Upgrade recommended.

- Feature: Added one-click automatic upgrade.
- Fixes: Optimized settings interface display, added upgrade and help bars; fixed authorization timeout message prompts.

### 0.4.2 (2024-11-29)

> Optional upgrade.

- Multi-language support, currently supporting English, Simplified Chinese, and Traditional Chinese.

### 0.4.1 (2024-11-27)

> Upgrade recommended.

- Fixed file search failure issue in Baidu Cloud Drive.
- Clicking the "Check for Updates" button automatically checks for updates and prompts for download.

### 0.4.0 (2024-11-15)

> Upgrade recommended for Alibaba Cloud Drive users.

- Supported Alibaba Cloud Drive.
- Automatic refresh of application authorization.
- Improved automatic upload experience: Modified files are automatically uploaded in non-encryption mode (default mode), and an encryption indicator is displayed when encryption mode is enabled.
- Fix: Resolved issue where locally deleted files in version 0.3.4 were not synced to the cloud on some platforms.

### 0.3.4 (2024-11-02)

> Upgrade recommended for all users.

- Fixed decryption process issues.
- Expanded authorization process to support more cloud drives.

### 0.3.3 (2024-10-29)

> Upgrade recommended for all users.

- Fixed status display issues during folder upload and download.
- Fixed issue with syncing deleted files.
- Optimized mobile interface.

### 0.3.0 (2024-10-27)

- Optimized interface.
- Automatically uploaded modified synced files in encryption mode.

### 0.2.0 (2024-10-26)

- Optimized folder upload logic.
- Optimized loading process.
- Some bug fixes.

### 0.1.1 (2024-10-23)

- Fix: Recognition of new remote files in automatic download mode.

### 0.1.0 (2024-10-22)

- Supported Baidu Cloud Drive sync on Windows, macOS, and Linux.
- Supported Baidu Cloud Drive sync on iOS, iPadOS, and Android.
- Automatically detected file creation, deletion, modification, and movement.
- Renamed: From Cloud Disk Explorer to Sync Vault.
- Optimized UI display.