import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { crx3 } from 'vite-plugin-vue-crx3';
import commonjs from '@rollup/plugin-commonjs';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [commonjs(), vue(), crx3(),ElementPlus(), AutoImport({
    imports: [
      'vue',
      {
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
      },
    ],
  }),
  Components({
    resolvers: [NaiveUiResolver()]
  })], // crx3即为插件入口函数
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: "es2015",
    rollupOptions: {
      input: resolve(__dirname, "src/manifest.json"), // 将源码中的manifest.json作为入口文件
    },
  },
})
