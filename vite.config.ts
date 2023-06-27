import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    process.env.UNI_COMPILER !== 'nvue' ? Unocss() : undefined,
    DefineOptions(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia'],
      dirs: ['./src/store', './src/utils', './src/composables'],
      dts: 'typings/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue'],
      dirs: ['src/tmui/components'],
      dts: 'typings/auto-components.d.ts',
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    // 配置`scss`和`less`全局变量
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/vars/_base.scss";',
      },
    },
  },
})
