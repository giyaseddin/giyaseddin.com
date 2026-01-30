import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Giyas Bayrak",
  DESCRIPTION: "Welcome to Giyas's (غياث) website, a portfolio and a personal blog focused on building AI solutions.",  AUTHOR: "Giyaseddin Bayrak",
}

// Work Page
export const WORK: Page = {
  TITLE: "Resume",
  DESCRIPTION: "My professional Resume.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "A narrative of your professional journey and the problems you solve.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Resume",
    HREF: "/resume",
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "giyaseddin.bayrak@gmail.com",
    HREF: "mailto:giyaseddin.bayrak@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "giyaseddin",
    HREF: "https://github.com/giyaseddin"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "giyaseddin",
    HREF: "https://www.linkedin.com/in/giyaseddin/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "giyaseddinbyrk",
    HREF: "https://x.com/giyaseddinbyrk",
  },
]

