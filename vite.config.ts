import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
