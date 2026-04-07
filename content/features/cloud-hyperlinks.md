---
title: Cloud Hyperlinks & Streaming
tags:
  - features
  - cloud-storage
  - streaming
description: Direct link to cloud files without local storage, supporting 4K video streaming and instant PDF preview.
---

# Cloud Hyperlinks: The Bridge to Infinite Storage

The **Cloud Hyperlink** feature in Sync Vault transforms your Obsidian from a local note-taking app into a powerful "Cloud Knowledge Engine." It allows you to reference massive cloud files directly within your notes without downloading them.

## Why Cloud Hyperlinks?

- **Zero Local Footprint**: Reference a 50GB 4K video or a 10,000-page PDF library. It takes **100+ bytes** on your hard drive.
- **Native Streaming**: Watch 4K videos or listen to lossless audio directly inside Obsidian.
- **Deep Integration**: Just like a local `![[image.jpg]]`, you can use `![[cloud-video.mp4]]`.

## How It Works

Sync Vault uses **VFS (Virtual File System) Stubbing** technology. When you "link" a cloud file:
1. A small stub file (metadata) is created in your vault.
2. When you open the file, Sync Vault "streams" the data directly from Aliyun, Baidu, or Quark.
3. The file remains on the cloud, only the parts you are viewing are cached in memory.

## Use Cases

### 1. 4K Media Library
Keep your movie collection or tutorial videos on your Aliyun Drive. Link them to your study notes and watch them anytime, anywhere.

### 2. Research Archive
Store massive PDF datasets on Aliyun, Baidu, or Quark. Use Obsidian's PDF++ to annotate them without filling up your MacBook's SSD.

### 3. AI Knowledge Base
Combined with our **MCP (Model Context Protocol)** support, AI can "read" these cloud hyperlinks directly to summarize cloud-stored documents for you.

---
*Unlock the full potential of your cloud storage with Sync Vault Pro.*