import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

// 导入组件库
import LegoUI from './index'

const app = createApp(App)
app.use(LegoUI)
app.mount('#app') 