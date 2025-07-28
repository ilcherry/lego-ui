import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/lego-ui/',
  build: {
    outDir: 'docs/dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'lego-ui': resolve(__dirname, '../src/index.ts')
    }
  },
  server: {
    port: 3001,
    open: true
  }
})
