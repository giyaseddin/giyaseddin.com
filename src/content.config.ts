import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const MARKDOWN = "**/[^_]*.md"

// Resume dates are "MM/YYYY", and dateEnd can also be "Current". They are
// displayed verbatim, so they stay strings. `new Date("08/2021")` is an
// Invalid Date, which is why sorting needs parseWorkDate in @lib/utils.
const WORK_DATE = /^(0[1-9]|1[0-2])\/\d{4}$/

const resume = defineCollection({
  loader: glob({ pattern: MARKDOWN, base: "./src/content/resume" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.string().regex(WORK_DATE, "expected MM/YYYY"),
    dateEnd: z.union([z.string().regex(WORK_DATE, "expected MM/YYYY"), z.literal("Current")]),
  }),
})

const blog = defineCollection({
  loader: glob({ pattern: MARKDOWN, base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: MARKDOWN, base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const legal = defineCollection({
  loader: glob({ pattern: MARKDOWN, base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { resume, blog, projects, legal }
