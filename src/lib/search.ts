import type { IFuseOptions } from "fuse.js"

export const FUSE_OPTIONS: IFuseOptions<unknown> = {
  keys: ["slug", "data.title", "data.summary", "data.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.4,
}
