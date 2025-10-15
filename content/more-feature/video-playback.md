---
title: 视频播放
tags:
  - Obsidian同步
  - 视频回放
---
Sync Vault支持播放云盘视频。当用户仓库中有较多视频时，可以通过[[ignore-files|忽略文件]]防止视频文件同步。

在需要播放视频的页面插入markdown代码块，即可播放云盘视频。省下了视频的下载时间和存储空间。

> 截至0.8.9版本，支持百度网盘和阿里云盘播放视频流。默认按照当前可发播放的最高规格码流播放。

在markdown中插入如下代码块: 假设视频地址为`/视频/demo.mp4`，其中的代码块内容为`路径 | 视频名`（视频名可以省略，省略后默认为未知名字）。
````markdown
```cloudvideo
/视频/demo.mp4 | demo（可选，表示视频名字） | 00:12:34（可选，表示当前播放进度） | paused(可选，表示当前暂停播放)
```
````

**The Matrix Revolutions**

<img src="/img/sync-vault-video-playback.png" alt="播放云盘视频" width="75%">