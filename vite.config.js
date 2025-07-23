// vite.config.js

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Ini settingan penting buat GitHub Pages
  // Pastikan path ini sesuai dengan "homepage" di package.json dan "basename" di App.jsx Router lo.
  // Harus ada trailing slash '/' di belakang path-nya.
  base: '/bumina/', 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});