import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Optional: add any folders you actually want to hide
    },
    sitemap: 'https://wallsalivetx.com/sitemap.xml',
  };
}