# Lego UI

一个基于 Vue 3 + TypeScript + Vite 构建的现代化组件库。

[![npm version](https://badge.fury.io/js/lego-ui.svg)](https://badge.fury.io/js/lego-ui)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://github.com/your-username/lego-ui/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/your-username/lego-ui/actions)

## 特性

- 🚀 基于 Vue 3 Composition API
- 📘 使用 TypeScript 开发，提供完整的类型定义
- ⚡ 使用 Vite 构建，开发体验极佳
- 🎨 精美的默认主题
- 📦 支持按需导入，减小包体积
- 🌍 支持国际化
- ♿ 友好的可访问性支持

## 安装

```bash
# npm
npm install lego-ui

# yarn
yarn add lego-ui

# pnpm
pnpm install lego-ui
```

## 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import LegoUI from 'lego-ui'
import 'lego-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(LegoUI)
app.mount('#app')
```

### 按需引入（推荐）

```typescript
import { createApp } from 'vue'
import { Button } from 'lego-ui'
import 'lego-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Button)
app.mount('#app')
```

### 自动按需导入

如果你使用了 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)，你可以享受自动导入的便利。

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { LegoUIResolver } from 'lego-ui/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [LegoUIResolver()]
    })
  ]
})
```

## 基础用法

### Button 按钮

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <lego-button>默认按钮</lego-button>
    <lego-button type="primary">主要按钮</lego-button>
    <lego-button type="success">成功按钮</lego-button>
    <lego-button type="warning">警告按钮</lego-button>
    <lego-button type="danger">危险按钮</lego-button>
    <lego-button type="info">信息按钮</lego-button>

    <!-- 朴素按钮 -->
    <lego-button plain>朴素按钮</lego-button>
    <lego-button type="primary" plain>主要按钮</lego-button>

    <!-- 圆角按钮 -->
    <lego-button round>圆角按钮</lego-button>
    <lego-button type="primary" round>主要按钮</lego-button>

    <!-- 圆形按钮 -->
    <lego-button circle icon="👍"></lego-button>
    <lego-button type="primary" circle icon="✓"></lego-button>

    <!-- 不同尺寸 -->
    <lego-button size="large">大按钮</lego-button>
    <lego-button>默认按钮</lego-button>
    <lego-button size="small">小按钮</lego-button>
    <lego-button size="mini">超小按钮</lego-button>

    <!-- 禁用状态 -->
    <lego-button disabled>禁用按钮</lego-button>
    <lego-button type="primary" disabled>主要按钮</lego-button>

    <!-- 加载状态 -->
    <lego-button loading>加载中</lego-button>
    <lego-button type="primary" loading>主要按钮</lego-button>

    <!-- 带图标的按钮 -->
    <lego-button icon="🔍">搜索</lego-button>
    <lego-button type="primary">
      <template #icon>🔍</template>
      搜索
    </lego-button>
  </div>
</template>

<script setup>
import { Button as LegoButton } from 'lego-ui'
</script>
```

## API 文档

### Button 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | default / primary / success / warning / danger / info | default |
| size | 按钮尺寸 | string | large / medium / small / mini | medium |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| text | 按钮文字 | string | — | — |
| icon | 图标 | string | — | — |

### Button 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击时触发 | (event: MouseEvent) |

### Button 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 自定义默认内容 |
| icon | 自定义图标 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建库
npm run build:lib

# 构建文档
npm run docs:build

# 类型检查
npm run type-check

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 构建

```bash
# 构建组件库
npm run build:lib

# 构建文档
npm run docs:build
```

## 发布

项目使用 GitHub Actions 自动发布到 NPM。

### 自动发布

推送标签时自动触发发布：

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 手动发布

在 GitHub Actions 中手动触发 workflow，选择要发布的版本类型（patch/minor/major）。

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的变更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

[MIT](LICENSE) © 2024-present

## 更新日志

详见 [CHANGELOG.md](CHANGELOG.md)

## 浏览器支持

现代浏览器和 IE11+。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## 链接

- [在线文档](https://your-username.github.io/lego-ui/)
- [GitHub](https://github.com/your-username/lego-ui)
- [NPM](https://www.npmjs.com/package/lego-ui)
- [更新日志](CHANGELOG.md)
- [问题反馈](https://github.com/your-username/lego-ui/issues) 