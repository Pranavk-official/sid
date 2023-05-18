// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project01: resolve(__dirname, 'project01', 'index.html'),
        project02: resolve(__dirname, 'project02', '/index.html'),
      },
    },
  },
})
