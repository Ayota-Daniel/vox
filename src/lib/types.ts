export type FilterItem = {
  id: string
  label: string
}

export type ArticleMeta = {
  title: string
  description: string
  image: string
  href: string
  category?: string
  date?: string
  readingTime?: string
  author?: {
    name: string
    avatar?: string
  }
  tags?: string[]
}
