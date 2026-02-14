import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block private folders if you ever have them
    },
    sitemap: 'https://wallsalivetx.com/sitemap.xml',
  };
}