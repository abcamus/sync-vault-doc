import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/language.scss"
import { resolveRelative } from "../util/path"
import { Languages } from "lucide-preact"

const Language: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
  const slug = fileData.slug
  if (!slug) {
    return <></>
  }
  const isZh = slug.startsWith("zh/") || slug === "zh"

    // Target language logic
    // If current is Chinese (zh/...), target is English (root/...)
    // If current is English (root/...), target is Chinese (zh/...)

    let targetSlug = ""
    if (isZh) {
        if (slug === "zh") {
            targetSlug = "index"
        } else {
            targetSlug = slug.replace(/^zh\//, "")
        }
    } else {
        if (slug === "index") {
            targetSlug = "zh"
        } else {
            targetSlug = `zh/${slug}`
        }
    }

    // Check if target page exists in allFiles
    const targetExists = allFiles.find(f => f.slug === targetSlug)

    // If target doesn't exist, fallback to language root
    const finalTarget = targetExists ? targetSlug : (isZh ? "index" : "zh")

    const href = resolveRelative(slug, finalTarget as any)

    return (
        <div class={`language-switcher ${displayClass ?? ""}`}>
            <a href={href} class={isZh ? "active-zh" : "active-en"} title={isZh ? "Switch to English" : "Switch to Chinese"}>
                <Languages class="language-icon" />
            </a>
        </div>
    )
}

Language.css = style

export default (() => Language) satisfies QuartzComponentConstructor