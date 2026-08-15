export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
  KEYWORDS: string
  GTM_ID: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

// The minimal entry shape that ArrowCard, Search and SearchCollection read.
// Collection entries carry the rendered HTML of the whole document, so the
// pages project entries to this type before they cross a client island
// boundary. Anything wider gets serialized into the page payload.
export type CardEntry = {
  id: string
  collection: "blog" | "projects"
  data: {
    title: string
    summary: string
    date: Date
    tags: string[]
  }
}