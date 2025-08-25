import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // שורש הדומיין
  optimizeDeps: { exclude: ['lucide-react'] },
  build: { outDir: 'dist', emptyOutDir: true }
})
