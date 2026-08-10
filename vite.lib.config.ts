import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import dts from 'unplugin-dts/vite'

const root = import.meta.dirname
const localSrc = resolve(root, 'src')
const emitTypes = process.env.DTS === 'true'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({ imports: ['vue', 'vue-router'], dts: false }),
    Components({
      dirs: ['./src/**/*'],
      deep: true,
      dts: false,
    }),
    emitTypes && dts({
      processor: 'vue',
      tsconfigPath: './tsconfig.app.json',
      exclude: ['src/App.vue', 'src/main.ts'],
    }),
  ],
  resolve: {
    alias: [
      { find: /^ornito$/, replacement: resolve(root, 'src/index.ts') },
      { find: /^@\//, replacement: `${localSrc}/` },
      { find: /^~\//, replacement: `${localSrc}/` },
    ],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: emitTypes,
    lib: {
      entry: resolve(root, 'src/index.ts'),
      formats: ['es'],
      fileName: 'ornito',
    },
    rolldownOptions: {
      external: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vee-validate', 'yup', '@vuepic/vue-datepicker', '@tabler/icons-vue'],
    },
  },
})
