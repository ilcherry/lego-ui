<template>
  <button
    :class="[
      'lego-button',
      `lego-button--${type}`,
      `lego-button--${size}`,
      {
        'lego-button--plain': plain,
        'lego-button--round': round,
        'lego-button--circle': circle,
        'lego-button--disabled': disabled,
        'lego-button--loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="lego-button__loading">
      <svg class="lego-button__loading-icon" viewBox="0 0 1024 1024">
        <path
          d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150.9 874.9c-46.1-46.1-83.1-100.8-109.8-162.7C13.5 648.2 0 581.1 0 512s13.5-136.2 40.2-199.3C66.9 250.8 103.9 196 150.9 149.9c46.1-46.1 100.8-83.1 162.7-109.8C376.8 13.5 443.9 0 512 0s136.2 13.5 199.3 40.2c61.9 26.7 116.6 63.7 162.7 109.8 46.1 46.1 83.1 100.8 109.8 162.7C1010.5 375.8 1024 442.9 1024 512s-13.5 136.2-40.2 199.3c-26.7 61.9-63.7 116.6-109.8 162.7-46.1 46.1-100.8 83.1-162.7 109.8C648.2 1010.5 581.1 1024 512 1024zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z"
        />
        <path
          d="M512 928c-229.8 0-416-186.2-416-416S282.2 96 512 96c111.4 0 215.7 43.2 294.2 121.8 78.4 78.4 121.8 182.7 121.8 294.2 0 229.8-186.2 416-416 416z"
        />
      </svg>
    </span>
    <span v-if="icon && !loading" class="lego-button__icon">
      <slot name="icon">{{ icon }}</slot>
    </span>
    <span v-if="$slots.default || text" class="lego-button__text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  text: '',
  icon: ''
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.lego-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 32px;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  vertical-align: middle;
  -webkit-appearance: none;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 14px;
  margin: 0;
}

.lego-button:hover,
.lego-button:focus {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.lego-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

/* 类型样式 */
.lego-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.lego-button--primary:hover,
.lego-button--primary:focus {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.lego-button--primary:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
}

.lego-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.lego-button--success:hover,
.lego-button--success:focus {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.lego-button--success:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
}

.lego-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.lego-button--warning:hover,
.lego-button--warning:focus {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.lego-button--warning:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
}

.lego-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.lego-button--danger:hover,
.lego-button--danger:focus {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}

.lego-button--danger:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
}

.lego-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.lego-button--info:hover,
.lego-button--info:focus {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.lego-button--info:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
}

/* 大小样式 */
.lego-button--large {
  height: 40px;
  padding: 12px 19px;
  font-size: 16px;
  border-radius: 4px;
}

.lego-button--small {
  height: 28px;
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
}

.lego-button--mini {
  height: 24px;
  padding: 3px 7px;
  font-size: 12px;
  border-radius: 3px;
}

/* plain 样式 */
.lego-button--plain {
  background: #fff;
  border-color: #dcdfe6;
  color: #606266;
}

.lego-button--plain:hover,
.lego-button--plain:focus {
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}

.lego-button--plain:active {
  background: #fff;
  border-color: #3a8ee6;
  color: #3a8ee6;
  outline: none;
}

.lego-button--primary.lego-button--plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
}

.lego-button--primary.lego-button--plain:hover,
.lego-button--primary.lego-button--plain:focus {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
}

.lego-button--primary.lego-button--plain:active {
  background: #3a8ee6;
  border-color: #3a8ee6;
  color: #fff;
  outline: none;
}

.lego-button--success.lego-button--plain {
  color: #67c23a;
  background: #f0f9ff;
  border-color: #c2e7b0;
}

.lego-button--success.lego-button--plain:hover,
.lego-button--success.lego-button--plain:focus {
  background: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.lego-button--success.lego-button--plain:active {
  background: #5daf34;
  border-color: #5daf34;
  color: #fff;
  outline: none;
}

.lego-button--warning.lego-button--plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
}

.lego-button--warning.lego-button--plain:hover,
.lego-button--warning.lego-button--plain:focus {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.lego-button--warning.lego-button--plain:active {
  background: #cf9236;
  border-color: #cf9236;
  color: #fff;
  outline: none;
}

.lego-button--danger.lego-button--plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
}

.lego-button--danger.lego-button--plain:hover,
.lego-button--danger.lego-button--plain:focus {
  background: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.lego-button--danger.lego-button--plain:active {
  background: #dd6161;
  border-color: #dd6161;
  color: #fff;
  outline: none;
}

.lego-button--info.lego-button--plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}

.lego-button--info.lego-button--plain:hover,
.lego-button--info.lego-button--plain:focus {
  background: #909399;
  border-color: #909399;
  color: #fff;
}

.lego-button--info.lego-button--plain:active {
  background: #82848a;
  border-color: #82848a;
  color: #fff;
  outline: none;
}

/* round 样式 */
.lego-button--round {
  border-radius: 20px;
  padding: 8px 23px;
}

/* circle 样式 */
.lego-button--circle {
  border-radius: 50%;
  padding: 8px;
  width: 32px;
  height: 32px;
}

.lego-button--large.lego-button--circle {
  width: 40px;
  height: 40px;
  padding: 12px;
}

.lego-button--small.lego-button--circle {
  width: 28px;
  height: 28px;
  padding: 5px;
}

.lego-button--mini.lego-button--circle {
  width: 24px;
  height: 24px;
  padding: 3px;
}

/* disabled 样式 */
.lego-button--disabled,
.lego-button--disabled:hover,
.lego-button--disabled:focus {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}

.lego-button--disabled.lego-button--plain,
.lego-button--disabled.lego-button--plain:hover,
.lego-button--disabled.lego-button--plain:focus {
  background-color: #fff;
  border-color: #ebeef5;
  color: #c0c4cc;
}

.lego-button--primary.lego-button--disabled,
.lego-button--primary.lego-button--disabled:hover,
.lego-button--primary.lego-button--disabled:focus {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}

.lego-button--success.lego-button--disabled,
.lego-button--success.lego-button--disabled:hover,
.lego-button--success.lego-button--disabled:focus {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}

.lego-button--warning.lego-button--disabled,
.lego-button--warning.lego-button--disabled:hover,
.lego-button--warning.lego-button--disabled:focus {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}

.lego-button--danger.lego-button--disabled,
.lego-button--danger.lego-button--disabled:hover,
.lego-button--danger.lego-button--disabled:focus {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

.lego-button--info.lego-button--disabled,
.lego-button--info.lego-button--disabled:hover,
.lego-button--info.lego-button--disabled:focus {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}

/* loading 样式 */
.lego-button--loading {
  position: relative;
  pointer-events: none;
}

.lego-button__loading {
  margin-right: 6px;
}

.lego-button__loading-icon {
  width: 14px;
  height: 14px;
  animation: rotating 2s linear infinite;
  fill: currentColor;
}

.lego-button__icon {
  margin-right: 6px;
}

.lego-button__text {
  flex: 1;
}

.lego-button--circle .lego-button__icon {
  margin-right: 0;
}

.lego-button--circle .lego-button__loading {
  margin-right: 0;
}

@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
