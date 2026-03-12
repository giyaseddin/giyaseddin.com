import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Giyas Bayrak",
  DESCRIPTION: "Personal website of Giyaseddin Bayrak (غياث): Senior AI Researcher specializing in NLP, Large Language Models, and Deep Learning for specialized domains.",
  AUTHOR: "Giyaseddin Bayrak",
  KEYWORDS: "Giyaseddin Bayrak, Giyas Bayrak, Ghyath Alfarkh, AI Engineer, NLP Researcher, Medical NLP, Machine Learning, Transformers, Enterprise Chatbots, Arabic NLP, Turkish Law NLP, Deep Learning, R&D",
  GTM_ID: "GTM-W7QWT3RM",
}

// Work Page
export const WORK: Page = {
  TITLE: "Resume",
  DESCRIPTION: "My professional Resume.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Thoughts on AI engineering, NLP research, LLM systems, and lessons learned building production-grade machine learning products.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "A selection of research and engineering projects spanning NLP, LLMs, agentic AI systems, and applied machine learning.",
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

