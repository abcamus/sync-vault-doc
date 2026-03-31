---
title: 夸克网盘
tags:
  - syncvault
  - 夸克网盘
  - Obsidian
---
## 获取 Cookie

前往 [夸克网盘官网](https://pan.quark.cn/) 并登录。打开浏览器的开发者工具（F12），切换到 **Network** (网络) 标签页。刷新页面，在下方的网络请求中找到任意一个请求，查看其 Headers 中的 **Cookie** 字段，如下图所示。

![[quark cookie.webp]]

## 授权

![[auth-button.webp]]

在上述授权页面中，选择 **Quark** (夸克)，然后点击 **Authorize** (授权)，并在弹出的窗口中粘贴刚才获取的 Cookie。

![[set cookie.webp]]