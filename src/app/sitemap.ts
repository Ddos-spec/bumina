import { MetadataRoute } from 'next'

// Tambahkan baris ini juga
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti baseUrl sesuai dengan alamat GitHub Pages lo
  const baseUrl = 'https://buminaeenk.com/'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
