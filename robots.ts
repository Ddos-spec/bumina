import { MetadataRoute } from 'next'

// Tambahkan baris ini untuk menandakan ini adalah route statis
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://buminaeenk.com/sitemap.xml', // Gue benerin juga URL sitemap-nya
  }
}
