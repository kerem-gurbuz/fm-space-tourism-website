import { BackgroundImage } from '@/components/background-image';
import { Hero } from '@/components/home';

import desktopImageSrc from '/public/assets/home/background-desktop.jpg';
import mobileImageSrc from '/public/assets/home/background-mobile.jpg';
import tabletImageSrc from '/public/assets/home/background-tablet.jpg';

const BACKGROUND_IMAGE_ALT =
  'A breathtaking nighttime image of Earth, illuminated by the glow of urban centers against a backdrop of stars.';

export default function HomePage() {
  return (
    <div
      id="home-page"
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
      <div className="mx-auto w-full max-w-[1110px] p-6 md:px-10 md:py-32 lg:px-16 xl:px-0">
        <Hero />
      </div>
    </div>
  );
}
