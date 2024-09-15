import type { MetadataRoute } from 'next';

const WEBSITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
