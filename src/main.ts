import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/tailwind.scss'

// developmentのみでモックAPIを使用する
if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
