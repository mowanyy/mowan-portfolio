<script setup lang="ts">
import { roadmap } from '../data/learningRoadmap'
</script>

<template>
  <div class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="section-title">学习路线</h1>
        <p class="text-secondary">大模型开发系统性学习路径</p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Center line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 md:-translate-x-0.5" />

        <div class="space-y-12">
          <div
            v-for="(item, index) in roadmap"
            :key="item.id"
            class="relative"
            :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-4 border-dark-base md:-translate-x-2 z-10"
              :style="{
                backgroundColor: item.color,
                boxShadow: `0 0 12px ${item.color}40`,
              }"
            />

            <!-- Content card -->
            <div
              class="ml-14 md:ml-0 glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              :class="index % 2 === 0 ? '' : 'md:ml-auto'"
              :style="{ maxWidth: 'calc(50% - 2rem)' }"
            >
              <!-- Period -->
              <span class="text-xs text-secondary mb-2 block">{{ item.period }}</span>

              <!-- Icon & Title -->
              <div class="flex items-center gap-3 mb-2" :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''">
                <span class="text-2xl">{{ item.icon }}</span>
                <div>
                  <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                  <p class="text-sm text-secondary">{{ item.subtitle }}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-sm text-secondary/80 mb-4">{{ item.description }}</p>

              <!-- Details -->
              <ul class="space-y-2">
                <li
                  v-for="detail in item.details"
                  :key="detail"
                  class="text-sm flex items-start gap-2"
                  :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
                >
                  <span class="text-purple-400 mt-0.5 shrink-0">✦</span>
                  <span>{{ detail }}</span>
                </li>
              </ul>

              <!-- Status badge -->
              <div class="mt-4">
                <span
                  v-if="item.status === 'completed'"
                  class="text-xs px-2.5 py-1 rounded-full bg-green-500/20 text-green-300"
                >
                  ✅ 已完成
                </span>
                <span
                  v-else-if="item.status === 'in-progress'"
                  class="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300"
                >
                  🔄 进行中
                </span>
                <span
                  v-else
                  class="text-xs px-2.5 py-1 rounded-full bg-white/10 text-secondary"
                >
                  📅 规划中
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>