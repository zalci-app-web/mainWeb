import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zalci.net',
      lastModified: new Date('2026-02-22'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
