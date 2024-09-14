import type { Metadata } from 'next';

import { Header } from '@/components/header';
import { barlow, barlow_condensed, bellefair } from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
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
  authors: [
    {
      name: 'Kerem GÜRBÜZ',
      url: 'https://www.linkedin.com/in/kerem-g%C3%BCrb%C3%BCz-85b2032b5',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlow_condensed.variable} ${bellefair.variable}`}
    >
      <body className="text-white antialiased">
        <Header className="fixed inset-x-0 top-0 z-50" />
        <main>{children}</main>
      </body>
    </html>
  );
}
