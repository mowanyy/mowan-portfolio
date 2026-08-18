<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useGitHub } from '../composables/useGitHub'
import { categories, type CategoryId } from '../data/projects'

const { mergedProjects, loading, error, fetchRepos } = useGitHub()
const activeCategory = ref<CategoryId>('all')

onMounted(() => {
  fetchRepos()
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return mergedProjects.value
  return mergedProjects.value.filter((p) => p.category === activeCategory.value)
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
  <div class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-title">项目</h1>
        <p class="text-secondary">我的开源项目与学习实践</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-20">
        <div class="text-4xl mb-4 animate-spin inline-block">⚡</div>
        <p class="text-secondary">正在从 GitHub 加载项目...</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-4xl mb-4">⚠️</p>
        <p class="text-red-400 mb-2">加载失败</p>
        <p class="text-secondary text-sm">{{ error }}</p>
        <button
          class="mt-4 px-6 py-2 rounded-xl glass text-primary hover:bg-white/10 transition-colors cursor-pointer"
          @click="fetchRepos()"
        >
          重新加载
        </button>
      </div>

      <!-- Content -->
      <template v-else>
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
            :class="activeCategory === cat.id
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              : 'glass text-secondary hover:text-white hover:bg-white/10'"
            @click="activeCategory = cat.id"
          >
            {{ cat.icon }} {{ cat.label }}
          </button>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            @click="openLink(project.url)"
          >
            <div class="flex items-start justify-between mb-4">
              <span class="text-3xl">{{ project.icon }}</span>
              <span class="flex gap-2">
                <span
                  v-if="project.status === 'active'"
                  class="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300"
                >
                  活跃
                </span>
                <span
                  class="text-xs px-2.5 py-1 rounded-full font-medium"
                  :class="categoryColors[project.category] || 'bg-white/10 text-secondary'"
                >
                  {{ getCategoryLabel(project.category) }}
                </span>
              </span>
            </div>

            <h3 class="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
              {{ project.name }}
            </h3>

            <p class="text-secondary text-sm mb-4 line-clamp-3">
              {{ project.longDescription || project.description }}
            </p>

            <div v-if="project.tags.length" class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags.slice(0, 4)"
                :key="tag"
                class="text-xs px-2 py-0.5 rounded-md bg-white/5 text-secondary"
              >
                {{ tag }}
              </span>
              <span
                v-if="project.tags.length > 4"
                class="text-xs px-2 py-0.5 rounded-md bg-white/5 text-secondary"
              >
                +{{ project.tags.length - 4 }}
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

        <!-- Empty state -->
        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-20 text-secondary"
        >
          <p class="text-4xl mb-4">📭</p>
          <p>该分类下暂无项目</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>