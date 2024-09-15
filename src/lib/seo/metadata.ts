import type { Metadata } from 'next';

const DEPLOYMENT_URL = process.env.DEPLOYMENT_URL!;
const AUTHOR_URL = 'https://www.linkedin.com/in/gurbuz-kerem/';

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYMENT_URL),
  title: {
    template: '%s | Space Travel',
    default: 'Space Travel - Explore the Universe',
  },
  description:
    'Experience the ultimate adventure by traveling to outer space. Explore our site to learn more about our destinations, crew, and technology. Get ready for a truly out-of-this-world experience!',
  keywords: [
    'space travel',
    'space exploration',
    'space tourism',
    'space agency',
    'planets',
    'astronauts',
    'technology',
  ],
  creator: 'Kerem Gürbüz',
  authors: [
    {
      name: 'Kerem Gürbüz',
      url: AUTHOR_URL,
    },
  ],
  openGraph: {
    title: 'Space Travel - Explore the Universe',
    description:
      'Experience the ultimate adventure by traveling to outer space. Explore our site to learn more about our destinations, crew, and technology. Get ready for a truly out-of-this-world experience!',
    url: DEPLOYMENT_URL,
    siteName: 'Space Travel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Space Travel - Explore the Universe',
    description:
      'Experience the ultimate adventure by traveling to outer space. Explore our site to learn more about our destinations, crew, and technology. Get ready for a truly out-of-this-world experience!',
    site: DEPLOYMENT_URL,
    card: 'summary_large_image',
    creator: 'Kerem Gürbüz',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark',
  },
};
