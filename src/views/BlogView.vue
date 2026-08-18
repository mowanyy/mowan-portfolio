<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBlog } from '../composables/useBlog'

const router = useRouter()
const { posts, allTags } = useBlog()

const activeTag = ref<string>('全部')

const filteredPosts = computed(() => {
  if (activeTag.value === '全部') return posts.value
  return posts.value.filter((p) => p.tags.includes(activeTag.value))
})
</script>

<template>
  <div class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-title">博客</h1>
        <p class="text-secondary">记录学习笔记与项目复盘</p>
      </div>

      <!-- Tags filter -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
          :class="activeTag === '全部'
            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
            : 'glass text-secondary hover:text-white hover:bg-white/10'"
          @click="activeTag = '全部'"
        >
          全部
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
          :class="activeTag === tag
            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
            : 'glass text-secondary hover:text-white hover:bg-white/10'"
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Blog posts -->
      <div v-if="filteredPosts.length === 0" class="text-center py-20 glass rounded-2xl">
        <p class="text-5xl mb-4">📝</p>
        <p class="text-secondary">暂无文章</p>
      </div>

      <div v-else class="space-y-6">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
          @click="router.push(`/blog/${post.slug}`)"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="flex-1">
              <!-- Meta -->
              <div class="flex items-center gap-3 text-sm text-secondary mb-2">
                <time>{{ post.date }}</time>
                <span class="w-1 h-1 rounded-full bg-white/20" />
                <span>{{ post.category }}</span>
              </div>

              <!-- Title -->
              <h2 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {{ post.title }}
              </h2>

              <!-- Description -->
              <p class="text-secondary text-sm mb-3">
                {{ post.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="text-xs px-2.5 py-1 rounded-full bg-white/5 text-secondary"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Arrow -->
            <div class="hidden md:flex items-center text-secondary group-hover:text-purple-400 transition-colors text-xl">
              →
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>