import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CollectionEntry } from "astro:content"
import type { CardEntry } from "@types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Narrow a collection entry to the fields the cards read. Call this before a
// list of entries crosses a client island boundary, because an entry also
// holds the rendered HTML of the whole document.
export function toCardEntry(
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
): CardEntry {
  const { title, summary, date, tags } = entry.data
  return {
    id: entry.id,
    collection: entry.collection,
    data: { title, summary, date, tags },
  }
}

// Turn a resume "MM/YYYY" string into a sortable number. "Current" sorts
// after every real month. Do not use `new Date("08/2021")` here: it returns an
// Invalid Date, which makes every comparison NaN and leaves the list unsorted.
export function parseWorkDate(value: string): number {
  if (value === "Current") return Number.POSITIVE_INFINITY
  const [month, year] = value.split("/")
  return Number(year) * 12 + Number(month)
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed()
  return `${readingTimeMinutes} min read`
}


export function truncateText(str: string, maxLength: number): string {
  const ellipsis = '…';

  if (str.length <= maxLength) return str;

  const trimmed = str.trimEnd();
  if (trimmed.length <= maxLength) return trimmed;

  const cutoff = maxLength - ellipsis.length;
  let sliced = str.slice(0, cutoff).trimEnd();

  return sliced + ellipsis;
}