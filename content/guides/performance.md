---
title: Synchronization Performance
tags:
  - performance
  - syncvault
date: 2025-09-02
---
The synchronization experience depends on external factors, including:

1. Network stability affects synchronization stability.
2. Network bandwidth affects synchronization speed.
3. Network topology affects peer-to-peer connection capability.
4. Cloud storage account tier affects download speed.

Given limited external conditions, what level of synchronization performance can Sync Vault deliver? It is primarily measured by the following metrics:

1. **API Latency**: The time required for Sync Vault to call a cloud service API and complete the request.
2. **Upload Speed**: The size of files uploaded to the cloud service per second, measured in bytes.
3. **Download Speed**: The size of files downloaded from the cloud service per second, measured in bytes.
4. **Multi-Device Concurrency**: The number of devices simultaneously online and participating in synchronization. Most cloud service providers limit API request frequency, so more concurrent online devices increase the likelihood of triggering these limits.

> [!note] Cloud Service Provider Restrictions:
> 
> 1. **Traffic Limits**: Include download speed limits (e.g., Baidu Netdisk, Alibaba Cloud Disk) and total traffic limits (e.g., Nutstore, certain cloud service plans).
> 2. **Request Frequency Limits**: Restrictions on the number of requests allowed within a specific time window.

## Performance Metrics

Below are typical values from a single test scenario. You can also test performance metrics in your current environment using the method outlined in [[faq# 测试同步速度 | Testing Synchronization Speed]].

### Cloud Disk Synchronization

> [!note] Test Scenario:
> 
> - Number of files in the vault: 500
> - Network bandwidth: 100M

| Cloud Disk         | API Latency | Upload Speed | Download Speed                  | Multi-Device Concurrency                   |
| ------------------ | ----------- | ------------ | ------------------------------- | ------------------------------------------ |
| Baidu Netdisk      | ~300ms      | ~2MB/s–3MB/s | ~80KB/s (non-vip), ~2MB/s (vip) | Speed decreases when 3+ devices are online |
| Alibaba Cloud Disk | ~5s         | ~2MB/s–3MB/s | Similar to Baidu Netdisk        | Same as above                              |
| OneDrive           | ~2s         | ~2MB/s       | ~2MB/s                          | Similar to Baidu Netdisk                   |

### Real-Time Synchronization

Real-time synchronization relies on direct device-to-device connections. If direct connection fails, data is relayed via a [[cloud-services/turn-server|TURN server]]. Therefore, **the worst-case performance occurs during TURN server relay, where capabilities are limited by the relay server**.

#### Direct Connection

|Latency|Bidirectional Sync Speed|Multi-Device Concurrency|
|---|---|---|
|A few milliseconds|Ultra-fast|Unlimited|

#### Relay Connection

Performance depends on the relay server’s capabilities. The table below uses an Alibaba Cloud server with 3M bandwidth as an example:

|Latency|Bidirectional Sync Speed|Multi-Device Concurrency|
|---|---|---|
|Millisecond level|Calculated based on bandwidth|Typically dozens of devices|

## Choice: Cloud Disk Sync or Real-Time Sync?

Selecting the right synchronization method for your scenario will improve the experience. Below are recommendations for optimal synchronization methods:

- **Cloud Disk Sync**
    
    - For personal use with **2 or fewer devices** online simultaneously.
- **Real-Time Sync**
    
    - For 3+ devices online at the same time.
    - For multi-user collaboration within a company or the same local area network (LAN).