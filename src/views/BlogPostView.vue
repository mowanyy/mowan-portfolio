<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlog } from '../composables/useBlog'

const route = useRoute()
const router = useRouter()
const { getPost } = useBlog()

const post = computed(() => getPost(route.params.slug as string))
</script>

<template>
  <div class="py-20 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Back button -->
      <button
        class="inline-flex items-center gap-2 text-secondary hover:text-purple-400 transition-colors mb-8 cursor-pointer"
        @click="router.push('/blog')"
      >
        ← 返回博客列表
      </button>

      <!-- Post not found -->
      <div v-if="!post" class="text-center py-20 glass rounded-2xl">
        <p class="text-5xl mb-4">🔍</p>
        <p class="text-secondary text-lg">文章未找到</p>
        <button
          class="mt-4 px-6 py-2 rounded-xl glass text-primary hover:bg-white/10 transition-colors cursor-pointer"
          @click="router.push('/blog')"
        >
          返回博客列表
        </button>
      </div>

      <!-- Post content -->
      <article v-else>
        <!-- Header -->
        <header class="mb-8">
          <div class="flex items-center gap-3 text-sm text-secondary mb-3">
            <time>{{ post.date }}</time>
            <span class="w-1 h-1 rounded-full bg-white/20" />
            <span>{{ post.category }}</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ post.title }}</h1>

          <p class="text-lg text-secondary mb-4">{{ post.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-xs px-2.5 py-1 rounded-full bg-white/5 text-secondary"
            >
              #{{ tag }}
            </span>
          </div>
        </header>

        <!-- Divider -->
        <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <!-- Content -->
        <div class="prose" v-html="post.html" />
      </article>
    </div>
  </div>
</template>