import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',   // עכשיו האתר יפעל ישירות מהשורש של הדומיין
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',            // תיקיית build ברירת מחדל
    emptyOutDir: true,
  },
})