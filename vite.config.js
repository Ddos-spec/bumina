import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pastikan bagian 'resolve' yang kita tambah sebelumnya sudah dihapus.
  // Kosongkan atau kembalikan ke versi original proyek lu.
})