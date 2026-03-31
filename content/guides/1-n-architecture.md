---
title: 1+N Architecture Guide
description: An in-depth look at Sync Vault's unique 1+N distributed synchronization architecture, combining cloud persistence with real-time P2P collaboration.
date: 2026-03-25
tags:
  - Architecture
  - Sync
  - VFS
  - P2P
---

# Sync Vault 1+N Architecture Explained

In the world of Personal Knowledge Management (PKM), synchronization has always been a struggle with the "Impossible Trinity": **Speed, Storage Space, and Security**. Sync Vault breaks this deadlock through its innovative **1+N Architecture**.

---

## What is 1+N Architecture?

The 1+N architecture is a **hybrid distributed sync model** that deeply integrates traditional "centralized cloud storage" with modern "peer-to-point (P2P) collaboration."

- **"1": Cloud Center (Source of Truth)**
  - Your data "home base."
  - Supports Aliyun Drive, Baidu Netdisk, OneDrive, and other major cloud storage providers.
  - **Responsibility**: Full data persistence, version history, and final data alignment across devices.
- **"N": Live Peers (Your Devices)**
  - All your terminal devices (PC, Phone, Tablet).
  - **Responsibility**: Forming a dynamic network via P2P protocols (WebRTC) for second-level real-time awareness and collaboration.

> [!abstract] Core Philosophy
> **The Cloud (1) handles persistence and disaster recovery, while Devices (N) provide the ultimate collaborative experience.**

---

## Core Technical Pillars

### 1. VFS Virtualization: Cloud as Local Disk
To solve the storage bottleneck on mobile devices, Sync Vault introduces the **Virtual File System (VFS)** concept.

- **Stub Technology**: During sync, devices can generate only `.osvc` stub files. These files take up only a few KB but contain full file metadata.
- **On-Demand Hydration**: Files are only "hydrated" (downloaded) from the cloud or P2P nodes when you click to view or edit them.
- **Media Streaming**: For video and audio, VFS supports direct online streaming. Enjoy a 4K original quality experience within Obsidian without downloading the entire file.
- **Advantage**: Even with a 1TB vault, you get instant indexing on your phone with zero disk usage.

### 2. P2P Real-time Collaboration: Google Docs in Obsidian
Under the 1+N architecture, when two devices are online simultaneously, Sync Vault automatically establishes an encrypted direct connection.

- **Live Awareness**: Supports real-time cursor rendering. You can clearly see the editing trails of other devices or collaborators.
- **Conflict Self-Healing**: Using CRDT (Conflict-free Replicated Data Types) algorithms, multi-device edits merge automatically like liquid. The era of "conflict copy" files is over.
- **Zero Server Overhead**: Collaborative data flows only between devices, bypassing cloud servers for ultimate privacy and low latency.

### 3. End-to-End Encryption (E2EE)
Privacy is the baseline of Sync Vault.

- **Cloud Encryption**: Data is encrypted with AES-256 before leaving your device. Cloud providers cannot peek at your content.
- **Transport Encryption**: P2P links are encrypted via DTLS, ensuring data never passes through unencrypted relay servers.

---

## Why Choose 1+N?

| Feature | Traditional Sync (iCloud/WebDAV) | Sync Vault 1+N |
| :--- | :--- | :--- |
| **Sync Speed** | Limited by network & server response | **Instant P2P Awareness** |
| **Storage Usage** | Requires full download | **VFS On-Demand (Zero Space)** |
| **Collaboration** | Prone to conflict files | **Real-time Sync & Auto-merge** |
| **Data Sovereignty** | Tied to specific providers | **Cloud Freedom + E2EE** |

---

## Ready for the AI Era

The 1+N architecture natively integrates the **MCP Server (Model Context Protocol)**.

> [!tip] AI Fuel
> Traditional AI assistants must wait for files to sync locally before reading them. With 1+N, AI Agents can access full data directly via the MCP interface to the Cloud (1). This ensures your AI always has the most complete view of your knowledge base.

---

## How to Start the 1+N Experience?

1. **Configure "1"**: Bind your primary cloud drive in the plugin settings.
2. **Connect "N"**: Install the plugin on multiple devices, log in with the same config, and enable "Live Sync."
3. **Activate VFS**: Enable "Virtual File System" on mobile devices to enjoy the freedom of infinite space.

---
*Written by the Sync Vault Core Team to help users understand the technical logic behind the product.*
