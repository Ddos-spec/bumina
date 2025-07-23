# Panduan Deployment Website Homestay Bumina Eenk

## 🚀 Persiapan Deployment

### 1. Final Build Check
```bash
# Pastikan semua dependencies terinstall
npm install

# Jalankan build production
npm run build

# Test production build locally
npm run preview
```

### 2. Verifikasi Build Output
```
dist/
├── index.html (4.61 kB)
├── assets/
│   ├── index-[hash].css (97.66 kB)
│   └── index-[hash].js (248.47 kB)
└── [static assets]
```

## 🌐 Opsi Deployment

### Option 1: Vercel (Recommended)

#### Keuntungan:
- ✅ Automatic deployments dari Git
- ✅ Global CDN
- ✅ HTTPS otomatis
- ✅ Preview deployments
- ✅ Analytics built-in

#### Langkah Deployment:
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login ke Vercel
vercel login

# 3. Deploy
vercel

# 4. Production deployment
vercel --prod
```

#### Konfigurasi vercel.json:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Option 2: Netlify

#### Keuntungan:
- ✅ Drag & drop deployment
- ✅ Form handling
- ✅ Split testing
- ✅ Edge functions

#### Langkah Deployment:

**Method A: Drag & Drop**
1. Build project: `npm run build`
2. Buka [Netlify](https://netlify.com)
3. Drag folder `dist/` ke deploy area

**Method B: Git Integration**
1. Push code ke GitHub/GitLab
2. Connect repository di Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

#### Konfigurasi netlify.toml:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Option 3: GitHub Pages

#### Langkah Deployment:
```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add script ke package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# 3. Build dan deploy
npm run build
npm run deploy
```

#### GitHub Actions (Automated):
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 4: Traditional Web Hosting

#### Untuk cPanel/Shared Hosting:
1. Build project: `npm run build`
2. Compress folder `dist/` menjadi ZIP
3. Upload ke public_html via File Manager
4. Extract files
5. Setup .htaccess untuk SPA routing

#### .htaccess Configuration:
```apache
RewriteEngine On
RewriteBase /

# Handle Angular and Vue.js routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Gzip compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

## 🔧 Post-Deployment Setup

### 1. Domain Configuration
```bash
# Custom domain setup (Vercel)
vercel domains add yourdomain.com

# DNS Configuration
# A Record: @ -> Vercel IP
# CNAME: www -> your-project.vercel.app
```

### 2. SSL Certificate
- Vercel/Netlify: Automatic HTTPS
- Traditional hosting: Let's Encrypt atau SSL provider

### 3. Analytics Setup
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 4. Search Console
1. Verify domain ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing status

## 📊 Performance Monitoring

### 1. Lighthouse CI Setup
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Configuration file: lighthouserc.js
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4173/'],
      startServerCommand: 'npm run preview',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
      },
    },
  },
};

# Run audit
lhci autorun
```

### 2. Real User Monitoring
```javascript
// Web Vitals tracking
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', metric.name, {
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    event_category: 'Web Vitals',
    event_label: metric.id,
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🔒 Security Headers

### Recommended Headers:
```
Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 🚨 Troubleshooting

### Common Issues:

1. **404 pada refresh page**
   - Solution: Configure SPA routing di hosting
   - Vercel: Automatic
   - Netlify: `_redirects` file
   - Apache: `.htaccess` rewrite rules

2. **Images tidak load**
   - Check path relatif dari public folder
   - Verify images ada di build output

3. **CSS tidak apply**
   - Check Tailwind purge configuration
   - Verify CSS file di build output

4. **Slow loading**
   - Enable gzip compression
   - Setup CDN
   - Optimize images

### Debug Commands:
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused CSS
npx purgecss --css dist/assets/*.css --content dist/index.html

# Test production build locally
npm run preview
```

## 📋 Deployment Checklist

### Pre-Deployment:
- [ ] All images optimized dan compressed
- [ ] Meta tags lengkap dan accurate
- [ ] Sitemap.xml dan robots.txt ready
- [ ] All links tested dan working
- [ ] Mobile responsiveness verified
- [ ] Performance audit passed
- [ ] Accessibility audit passed

### Post-Deployment:
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Google Analytics setup
- [ ] Search Console verified
- [ ] Sitemap submitted
- [ ] Social media meta tags tested
- [ ] Contact forms working (jika ada)
- [ ] 404 page handling
- [ ] Performance monitoring active

## 🎯 Recommended Deployment Flow

1. **Development** → Local testing
2. **Staging** → Preview deployment (Vercel/Netlify)
3. **Production** → Live deployment
4. **Monitoring** → Analytics dan performance tracking

---

**Website siap untuk go-live! 🚀**

