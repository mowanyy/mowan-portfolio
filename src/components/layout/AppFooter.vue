<script setup lang="ts">
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/mowanyy', icon: 'icon-github' },
  { name: 'Email', url: 'mailto:2686324569@qq.com', icon: 'icon-mail' },
]
</script>

<template>
  <footer class="border-t border-white/10 mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-secondary text-sm">
          © {{ new Date().getFullYear() }} mowanyy. Built with
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors">Vue 3</a>
          &
          <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 transition-colors">UnoCSS</a>
        </p>
        <div class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary hover:text-purple-400 transition-colors text-sm"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>