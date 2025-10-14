---
title: 配置Obsidian主题
date: 2025-05-21 10:00:00
categories:
  - 入门指南
tags:
  - Obsidian
  - 入门
  - 主题配置
sticky: 0
---

# Obsidian 主题定制指南

Obsidian 作为一款强大的知识管理工具，其界面外观的个性化定制能让我们的笔记体验更加愉悦。本文将介绍 Obsidian 主题的各种玩法。

## 基础主题设置

### 1. 内置主题切换
- 明亮主题与深色主题的切换
- 调整强调色
- 修改字体大小和行距

### 2. 社区主题安装
1. 打开设置 > 外观 > 主题
2. 点击"浏览"进入社区主题市场
3. 选择喜欢的主题并安装
4. 推荐主题:
   - Minimal Theme: 简约优雅
   - Blue Topaz: 清新靓丽
   - Primary: 专业严谨

## 进阶主题定制

### CSS 代码片段
- 创建 `snippet.css` 文件或者任意名字的css文件
- 放入 `.obsidian/snippets` 目录
- 在设置中启用代码片段

### 常用样式修改

#### Molokai代码块主题
效果：![molokai主题代码块](/img/obsidian-code-block-molokai.png)

css代码：
```css
/* Molokai Theme for HyperMD Code Blocks in Obsidian */
/* 定义深色和浅色主题的变量 */
.theme-light {
    --code-block-background: #f5f5f5;  /* 浅灰色背景 */
    --code-block-foreground: #333333;  /* 深色文字 */
    --code-block-shadow: rgba(0, 0, 0, 0.1);
    --code-block-hover-background: #eaeaea;  /* 稍深的灰色用于悬停 */
    --code-block-comment: #998;  /* 注释颜色 */
    --code-block-keyword: #905;  /* 关键字颜色 */
    --code-block-string: #690;   /* 字符串颜色 */
    --code-block-number: #905;   /* 数字颜色 */
    --code-block-variable: #333; /* 变量颜色 */
    --code-block-operator: #9a6e3a; /* 操作符颜色 */
    --code-block-selection: #c2e0ff; /* 选中时背景颜色 */
}

.theme-dark {
    --code-block-background: #1E1F1C;
    --code-block-foreground: #F8F8F2;
    --code-block-shadow: rgba(0, 0, 0, 0.4);
    --code-block-hover-background: #2D2E23;
    --code-block-comment: #75715E;
    --code-block-keyword: #F92672;
    --code-block-string: #E6DB74;
    --code-block-number: #AE81FF;
    --code-block-variable: #F8F8F2;
    --code-block-operator: #F92672;
    --code-block-selection: #49483E;
}

/* 代码块容器 */
.markdown-preview-view pre,
.markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock {
    background-color: var(--code-block-background) !important;
}

/* 代码块选中样式 */
.markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock ::selection,
.markdown-preview-view pre[class*="language-"] code ::selection,
.HyperMD-codeblock-bg ::selection {
    background-color: var(--code-block-selection) !important;
    color: var(--code-block-foreground) !important;
}

/* 代码块内容 */
.markdown-preview-view code,
.markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock {
    color: var(--code-block-foreground) !important;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
}

/* 代码块行 */
.cm-line.HyperMD-codeblock {
    background-color: var(--code-block-background) !important;
}

/* 代码块围栏（```） */
.cm-formatting-code-block {
    color: var(--code-block-comment) !important;
}

/* 单个元素样式 */
.cm-def {
    color: var(--code-block-keyword) !important;
}

.cm-hmd-codeblock {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    color: var(--code-block-foreground) !important;
}

/* 代码块中的其他元素样式 */
.cm-hmd-codeblock.cm-keyword {
    color: var(--code-block-keyword) !important;
}

.cm-hmd-codeblock.cm-string {
    color: var(--code-block-string) !important;
}

.cm-hmd-codeblock.cm-number {
    color: var(--code-block-number) !important;
}

.cm-hmd-codeblock.cm-comment {
    color: var(--code-block-comment) !important;
}

.cm-hmd-codeblock.cm-variable {
    color: var(--code-block-foreground) !important;
}

.cm-hmd-codeblock.cm-operator {
    color: var(--code-block-operator) !important;
}

/* 代码块选中状态 */
.cm-hmd-codeblock::selection,
.HyperMD-codeblock ::selection {
    background-color: var(--code-block-background) !important;
}

/* 代码块hover效果 */
.cm-hmd-codeblock:hover,
.HyperMD-codeblock:hover {
    background-color: var(--code-block-hover-background) !important;
}

/* 确保代码块内的行都有正确的背景色 */
.HyperMD-codeblock-bg {
    background-color: var(--code-block-background) !important;
}

/* 代码块的行号（如果启用） */
.cm-gutters {
    background-color: var(--code-block-background) !important;
    color: var(--code-block-comment) !important;
    border-right: 1px solid var(--code-block-shadow) !important;
}

.markdown-source-view.mod-cm6 .cm-line.HyperMD-codeblock .cm-cursor {
    border-left: 2px solid var(--code-block-foreground) !important; /* 亮色光标 */
}

.cm-secondaryCursor {
    border-left-color: var(--code-block-number) !important;
}

/* 光标颜色 */
.cm-line.HyperMD-codeblock {
    caret-color: var(--code-block-foreground) !important;
}

/* Molokai Theme for Inline Code */

/* 编辑模式下的 inline code 样式 */
.markdown-source-view.mod-cm6 .cm-inline-code {
    background-color: var(--code-block-background) !important;
    color: var(--code-block-foreground) !important;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
    /* padding: 0.2em 0.4em; */
    /* border-radius: 3px; */
    font-size: 0.85em;
    caret-color: var(--code-block-foreground) !important;
}

/* 编辑模式下的 inline code 悬停效果 */
.markdown-source-view.mod-cm6 .cm-inline-code:hover {
    background-color: var(--code-block-hover-background) !important;
    transition: background-color 0.2s ease;
}

/* 确保 inline code 在行内正确对齐 */
:is(.markdown-preview-view, .markdown-rendered) code:not(pre code) {
    vertical-align: middle;
    line-height: normal;
}

/* 调整 inline code 在标题中的大小 */
:is(.markdown-preview-view, .markdown-rendered) h1 code:not(pre code),
:is(.markdown-preview-view, .markdown-rendered) h2 code:not(pre code),
:is(.markdown-preview-view, .markdown-rendered) h3 code:not(pre code),
:is(.markdown-preview-view, .markdown-rendered) h4 code:not(pre code),
:is(.markdown-preview-view, .markdown-rendered) h5 code:not(pre code),
:is(.markdown-preview-view, .markdown-rendered) h6 code:not(pre code) {
    font-size: 0.85em;
}
```

#### 三线表样式
效果：![三线表样式](/img/obsidian-table-three-line.png)

```css
/* default table */
.markdown-rendered tbody tr:nth-child(odd) {
    background-color: hsla(var(--interactive-accent-hsl), 0.1);
}

.theme-light {
    --table-background-color: rgba(248, 212, 212, 0.02);
    --table-thead-background-color: rgba(0, 0, 0, 0.1);
    --table-hover-color: rgba(0, 0, 0, 0.03);
    --table-hover-raw-color: rgba(0, 0, 0, 0.05);
    --table-hover-thead-color: var(--table-thead-background-color);
    --table-border-width: 0px;
    --table-shadow-color: rgba(0, 0, 0, 0.3);
    --table-border-color: black;
}

.theme-dark {
    --table-background-color: rgba(100, 100, 100, 0.3);
    --table-thead-background-color: rgba(0, 0, 0, 0.5);
    --table-hover-color: rgba(0, 0, 0, 0.5);
    --table-hover-raw-color: rgba(0, 0, 0, 0.1);
    --table-hover-thead-color: var(--table-thead-background-color);
    --table-border-width: 0px;
    --table-shadow-color: rgba(255, 255, 255, 0.3);
    --table-border-color: grey;
}

:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) th,
:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) thead tr>th:nth-child(2n+2) {
    background-color: var(--table-thead-background-color);
    font-family: var(--font-family-strong);
    font-size: 1em;
}

/*table hover*/
:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) td:hover,
:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) thead tr>th:hover {
    background-color: var(--table-hover-color);
}

/*table raw hover*/
:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) table tbody>tr:hover {
    background-color: var(--table-hover-raw-color);
}

:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) th:hover {
    background-color: var(--table-hover-thead-color);
}

:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) tbody tr:nth-child(odd):hover,
:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) tbody tr:hover {
    background: var(--table-hover-raw-color);
}

:is(.markdown-preview-view, .markdown-rendered, .markdown-source-view) tbody td:hover {
    background: var(--table-hover-color);
}


:is(.markdown-preview-view, .markdown-rendered) :is(th, td) {
    padding: 4px 10px;
    border: none;
    text-align: center;
    font-size: 1em;
}

.markdown-preview-view table,
.markdown-source-view.mod-cm6 table {
    border-collapse: collapse
}

table {
    --table-edge-cell-padding-first: 10px;
    --table-edge-cell-padding-last: 10px;
}

thead {
    border-top: 2.86px solid var(--table-border-color);
    border-bottom: 1.42px solid var(--table-border-color);
    text-align: left;
}

tbody {
    border-bottom: 2.86px solid black;
}

div:is(.markdown-preview-view, .markdown-rendered) :is(th, td) {
    border: var(--table-border-width) solid var(--table-border-color);
}

/* table ends */
```