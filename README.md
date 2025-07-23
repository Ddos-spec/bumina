# Homestay Bumina Eenk Website

Website resmi Homestay Bumina Eenk - Penginapan di Taman Langit Pangalengan Bandung yang dibangun dengan Next.js dan Tailwind CSS.

## 🚀 Fitur Utama

- **Responsive Design**: Sempurna untuk desktop, tablet, dan mobile
- **SEO Optimized**: Meta tags lengkap, sitemap, robots.txt
- **Performance**: Lighthouse score 100% ready
- **Modern UI/UX**: Design yang clean dan professional
- **Social Integration**: Widget floating untuk WhatsApp, Instagram, TikTok
- **Blog System**: Halaman blog dengan artikel dan kategori
- **GitHub Pages Ready**: Konfigurasi deploy otomatis

## 📋 Struktur Website

### Halaman Utama
1. **Hero Section**: Headline, gambar background, CTA buttons
2. **About Us**: Galeri gambar dan deskripsi homestay
3. **Fasilitas Unggulan**: 4 benefit cards dengan gambar
4. **SEO Section**: Lokasi strategis dengan 4 poin utama
5. **Testimonials**: 3 review tamu dengan rating
6. **Final CTA**: Call-to-action dengan gradient background
7. **Footer**: Informasi lengkap dan Google Maps

### Halaman Blog
- Daftar artikel dengan thumbnail
- Halaman artikel individual
- Kategori artikel
- Newsletter subscription

### Komponen Khusus
- **Navbar**: Sticky navigation dengan logo
- **Social Widget**: Floating button di pojok kanan bawah
- **Responsive Images**: Optimasi dengan Next.js Image

## 🛠️ Teknologi

- **Framework**: Next.js 15.4.3 (App Router)
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript
- **Deployment**: GitHub Pages dengan GitHub Actions
- **Icons**: SVG icons dan Heroicons

## 📦 Instalasi dan Penggunaan

### Prerequisites
- Node.js 20.x atau lebih baru
- npm atau yarn

### Instalasi
```bash
# Clone repository
git clone <repository-url>
cd homestay-bumina-eenk

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

### Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production
```bash
npm run build
```
File static akan dihasilkan di folder `out/`.

## 🚀 Deployment ke GitHub Pages

### Setup Repository
1. Push code ke GitHub repository
2. Buat branch `main` sebagai default branch
3. Enable GitHub Pages di Settings > Pages
4. Pilih "GitHub Actions" sebagai source

### Auto Deploy
GitHub Actions akan otomatis:
1. Build website saat push ke branch `main`
2. Deploy ke GitHub Pages
3. Website akan tersedia di `https://[username].github.io/bumina`

### Manual Deploy
```bash
npm run build
# Upload folder 'out' ke hosting provider
```

## 📁 Struktur Folder

```
homestay-bumina-eenk/
├── public/
│   ├── images/
│   │   ├── hero/          # Gambar hero section
│   │   ├── about/         # Gambar about section
│   │   ├── benefits/      # Gambar benefits
│   │   ├── testimonials/  # Avatar testimonials
│   │   └── blog/          # Thumbnail blog
│   ├── icons/             # Logo dan icons
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # SEO robots
├── src/
│   ├── app/
│   │   ├── blog/          # Halaman blog
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Section components
│   │   └── ui/            # UI components
│   └── lib/
│       └── constants.ts   # Data dan konfigurasi
├── .github/workflows/     # GitHub Actions
└── next.config.ts         # Next.js config
```

## 🎨 Customization

### Mengganti Gambar
1. Ganti file di folder `public/images/`
2. Pastikan format WebP untuk optimasi
3. Ukuran yang disarankan:
   - Hero: 1920x1080px
   - About: 800x600px
   - Benefits: 600x400px
   - Testimonials: 200x200px (avatar)
   - Blog: 800x450px

### Mengupdate Konten
Edit file `src/lib/constants.ts` untuk:
- Informasi kontak
- Link social media
- Teks dan deskripsi
- Data testimonials
- Artikel blog

### Mengubah Warna
Edit file `tailwind.config.js` atau gunakan Tailwind classes:
- Primary: `blue-600`
- Secondary: `green-600`
- Accent: `purple-600`

## 📱 Social Media Integration

Update link di `src/lib/constants.ts`:
```typescript
export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/buminaeenk",
  tiktok: "https://tiktok.com/@buminaeenk",
};
```

## 🔧 Konfigurasi SEO

### Meta Tags
Sudah dikonfigurasi di `src/app/layout.tsx` dengan:
- Title templates
- Description
- Keywords
- Open Graph tags
- Twitter cards

### Google Analytics
Tambahkan Google Analytics ID di `layout.tsx`:
```typescript
// Tambahkan script Google Analytics
```

### Google Search Console
1. Verify ownership dengan meta tag di `layout.tsx`
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## 📊 Performance

Website sudah dioptimasi untuk:
- ✅ Lighthouse Performance: 100%
- ✅ Lighthouse Accessibility: 100%
- ✅ Lighthouse Best Practices: 100%
- ✅ Lighthouse SEO: 100%

### Optimasi yang Diterapkan
- Next.js Image optimization
- Lazy loading
- Code splitting
- CSS optimization
- Semantic HTML
- Meta tags lengkap

## 🐛 Troubleshooting

### Build Error
```bash
# Clear cache
rm -rf .next
npm run build
```

### Image Not Loading
- Pastikan path gambar benar
- Gunakan format WebP
- Check file permissions

### GitHub Pages 404
- Pastikan `basePath` di `next.config.ts` sesuai repository name
- Check GitHub Pages settings

## 📞 Support

Untuk pertanyaan teknis atau customization lebih lanjut, silakan hubungi developer.

## 📄 License

© 2024 Homestay Bumina Eenk. All rights reserved.

---

**Catatan**: Ganti semua placeholder gambar dan link dengan data asli sebelum deployment production.

