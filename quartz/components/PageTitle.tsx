import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const isZh = fileData.slug === "zh" || fileData.slug?.startsWith("zh/")
  const title = isZh ? "Sync Vault 文档" : (cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title)
  const baseDir = pathToRoot(fileData.slug!)
  const homeHref = isZh ? (baseDir === "./" ? "zh" : `${baseDir}/zh`) : baseDir
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={homeHref as any}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
