import type { Metadata } from 'next';

import { BackgroundImage } from '@/components/background-image';
import { CrewTabs } from '@/components/crew';

import desktopImageSrc from '/public/assets/crew/background-desktop.jpg';
import mobileImageSrc from '/public/assets/crew/background-mobile.jpg';
import tabletImageSrc from '/public/assets/crew/background-tablet.jpg';

export const metadata: Metadata = {
  title: 'Crew',
};

const BACKGROUND_IMAGE_ALT =
  'A partially illuminated Earth with visible continents and cloud cover.';

export default function CrewPage() {
  return (
    <div
      id="crew-page"
      className="content_padding--top relative flex min-h-dvh"
    >
      <BackgroundImage
        className="absolute inset-0 -z-50"
        mobileImage={{
          src: mobileImageSrc,
          alt: BACKGROUND_IMAGE_ALT,
          className: 'block md:hidden',
          sizes: '(max-width: 767px) 100vw',
        }}
        tabletImage={{
          src: tabletImageSrc,
          alt: BACKGROUND_IMAGE_ALT,
          className: 'hidden md:block lg:hidden',
          sizes: '(min-width: 768px) and (max-width: 1023px) 100vw',
        }}
        desktopImage={{
          src: desktopImageSrc,
          alt: BACKGROUND_IMAGE_ALT,
          className: 'hidden lg:block',
          sizes: '(min-width: 1024px) 100vw',
          priority: true,
        }}
      />
      <div className="mx-auto flex w-full max-w-[1110px] flex-col gap-6 p-6 md:p-10 lg:px-16 lg:py-12 xl:px-0">
        <h1 className="flex justify-center gap-6 md:justify-start">
          <span className="text_preset_9--mobile-bold md:text_preset_5--tablet lg:text_preset_5--desktop font-bold opacity-25 lg:tracking-[4.72px]">
            02
          </span>
          <span className="text_preset_6--mobile md:text_preset_5--tablet lg:text_preset_5--desktop uppercase">
            Meet your crew
          </span>
        </h1>
        <div className="flex-1">
          <CrewTabs />
        </div>
      </div>
    </div>
  );
}
