import Button from './Button.vue'
import type { App } from 'vue'

// 支持按需导入
Button.install = (app: App) => {
  app.component('LegoButton', Button)
}

export default Button
export { Button }

export type * from './types'
