import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// 导入组件库
import LegoUI from 'lego-ui'

const app = createApp(App)
app.use(LegoUI)
app.mount('#app') 