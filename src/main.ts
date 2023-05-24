import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from "./App.vue"
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app:any = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
