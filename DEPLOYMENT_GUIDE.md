# Panduan Deployment Homestay Bumina Eenk Website

## 🚀 Deployment ke GitHub Pages (Recommended)

### Step 1: Setup Repository GitHub
1. Buat repository baru di GitHub dengan nama `bumina`
2. Push semua file proyek ke repository:
```bash
git init
git add .
git commit -m "Initial commit: Homestay Bumina Eenk website"
git branch -M main
git remote add origin https://github.com/[username]/bumina.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Pilih **Source**: GitHub Actions
4. GitHub Actions akan otomatis mendeteksi workflow

### Step 3: Auto Deploy
- Setiap push ke branch `main` akan otomatis trigger deployment
- Website akan tersedia di: `https://[username].github.io/bumina`
- Proses deployment memakan waktu 2-5 menit

### Step 4: Custom Domain (Opsional)
1. Beli domain (contoh: buminaeenk.com)
2. Setup DNS CNAME record ke `[username].github.io`
3. Tambahkan file `CNAME` di root repository dengan isi domain
4. Update `next.config.ts` untuk production domain

## 🌐 Deployment ke Hostinger

### Step 1: Build Website
```bash
npm run build
```
Folder `out` akan berisi file static website.

### Step 2: Upload ke Hostinger
1. Login ke Hostinger control panel
2. Buka **File Manager**
3. Upload semua file dari folder `out` ke `public_html`
4. Pastikan file `index.html` ada di root

### Step 3: Setup Domain
1. Point domain ke Hostinger hosting
2. Update DNS records jika perlu
3. Enable SSL certificate

## 🔧 Konfigurasi Environment

### Development
```bash
# .env.local
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (GitHub Pages)
```bash
# Otomatis dikonfigurasi di next.config.ts
NODE_ENV=production
basePath=/bumina
assetPrefix=/bumina
```

### Production (Custom Domain)
```bash
# Update next.config.ts
NODE_ENV=production
basePath=""
assetPrefix=""
```

## 📋 Checklist Sebelum Deploy

### ✅ Konten
- [ ] Ganti semua placeholder gambar dengan gambar asli
- [ ] Update informasi kontak (telepon, email, alamat)
- [ ] Update link social media (WhatsApp, Instagram, TikTok)
- [ ] Update koordinat Google Maps
- [ ] Review semua teks dan deskripsi

### ✅ SEO
- [ ] Update meta description
- [ ] Update keywords
- [ ] Update Open Graph images
- [ ] Update sitemap.xml dengan domain yang benar
- [ ] Setup Google Analytics (opsional)
- [ ] Setup Google Search Console

### ✅ Performance
- [ ] Optimasi semua gambar (format WebP, kompresi)
- [ ] Test Lighthouse score
- [ ] Test responsivitas di berbagai device
- [ ] Test loading speed

### ✅ Functionality
- [ ] Test semua link internal
- [ ] Test social media links
- [ ] Test contact forms (jika ada)
- [ ] Test blog navigation

## 🔄 Update Website

### GitHub Pages
```bash
# Edit files
git add .
git commit -m "Update: description of changes"
git push origin main
# Auto deploy akan berjalan
```

### Hostinger
```bash
# Build locally
npm run build
# Upload folder 'out' via File Manager
```

## 📊 Monitoring

### Analytics
1. Setup Google Analytics
2. Setup Google Search Console
3. Monitor traffic dan performance

### Uptime Monitoring
1. Setup monitoring service (UptimeRobot, Pingdom)
2. Monitor website availability
3. Setup alerts untuk downtime

## 🐛 Troubleshooting

### GitHub Pages Issues
```bash
# Check GitHub Actions logs
# Pastikan workflow berhasil
# Check repository settings
```

### Build Errors
```bash
# Clear cache
rm -rf .next
rm -rf out
npm install
npm run build
```

### Image Loading Issues
- Pastikan path gambar benar
- Check file permissions
- Gunakan format yang didukung (WebP, JPG, PNG)

### 404 Errors
- Check routing configuration
- Pastikan basePath sesuai
- Check file structure

## 📞 Support

Jika mengalami masalah deployment:
1. Check error logs di GitHub Actions
2. Pastikan semua dependencies terinstall
3. Test build locally sebelum deploy
4. Check browser console untuk errors

## 🔐 Security

### Best Practices
- Jangan commit sensitive data (API keys, passwords)
- Use environment variables untuk konfigurasi
- Enable HTTPS/SSL
- Regular security updates

### Backup
- Regular backup repository
- Backup database (jika ada)
- Backup media files

---

**Catatan**: Panduan ini mengasumsikan penggunaan GitHub Pages sebagai platform utama. Untuk platform lain, sesuaikan langkah-langkah deployment.

