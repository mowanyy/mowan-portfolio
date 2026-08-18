<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import FeaturedProjects from '../components/home/FeaturedProjects.vue'
import GitHubStats from '../components/common/GitHubStats.vue'
</script>

<template>
  <div>
    <HeroSection />
    <FeaturedProjects />
    <section class="pb-20 px-4">
      <div class="max-w-6xl mx-auto">
        <GitHubStats />
      </div>
    </section>
  </div>
</template>