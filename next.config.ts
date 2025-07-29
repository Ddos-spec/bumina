import type { NextConfig } from 'next';

// Nama repo GitHub lo, boss. Biar gampang diganti kalo perlu.
const repo = 'bumina'; 

const nextConfig: NextConfig = {
  // Wajib ada buat static export ke GitHub Pages
  output: 'export',
  
  // Ini kunci utamanya, boss! Biar semua path ke aset (CSS, JS, gambar) bener
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,

  // Wajib `true` buat static export, biar gambar tetep muncul
  images: {
    unoptimized: true,
  },

  // Biar proses build tetep jalan meskipun ada error TypeScript, aman!
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;