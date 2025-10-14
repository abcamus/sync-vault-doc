---
title: DataView
author: Infi
date: 2025-05-26 15:46:00
categories:
  - 插件教程
tags:
  - Obsidian
  - 插件
  - DataView
---

## 关于DataView
DataView 是一个强大的插件，它允许你使用 SQL 语法查询和分析你的笔记。它可以帮助你：
- 任务与项目管理
- 个人知识管理（PKM）
- 财务与健康跟踪
- ......

项目地址：[dataview github](https://github.com/blacksmithgu/obsidian-dataview)

## 基础知识
DataView包含两大逻辑模块：Indexer和Query Engine。
- Indexer负责索引你的笔记，将笔记的元数据和内容存储到数据库中。
- Query Engine负责执行查询，从数据库中获取数据。
DataView的查询语法基于 SQL，你可以使用 SQL 的语法来查询数据。

制作索引：frontmatter中的数据或者笔记中的`key::value`数据。
查询方式：DQL（DataView Query Language）或者DJS（DataView JavaScript）。

更多知识可以参考：[dataview参考手册](https://blacksmithgu.github.io/obsidian-dataview)

## 使用DataView Query（以0.5.63为例）
DQL模式：
```dataview
<QUERY-TYPE> <fields>
FROM <source>
<DATA-COMMAND> <expression>
<DATA-COMMAND> <expression>
          ...
```
其中QUERY-TYPE是必须的，可以是LIST, TABLE, TASK 和 CALENDAR。
其他都是非必须的。

FROM：后面跟标签、目录、文件或者链接。必须放在DATA-COMMAND前面，而且最多只能使用一次。
DATA-COMMAND可以无限添加。下面介绍一些具体案例。

## 使用DataView JS

dataview中执行JS代码，拥有和插件代码一样的权限。

### 案例一：生成卡片样式的图册

效果：

![image card](/img/dataview-image-card.png)

```js
async function getRefCounts() {
    const allLinks = [];
    for (const page of dv.pages().file) {
        const content = await dv.io.load(page.path);
        const links = content.match(/!\[\[(.*?)(?:\|.*?)?\]\]/g) || [];
        allLinks.push(...links.map(link => link.replace(/!\[\[(.*?)(?:\|.*?)?\]\]/, "$1")));
    }
    const refCounts = {};
    allLinks.forEach(link => {
        const normalizedLink = link.startsWith("/") ? link.slice(1) : link;
        refCounts[normalizedLink] = (refCounts[normalizedLink] || 0) + 1;
    });

    return refCounts;
}

async function imageCardView() {
    const imageFiles = app.vault.getFiles()
        .filter(f => [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"]
            .some(ext => f.path.toLowerCase().endsWith(ext)));

    const refCounts = await getRefCounts();
    let html = `<div style="display: flex; flex-wrap: wrap; gap: 16px;">`;
    imageFiles.sort((a, b) => {
        const aCount = refCounts[a.name] || 0;
        const bCount = refCounts[b.name] || 0;
        return bCount - aCount;
    });
    for (const file of imageFiles) {
        const imgSrc = app.vault.adapter.getResourcePath(file.path);
        const fileName = file.name;
        const fileSize = (file.stat.size / 1024).toFixed(1) + ' KB';
        const mtime = new Date(file.stat.mtime).toLocaleDateString();
        let count = 0;
        Object.keys(refCounts).forEach(link => {
            if (link === fileName) {
                count += refCounts[link];
            }
        });

        html += `
        <div onclick="app.workspace.openLinkText('${file.path}', '', false)" style="cursor:pointer;width:180px;">
         <a href="${imgSrc}" target="_blank" style="text-decoration: none; color: inherit;">
            <div style="width: 180px; border: 1px solid #eee; border-radius: 8px; box-shadow: 2px 2px 8px #eee; padding: 8px; text-align: center; background: var(--background-primary);">
                <img src="${imgSrc}" alt="${fileName}" style="max-width: 160px; max-height: 120px; border-radius: 4px; margin-bottom: 8px;" />
                <div style="font-size: 13px; margin-bottom: 4px;">${fileName}</div>
                <div style="font-size: 12px; color: #888;">${fileSize}</div>
                <div style="font-size: 12px; color: #aaa;">${mtime}</div>
                <div style="font-size: 12px; color: #d2691e; margin-top: 4px;">引用次数：${count}</div>
            </div>
        </a>
        </div>`;
    }
    html += `</div>`;
    dv.container.innerHTML = html;
}
// 调用 imageCardView()
imageCardView();
```

### 案例二：获取插件列表

效果：
![show plugins](/img/dataview-list-plugin.png)

```js
const plugins = Object.keys(app.plugins.manifests)
    .map(id => {
        const m = app.plugins.manifests[id];
        return [
            m.name,
            m.version,
            m.author,
            m.description,
            app.plugins.enabledPlugins.has(id)
        ];
    });

dv.table(["Name", "Version", "Author", "Description", "Loaded"], plugins);
```
