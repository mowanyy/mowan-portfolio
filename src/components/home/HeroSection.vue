<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const avatarUrl = '/mowan-portfolio/avatar.jpg'
</script>

<template>
  <section class="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <!-- Avatar -->
      <div class="mb-8 animate-float">
        <div class="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/20">
          <img
            :src="avatarUrl"
            alt="mowanyy"
            class="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
        <span class="gradient-text">mowanyy</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl text-secondary mb-4 animate-slide-up" style="animation-delay: 0.1s">
        AI 工具开发者 · 数据科学爱好者 · 自动化实践者
      </p>

      <p class="text-base text-secondary/60 mb-10 max-w-xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
        探索 AI 与自动化的边界，用代码解决实际问题
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4 animate-slide-up" style="animation-delay: 0.3s">
        <button
          class="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          @click="router.push('/projects')"
        >
          查看项目
        </button>
        <button
          class="px-8 py-3 rounded-xl glass text-primary font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          @click="router.push('/about')"
        >
          关于我
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="mt-16 animate-bounce">
        <div class="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex justify-center pt-2">
          <div class="w-1 h-2 rounded-full bg-purple-400" />
        </div>
      </div>
    </div>
  </section>
</template>