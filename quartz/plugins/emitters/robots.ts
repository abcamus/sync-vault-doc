import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"

export const RobotsTxt: QuartzEmitterPlugin = () => {
  return {
    name: "RobotsTxt",
    getQuartzComponents() {
      return []
    },
    async emit(ctx, _content, _resources) {
      const cfg = ctx.cfg.configuration
      const path = joinSegments(ctx.argv.output, "robots.txt")
      const content = `User-agent: *
Allow: /
Sitemap: https://${cfg.baseUrl}/sitemap.xml`

      await fs.promises.mkdir(ctx.argv.output, { recursive: true })
      await fs.promises.writeFile(path, content)
      return [path] as FilePath[]
    },
  }
}
