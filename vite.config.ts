import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vitest',
      ],
      dts: true,
    }),
    Components({
      dirs: [
        './src/**/*',
      ],
      // search for subdirectories
      deep: true,
      dts: true,
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '~': '/src',
    },
  },
})
