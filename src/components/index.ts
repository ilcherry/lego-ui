import Button from './Button'
import type { App } from 'vue'

// 所有组件
const components = [Button]

// 全量导入安装函数
const install = (app: App) => {
  components.forEach(component => {
    if (component.install) {
      app.use(component)
    } else {
      app.component(component.name || component.__name, component)
    }
  })
}

// 按需导出
export { Button }

// 导出类型
export type * from './Button/types'

// 支持全量导入
export default {
  install,
  Button
}
