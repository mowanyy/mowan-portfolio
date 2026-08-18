import { ref, computed } from 'vue'
import { projects as manualProjects, type Project } from '../data/projects'

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  fork: boolean
}

export interface MergedProject {
  id: string
  name: string
  description: string
  longDescription: string
  url: string
  stars: number
  forks: number
  language: string
  category: string
  tags: string[]
  featured: boolean
  icon: string
  status: 'active' | 'archived' | 'learning'
  updatedAt: string
  // Whether this is backed by a manual entry
  hasManualData: boolean
}

// Map languages to categories
function languageToCategory(language: string | null): string {
  const lang = (language || '').toLowerCase()
  if (['python', 'jupyter notebook'].includes(lang)) return 'data'
  if (['vue', 'javascript', 'typescript', 'css', 'html'].includes(lang)) return 'web'
  if (lang === '') return 'learning'
  return 'automation'
}

// Default icons by category
const categoryIcons: Record<string, string> = {
  ai: '🤖',
  automation: '⚙️',
  data: '📊',
  web: '🌐',
  learning: '📚',
}

// Merge an API repo with manual data
function mergeRepo(repo: GitHubRepo, manual: Project | undefined): MergedProject {
  const name = repo.name

  if (manual) {
    return {
      id: manual.id,
      name: manual.name,
      description: manual.description,
      longDescription: manual.longDescription,
      url: manual.url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language || manual.language,
      category: manual.category,
      tags: manual.tags,
      featured: manual.featured,
      icon: manual.icon,
      status: manual.status,
      updatedAt: repo.updated_at,
      hasManualData: true,
    }
  }

  // Auto-generate from API data
  const category = languageToCategory(repo.language)
  return {
    id: name,
    name: name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    description: repo.description || '暂无描述',
    longDescription: repo.description || '',
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || 'Unknown',
    category,
    tags: repo.topics || [],
    featured: false,
    icon: categoryIcons[category] || '📦',
    status: 'active',
    updatedAt: repo.updated_at,
    hasManualData: false,
  }
}

export function useGitHub() {
  const repos = ref<GitHubRepo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchRepos = async (username: string = 'mowanyy') => {
    loading.value = true
    error.value = null
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=30&sort=updated&direction=desc`
      )
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
      repos.value = await res.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch repos'
      repos.value = []
    } finally {
      loading.value = false
    }
  }

  // Merged projects: API repos + manual data enrichment
  const mergedProjects = computed<MergedProject[]>(() => {
    // Build a lookup map from manual projects by repo name
    const manualMap = new Map<string, Project>()
    for (const p of manualProjects) {
      // Extract repo name from URL or use id
      const repoName = p.url.split('/').pop() || p.id
      manualMap.set(repoName, p)
      // Also index by id for matching
      manualMap.set(p.id, p)
    }

    // Merge all API repos with manual data
    const merged: MergedProject[] = []
    const seen = new Set<string>()

    for (const repo of repos.value) {
      // Skip forks
      if (repo.fork) continue

      const manual = manualMap.get(repo.name)
      merged.push(mergeRepo(repo, manual))
      seen.add(repo.name)
    }

    // Add manual projects that don't have a matching API repo (e.g. learning projects)
    for (const p of manualProjects) {
      const repoName = p.url.split('/').pop() || p.id
      if (!seen.has(repoName)) {
        merged.push({
          id: p.id,
          name: p.name,
          description: p.description,
          longDescription: p.longDescription,
          url: p.url,
          stars: p.stars,
          forks: p.forks,
          language: p.language,
          category: p.category,
          tags: p.tags,
          featured: p.featured,
          icon: p.icon,
          status: p.status,
          updatedAt: new Date().toISOString(),
          hasManualData: true,
        })
      }
    }

    // Sort: featured first, then by stars, then by update time
    merged.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1
      if (b.stars !== a.stars) return b.stars - a.stars
      return b.updatedAt.localeCompare(a.updatedAt)
    })

    return merged
  })

  return { repos, loading, error, fetchRepos, mergedProjects }
}