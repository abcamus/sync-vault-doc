import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'abcamus/sync-vault-doc',
        // from data-repo-id
        repoId: 'R_kgDOQCGoDg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOQCGoDs4Cwn9c',
        // from data-lang
        lang: 'zh-CN',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/abcamus/obsidian-sync-vault-ce",
      "QQ": "https://qm.qq.com/cgi-bin/qm/qr?k=1023835978",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      mapFn: (node) => {
        // node.displayName = node.displayName.toUpperCase()
        // node.displayName = node.data?.title ?? 'unknown title';
        // if (node.isFolder) {
        //   node.displayName = "📁 " + node.displayName
        // } else {
        //   node.displayName = "📄 " + node.displayName
        // }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
