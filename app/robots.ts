import type { MetadataRoute } from 'next';

const siteUrl = process.env.APP_URL ?? 'https://www.geopilarpersada.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
