import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    build: {
    outDir: 'build'  // This changes output folder from dist to build
  },
  base:'/childcare-frontend-demo/',
  plugins: [
    react(),
  ],
})
