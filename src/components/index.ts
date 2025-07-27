import Button from './Button'
import type { App, Plugin } from 'vue'

// 全量导入安装函数
const install = (app: App) => {
  // 直接注册 Button 组件，因为它有 install 方法
  app.use(Button as unknown as Plugin)
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
