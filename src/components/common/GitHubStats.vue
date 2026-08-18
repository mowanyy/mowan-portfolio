<script setup lang="ts">
import { onMounted } from 'vue'
import { useGitHub } from '../../composables/useGitHub'

const { repos, loading, error, fetchRepos } = useGitHub()

onMounted(() => {
  fetchRepos()
})

const totalStars = () => repos.value.reduce((sum, r) => sum + r.stargazers_count, 0)
const totalForks = () => repos.value.reduce((sum, r) => sum + r.forks_count, 0)
const languages = () => {
  const langs = new Set(repos.value.map((r) => r.language).filter(Boolean))
  return [...langs].join(' · ')
}
</script>

<template>
  <div class="glass rounded-2xl p-6">
    <h3 class="text-lg font-semibold mb-4 text-secondary">GitHub 统计</h3>

    <div v-if="loading" class="text-secondary text-sm">加载中...</div>
    <div v-else-if="error" class="text-red-400 text-sm">{{ error }}</div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center">
        <div class="text-2xl font-bold gradient-text">{{ repos.length }}</div>
        <div class="text-xs text-secondary mt-1">仓库数</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold gradient-text">{{ totalStars() }}</div>
        <div class="text-xs text-secondary mt-1">Stars</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold gradient-text">{{ totalForks() }}</div>
        <div class="text-xs text-secondary mt-1">Forks</div>
      </div>
      <div class="text-center">
        <div class="text-sm font-bold gradient-text truncate">{{ languages() }}</div>
        <div class="text-xs text-secondary mt-1">语言</div>
      </div>
    </div>
  </div>
</template>