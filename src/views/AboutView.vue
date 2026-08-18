<script setup lang="ts">
const skills = [
  { name: 'Python', level: 'advanced', color: '#3776AB' },
  { name: 'Vue 3', level: 'intermediate', color: '#4FC08D' },
  { name: 'TypeScript', level: 'intermediate', color: '#3178C6' },
  { name: 'FastAPI', level: 'intermediate', color: '#009688' },
  { name: 'DeepSeek / LLM', level: 'intermediate', color: '#6c63ff' },
  { name: 'RAG', level: 'learning', color: '#e040fb' },
  { name: '数据分析', level: 'advanced', color: '#FF6F00' },
  { name: '爬虫', level: 'advanced', color: '#00ACC1' },
  { name: 'Docker', level: 'learning', color: '#2496ED' },
  { name: 'Git', level: 'advanced', color: '#F05032' },
]

const skillLevels: Record<string, string> = {
  advanced: '熟练',
  intermediate: '掌握',
  learning: '学习中',
}

const skillSize = (level: string) => {
  switch (level) {
    case 'advanced': return 'text-lg px-5 py-2.5'
    case 'intermediate': return 'text-base px-4 py-2'
    default: return 'text-sm px-3 py-1.5'
  }
}
</script>

<template>
  <div class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="section-title">关于我</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Bio -->
        <div class="glass rounded-2xl p-8">
          <h2 class="text-xl font-semibold mb-4">👋 你好！</h2>
          <div class="text-secondary space-y-4 leading-relaxed">
            <p>
              我是 <strong class="text-white">mowanyy</strong>，一名热爱 AI 和自动化的开发者。
            </p>
            <p>
              我专注于使用 Python 构建 AI 工具和自动化系统，从股票分析到求职自动化，
              从数据科学到 Web 应用，享受用代码解决实际问题的过程。
            </p>
            <p>
              目前正在系统性学习大模型技术栈，包括 RAG 应用开发、Agent 架构、
              模型微调与部署，目标是成为一名全栈 AI 工程师。
            </p>
            <p>
              这个作品集展示了我的一些项目和学习历程，欢迎交流！
            </p>
          </div>

          <!-- Contact -->
          <div class="mt-6 pt-6 border-t border-white/10">
            <h3 class="text-sm font-medium text-secondary mb-3">联系我</h3>
            <div class="flex flex-wrap gap-3">
              <a
                href="https://github.com/mowanyy"
                target="_blank"
                rel="noopener noreferrer"
                class="glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="mailto:2686324569@qq.com"
                class="glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition-all duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="glass rounded-2xl p-8">
          <h2 class="text-xl font-semibold mb-4">🛠️ 技能</h2>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 cursor-default"
              :class="skillSize(skill.level)"
              :style="{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
                border: `1px solid ${skill.color}30`,
              }"
            >
              {{ skill.name }}
              <span class="opacity-60 text-xs ml-1">· {{ skillLevels[skill.level] }}</span>
            </div>
          </div>

          <!-- Interests -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <h3 class="text-sm font-medium text-secondary mb-3">🎯 兴趣方向</h3>
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300">大模型应用</span>
              <span class="text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300">AI Agent</span>
              <span class="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-300">自动化</span>
              <span class="text-xs px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-300">数据分析</span>
              <span class="text-xs px-3 py-1.5 rounded-full bg-pink-500/10 text-pink-300">开源</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>