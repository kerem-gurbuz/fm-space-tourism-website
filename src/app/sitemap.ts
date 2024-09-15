import type { MetadataRoute } from 'next';

import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';

const DEPLOYMENT_URL = process.env.DEPLOYMENT_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.values(NAVIGATION_LINKS).map(({ href }) => ({
      url: `${DEPLOYMENT_URL}${href}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    })),
  ];
}
