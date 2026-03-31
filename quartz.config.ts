import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sync Vault Doc",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "clarity",
      projectId: "t0rg7gvytf"
    },
    locale: "en-US",
    baseUrl: "sync-vault.com/docs",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fffefb",      // --bg-100
          lightgray: "#f5f4f1",  // --bg-200
          gray: "#cccbc8",       // --bg-300
          darkgray: "#313d44",   // --text-200
          dark: "#1d1c1c",       // --text-100
          secondary: "rgb(138, 92, 245)",   // --accent-200
          tertiary: "rgb(138, 92, 245)",   // --accent-100
          // highlight: "#d4eaf7",   // --primary-100
          highlight: "transparent",
          textHighlight: "#b6ccd8", // --primary-200
        },
        darkMode: {
          light: "#161618",
          lightgray: "#222226",
          gray: "#383840",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "rgb(166, 138, 249)",   // 保持与浅色主题相同的强调色
          tertiary: "rgb(166, 138, 249)",    // 保持与浅色主题相同的强调色
          highlight: "transparent",    // --primary-300
          textHighlight: "#38a0d7ff", // --primary-200
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.RobotsTxt(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (f1, f2) => {
          const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
          const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
          return f1Title.localeCompare(f2Title)
        }
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
