import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg transition-all duration-300',
    'card': 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl',
    'card-hover': 'hover:bg-white/10 hover:border-purple-500/30 hover:shadow-purple-500/5 hover:-translate-y-1',
    'gradient-text': 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent',
    'section-title': 'text-3xl md:text-4xl font-bold gradient-text mb-8',
  },
  rules: [
    ['bg-dark-base', { background: '#0a0a0f' }],
    ['bg-card-base', { background: 'rgba(255, 255, 255, 0.05)' }],
    ['text-primary', { color: '#e0e0e0' }],
    ['text-secondary', { color: '#a0a0b0' }],
    ['border-subtle', { 'border-color': 'rgba(255, 255, 255, 0.1)' }],
  ],
  theme: {
    colors: {
      brand: {
        primary: '#6c63ff',
        secondary: '#e040fb',
        accent: '#00d4ff',
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out forwards',
      'slide-up': 'slideUp 0.6s ease-out forwards',
    },
  },
})