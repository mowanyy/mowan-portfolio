<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGitHub } from '../../composables/useGitHub'

const router = useRouter()
const { mergedProjects, loading, fetchRepos } = useGitHub()

onMounted(() => {
  fetchRepos()
})

const featured = computed(() => {
  // Show featured projects first, then top by stars
  const all = mergedProjects.value
  const featuredItems = all.filter((p) => p.featured)
  const nonFeatured = all
    .filter((p) => !p.featured)
    .sort((a, b) => b.stars - a.stars)
  // Show up to 6 items: featured + top non-featured
  return [...featuredItems, ...nonFeatured].slice(0, 6)
})

const categoryColors: Record<string, string> = {
  ai: 'bg-purple-500/20 text-purple-300',
  automation: 'bg-green-500/20 text-green-300',
  data: 'bg-blue-500/20 text-blue-300',
  web: 'bg-orange-500/20 text-orange-300',
  learning: 'bg-pink-500/20 text-pink-300',
}

const getCategoryLabel = (cat: string) => {
  const map: Record<string, string> = {
    ai: 'AI',
    automation: '自动化',
    data: '数据科学',
    web: 'Web',
    learning: '学习',
  }
  return map[cat] || cat
}

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="section-title">精选项目</h2>
        <p class="text-secondary">近期主要项目，点击查看详情</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-10 text-secondary">
        <span class="animate-spin inline-block">⚡</span> 加载中...
      </div>

      <!-- Projects -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in featured"
          :key="project.id"
          class="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openLink(project.url)"
        >
          <div class="flex items-start justify-between mb-4">
            <span class="text-3xl">{{ project.icon }}</span>
            <span
              class="text-xs px-2.5 py-1 rounded-full font-medium"
              :class="categoryColors[project.category] || 'bg-white/10 text-secondary'"
            >
              {{ getCategoryLabel(project.category) }}
            </span>
          </div>

          <h3 class="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
            {{ project.name }}
          </h3>

          <p class="text-secondary text-sm mb-4 line-clamp-2">
            {{ project.description }}
          </p>

          <div v-if="project.tags.length" class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-md bg-white/5 text-secondary"
            >
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center justify-between text-secondary text-xs">
            <span class="flex items-center gap-1">
              <span class="text-purple-400">●</span>
              {{ project.language }}
            </span>
            <span class="flex items-center gap-3">
              <span>⭐ {{ project.stars }}</span>
              <span>⑂ {{ project.forks }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <button
          class="px-6 py-3 rounded-xl glass text-primary hover:bg-white/10 transition-all duration-300 cursor-pointer"
          @click="router.push('/projects')"
        >
          查看全部项目 →
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>