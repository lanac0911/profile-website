import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: 'profile-website',
  plugins: [react()],
  server: {
    host: true, // 將伺服器綁定到 0.0.0.0，使其他設備可訪問
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@page': resolve(__dirname, './src/page'),  // ← 這行補上！
      '@style': resolve(__dirname, './src/styles'),  // ← 這行補上！
      '@img': resolve(__dirname, './src/assets/img'), // ← 還有這行！
      '@component': resolve(__dirname, './src/components') // ← 還有這行！
    },
  },
})
