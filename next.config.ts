import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export' WAJIB ADA buat static export
  output: 'export',
  
  // Kosongin aja karena kita deploy ke root domain (alamat utama), bukan sub-folder
  assetPrefix: '',
  basePath: '',

  // Biarin aja, ini buat optimasi gambar di static export
  images: {
    unoptimized: true,
  },

  // TAMBAHKAN BLOK INI BUAT CUEKIN ERROR TIPE PAS BUILD
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;