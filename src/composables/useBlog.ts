import { marked } from 'marked'
import { computed } from 'vue'

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  category: string
  content: string
  html: string
}

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
})

// Use Vite's import.meta.glob to load all .md files at build time
const modules = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontMatter(raw: string): { data: Record<string, any>; content: string } {
  // Simple front-matter parser (no need for gray-matter dependency issues)
  const lines = raw.split('\n')
  if (lines[0]?.trim() !== '---') {
    return { data: {}, content: raw }
  }

  const endIndex = lines.findIndex((line, i) => i > 0 && line.trim() === '---')
  if (endIndex === -1) {
    return { data: {}, content: raw }
  }

  const frontMatterLines = lines.slice(1, endIndex)
  const content = lines.slice(endIndex + 1).join('\n').trim()

  const data: Record<string, any> = {}
  for (const line of frontMatterLines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value: any = line.slice(colonIndex + 1).trim()

      // Parse arrays [item1, item2]
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/['"]/g, ''))
      }
      // Parse strings
      else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }
      // Parse numbers
      else if (!isNaN(Number(value))) {
        value = Number(value)
      }

      data[key] = value
    }
  }

  return { data, content }
}

export function useBlog() {
  const posts = computed<BlogPost[]>(() => {
    const result: BlogPost[] = []

    for (const [path, raw] of Object.entries(modules)) {
      const slug = path.split('/').pop()?.replace('.md', '') || ''
      const { data, content } = parseFrontMatter(raw as string)

      result.push({
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || 'general',
        content,
        html: marked.parse(content) as string,
      })
    }

    // Sort by date descending
    result.sort((a, b) => {
      if (!a.date || !b.date) return 0
      return b.date.localeCompare(a.date)
    })

    return result
  })

  const getPost = (slug: string): BlogPost | undefined => {
    return posts.value.find((p) => p.slug === slug)
  }

  const allTags = computed<string[]>(() => {
    const tagSet = new Set<string>()
    for (const post of posts.value) {
      for (const tag of post.tags) {
        tagSet.add(tag)
      }
    }
    return [...tagSet].sort()
  })

  return { posts, getPost, allTags }
}