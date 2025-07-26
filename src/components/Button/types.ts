export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type ButtonSize = 'large' | 'medium' | 'small' | 'mini'

export interface ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType

  /**
   * 按钮尺寸
   * @default 'medium'
   */
  size?: ButtonSize

  /**
   * 是否为朴素按钮
   * @default false
   */
  plain?: boolean

  /**
   * 是否为圆角按钮
   * @default false
   */
  round?: boolean

  /**
   * 是否为圆形按钮
   * @default false
   */
  circle?: boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否加载中状态
   * @default false
   */
  loading?: boolean

  /**
   * 按钮文本
   * @default ''
   */
  text?: string

  /**
   * 图标
   * @default ''
   */
  icon?: string
}

export interface ButtonEmits {
  /**
   * 点击事件
   */
  click: [event: MouseEvent]
}

export interface ButtonSlots {
  /**
   * 默认插槽
   */
  default?: () => any

  /**
   * 图标插槽
   */
  icon?: () => any
}
