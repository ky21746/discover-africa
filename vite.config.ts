import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // טעינת משתני סביבה
  const env = loadEnv(mode, process.cwd(), '')
  
  // טעינת .env.prod אם הוא קיים
  if (mode === 'production') {
    try {
      const prodEnv = loadEnv('prod', process.cwd(), '')
      Object.assign(env, prodEnv)
    } catch (e) {
      // .env.prod לא קיים, ממשיכים עם .env הרגיל
    }
  }

  return {
    plugins: [react()],
    base: '/',   // שורש הדומיין
    optimizeDeps: { exclude: ['lucide-react'] },
    build: { outDir: 'dist', emptyOutDir: true },
    define: {
      // העברת משתני הסביבה לקוד
      'process.env': env
    }
  }
})
