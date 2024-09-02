import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';

export const barlow = Barlow({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
});

export const barlow_condensed = Barlow_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow-condensed',
});

export const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bellefair',
});
