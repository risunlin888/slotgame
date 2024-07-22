import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(Router)
    .use(ElementPlus)
    .mount('#app')