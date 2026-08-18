<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/projects', label: '项目', icon: '📁' },
  { path: '/blog', label: '博客', icon: '📝' },
  { path: '/learning', label: '路线', icon: '🗺️' },
  { path: '/about', label: '关于', icon: '👤' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const navigate = (path: string) => {
  router.push(path)
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 glass"
    style="backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button
          class="text-xl font-bold gradient-text hover:opacity-80 transition-opacity cursor-pointer"
          @click="navigate('/')"
        >
          mowanyy
        </button>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.path"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer"
            :class="isActive(item.path)
              ? 'text-purple-400 bg-purple-500/10'
              : 'text-secondary hover:text-white hover:bg-white/5'"
            @click="navigate(item.path)"
          >
            {{ item.icon }} {{ item.label }}
          </button>
          </nav>

        <!-- Mobile controls -->
        <div class="flex items-center gap-3 md:hidden">
          <button
            class="text-xl p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="切换菜单"
          >
            <span v-if="mobileMenuOpen">✕</span>
            <span v-else>☰</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="mobileMenuOpen" class="md:hidden overflow-hidden border-t border-white/10">
        <div class="px-4 py-3 space-y-1">
          <button
            v-for="item in navItems"
            :key="item.path"
            class="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
            :class="isActive(item.path)
              ? 'text-purple-400 bg-purple-500/10'
              : 'text-secondary hover:text-white hover:bg-white/5'"
            @click="navigate(item.path)"
          >
            {{ item.icon }} {{ item.label }}
          </button>
        </div>
      </div>
    </transition>
  </header>

  <!-- Spacer to push content below fixed header -->
  <div class="h-16" />
</template>