import { Header } from '@/components/header';
import { cn } from '@/lib/utils';
import { barlow, barlow_condensed, bellefair } from '@/styles/fonts';
import '@/styles/globals.css';

export { metadata } from '@/lib/seo/metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-900`}
    >
      <body
        className={cn(
          'relative antialiased',
          barlow.variable,
          barlow_condensed.variable,
          bellefair.variable,
        )}
      >
        <Header className="absolute inset-x-0 top-0 z-50" />
        <main>{children}</main>
      </body>
    </html>
  );
}
