import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/discover-africa/',   // חשוב! נתיב הריפו שלך
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',            // תיקיית build ברירת מחדל
    emptyOutDir: true,
  },
})