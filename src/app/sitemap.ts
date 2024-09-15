import type { MetadataRoute } from 'next';

import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';

const WEBSITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.values(NAVIGATION_LINKS).map(({ href }) => ({
      url: `${WEBSITE_URL}${href}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    })),
  ];
}
