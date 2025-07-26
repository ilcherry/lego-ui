import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  if (isLib) {
    // 库构建模式
    return {
      plugins: [
        vue(),
        dts({
          insertTypesEntry: true,
          copyDtsFiles: true,
          include: ['src/**/*'],
          exclude: ['src/**/*.stories.*', 'src/**/*.test.*']
        })
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'LegoUI',
          fileName: (format) => `lego-ui.${format}.js`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            },
            // 确保样式文件单独输出
            assetFileNames: (assetInfo) => {
              if (assetInfo.name?.endsWith('.css')) {
                return 'style.css'
              }
              return assetInfo.name
            }
          }
        },
        cssCodeSplit: false,
        sourcemap: true
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  }

  // 开发模式
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      open: true
    }
  }
}) 