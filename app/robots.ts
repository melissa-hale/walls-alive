import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: undefined, // Remove the allow rule
      disallow: '/',    // Block EVERYTHING
    },
    // You can keep the sitemap or remove it for now
    sitemap: 'https://wallsalivetx.com/sitemap.xml',
  };
}