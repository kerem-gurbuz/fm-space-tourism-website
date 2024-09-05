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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
