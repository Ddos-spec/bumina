import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Import 'path' dari Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // INI BAGIAN PENTINGNYA:
      // Kita bilang ke Vite: "Kalau ada import yang diawali '@',
      // anggap itu sama dengan 'src'."
      '@': path.resolve(__dirname, './src'),
    },
  },
})