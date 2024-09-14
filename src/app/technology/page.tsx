import { BackgroundImage } from '@/components/background-image';
import { TechnologyTabs } from '@/components/technology';

import desktopImageSrc from '/public/assets/technology/background-desktop.jpg';
import mobileImageSrc from '/public/assets/technology/background-mobile.jpg';
import tabletImageSrc from '/public/assets/technology/background-tablet.jpg';

const BACKGROUND_IMAGE_ALT =
  'Star trails dance across the midnight canvas, leaving ethereal arcs of light.';

export default function TechnologyPage() {
  return (
    <div
      id="technology-page"
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
      <div className="mx-auto flex w-full max-w-[1275px] flex-col gap-6 p-6 pb-12 md:p-10 lg:py-12 lg:pl-16 lg:pr-0 xl:ml-auto xl:mr-0 min-[1441px]:mx-auto min-[1441px]:px-0">
        <h1 className="flex justify-center gap-6 md:justify-start">
          <span className="text_preset_9--mobile-bold md:text_preset_5--tablet lg:text_preset_5--desktop font-bold opacity-25 lg:tracking-[4.72px]">
            03
          </span>
          <span className="text_preset_6--mobile md:text_preset_5--tablet lg:text_preset_5--desktop uppercase">
            Space launch 101
          </span>
        </h1>
        <div className="flex-1">
          <TechnologyTabs />
        </div>
      </div>
    </div>
  );
}
