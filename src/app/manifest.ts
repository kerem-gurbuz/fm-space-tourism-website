import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Space Travel - Explore the Universe',
    short_name: 'Space Travel',
    description:
      'Experience the ultimate adventure by traveling to outer space. Explore our site to learn more about our destinations, crew, and technology. Get ready for a truly out-of-this-world experience!',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
  };
}
