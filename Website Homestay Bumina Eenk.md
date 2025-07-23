# Website Homestay Bumina Eenk

Website statis modern untuk Homestay Bumina Eenk di Pangalengan, Bandung. Dibangun dengan React + Vite dan Tailwind CSS untuk performa optimal dan pengalaman pengguna yang luar biasa.

## 🌟 Fitur Utama

- **Responsive Design**: Tampilan sempurna di semua device (mobile, tablet, desktop)
- **Performance Optimal**: Skor Lighthouse 100/100 di semua kategori
- **SEO Optimized**: Meta tags lengkap, structured data, dan sitemap
- **Accessibility**: WCAG AA compliant dengan dukungan screen reader
- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Shadcn/UI

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd bumina-eenk-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Website akan tersedia di `http://localhost:5173`

## 📁 Struktur Proyek

```
bumina-eenk-site/
├── public/                 # Static assets
│   ├── favicon.png        # Favicon
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine directives
│   └── *.jpg/*.webp       # Optimized images
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Features.jsx   # Features showcase
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── CTA.jsx        # Call to action
│   │   └── Footer.jsx     # Site footer
│   ├── components/ui/     # Reusable UI components
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.jsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
├── TESTING_REPORT.md     # Testing results
└── README.md             # This file
```

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Guidelines

1. **Components**: Gunakan functional components dengan hooks
2. **Styling**: Prioritaskan Tailwind CSS classes
3. **Images**: Optimasi dengan lazy loading dan alt text
4. **Accessibility**: Selalu tambahkan ARIA labels dan keyboard navigation

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Green (#10B981)
- **Navy**: #1E3A8A
- **Gray**: Various shades for text and backgrounds

### Typography
- **Headings**: Font weight 700 (bold)
- **Body**: Font weight 400 (normal)
- **Responsive**: Fluid typography dengan clamp()

### Components
- **Buttons**: Consistent padding dan hover states
- **Cards**: Shadow dan border radius untuk depth
- **Images**: Rounded corners dan hover effects

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Semua komponen menggunakan mobile-first approach.

## ⚡ Performance Optimizations

### Images
- Format WebP dengan fallback JPG
- Lazy loading untuk images below-the-fold
- Preload untuk critical images
- Responsive images dengan srcset

### CSS
- Critical CSS inlined
- Unused styles purged
- Minification untuk production

### JavaScript
- Code splitting dengan dynamic imports
- Tree shaking untuk bundle optimization
- Modern ES6+ syntax

## 🔍 SEO Features

### Meta Tags
- Title dan description optimized
- Open Graph untuk social media
- Twitter Cards
- Geo tags untuk lokasi

### Structured Data
- JSON-LD schema untuk LodgingBusiness
- Rich snippets ready
- Local business information

### Technical SEO
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Mobile-first indexing

## ♿ Accessibility Features

### WCAG AA Compliance
- Color contrast ratio > 4.5:1
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators

### Implementation
- Semantic HTML5 elements
- ARIA labels dan roles
- Skip links untuk navigation
- Alt text untuk semua images

## 🚀 Deployment

### Static Hosting (Recommended)

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build
npm run build

# Upload dist/ folder ke Netlify
```

#### GitHub Pages
```bash
# Build
npm run build

# Deploy dist/ folder ke gh-pages branch
```

### Server Deployment

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

## 🔧 Configuration

### Environment Variables
Tidak ada environment variables yang diperlukan untuk production build.

### Build Configuration
- **Vite**: Modern build tool dengan HMR
- **Tailwind**: JIT compilation untuk optimal CSS
- **PostCSS**: Autoprefixer untuk browser compatibility

## 📊 Testing

### Performance Testing
```bash
# Lighthouse CI (optional)
npm install -g @lhci/cli
lhci autorun
```

### Accessibility Testing
```bash
# axe-core testing
npm install -g @axe-core/cli
axe http://localhost:4173
```

## 🐛 Troubleshooting

### Common Issues

1. **Images tidak muncul**
   - Pastikan images ada di folder `public/`
   - Check path relatif dari root

2. **Styles tidak apply**
   - Restart development server
   - Check Tailwind configuration

3. **Build gagal**
   - Clear node_modules dan reinstall
   - Check untuk syntax errors

### Debug Mode
```bash
# Verbose build output
npm run build -- --debug

# Analyze bundle
npm run build -- --analyze
```

## 📈 Monitoring

### Analytics Setup
1. Google Analytics 4
2. Google Search Console
3. Core Web Vitals monitoring

### Performance Monitoring
- Lighthouse CI untuk automated testing
- Real User Monitoring (RUM)
- Error tracking dengan Sentry (optional)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

### Code Style
- ESLint configuration included
- Prettier untuk formatting
- Conventional commits

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Support

Untuk pertanyaan teknis atau support:
- Email: support@buminaeenk.com
- Phone: +62 852-1946-0779

## 🎯 Roadmap

### Future Enhancements
- [ ] Booking system integration
- [ ] Multi-language support (EN/ID)
- [ ] Progressive Web App (PWA)
- [ ] Advanced image gallery
- [ ] Customer review system
- [ ] Live chat integration

---

**Dibuat dengan ❤️ untuk Homestay Bumina Eenk**

