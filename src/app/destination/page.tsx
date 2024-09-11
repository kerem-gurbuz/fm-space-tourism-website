import { BackgroundImage } from '@/components/background-image';
import { DestinationTabs } from '@/components/destination';

import desktopImageSrc from '/public/assets/destination/background-desktop.jpg';
import mobileImageSrc from '/public/assets/destination/background-mobile.jpg';
import tabletImageSrc from '/public/assets/destination/background-tablet.jpg';

const BACKGROUND_IMAGE_ALT =
  'A night sky filled with stars, with the Milky Way galaxy visible as a faint band across the center.';

export default function DestinationPage() {
  return (
    <div
      id="destination-page"
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
            01
          </span>
          <span className="text_preset_6--mobile md:text_preset_5--tablet lg:text_preset_5--desktop uppercase">
            Pick your destination
          </span>
        </h1>
        <div className="flex-1">
          <DestinationTabs />
        </div>
      </div>
    </div>
  );
}
