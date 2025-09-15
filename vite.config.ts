import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // טעינת משתני סביבה - בפרודקשן נטען .env.production, אחרת .env
  const envFile = mode === 'production' ? 'production' : mode
  const env = loadEnv(envFile, process.cwd(), '')
  
  console.log(`🔧 Loading environment: ${envFile}`)
  console.log(`🗝️  VITE_GOOGLE_MAPS_API_KEY: ${env.VITE_GOOGLE_MAPS_API_KEY ? 'Found' : 'Missing'}`)

  return {
    plugins: [react()],
    base: '/',   // שורש הדומיין
    optimizeDeps: { exclude: ['lucide-react'] },
    build: { outDir: 'dist', emptyOutDir: true },
    define: {
      // העברת משתני הסביבה לקוד - גם process.env וגם import.meta.env
      'process.env': env,
      'import.meta.env': env
    }
  }
})
