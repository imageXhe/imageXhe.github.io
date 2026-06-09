import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  base: './',
  build: {
    outDir: '.build-temp',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'build-entry.html'),
    },
  },
  plugins: [vue()],
})
