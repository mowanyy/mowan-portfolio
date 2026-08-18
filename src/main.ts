import { createApp } from 'vue'
import router from './router'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')