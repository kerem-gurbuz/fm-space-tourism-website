import Link from 'next/link';

import { BackgroundImage } from '@/components/background-image';
import { Button } from '@/components/ui/button';
import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';

import desktopImageSrc from '/public/assets/home/background-desktop.jpg';
import mobileImageSrc from '/public/assets/home/background-mobile.jpg';
import tabletImageSrc from '/public/assets/home/background-tablet.jpg';

const EXPLORE_BUTTON_LINK = NAVIGATION_LINKS.DESTINATION.href;
const BACKGROUND_IMAGE_ALT =
  'A breathtaking nighttime image of Earth, illuminated by the glow of urban centers against a backdrop of stars.';

export default function NotFound() {
  return (
    <div
      id="not-found"
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
        <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-8 md:grid-rows-[auto_auto] lg:grid-cols-2 lg:content-end lg:gap-0">
          {/* Text Block */}
          <div className="mx-auto max-w-[540px] md:w-[512px] md:self-start lg:mx-0 lg:w-full lg:self-center lg:justify-self-start">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="flex flex-col gap-6 uppercase">
                <span className="text_preset_6--mobile md:text_preset_5--desktop text-blue-300">
                  We Couldn&apos;t Find That Page, Either...
                </span>
                <span className="text_preset_1--mobile md:text_preset_1--desktop">
                  404
                </span>
              </h1>
              <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop text-blue-300">
                We apologize for the inconvenience. It seems like you&apos;ve
                taken a detour on your space journey. Let&apos;s get you back on
                track.
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="mx-auto max-w-[540px] md:w-[512px] md:self-end lg:mx-0 lg:w-full lg:self-center lg:justify-self-end">
            <div className="flex h-full items-center justify-center md:items-end lg:items-center lg:justify-end">
              <Button
                className="text_preset_4--mobile md:text_preset_4--desktop h-[144px] w-[144px] rounded-full bg-white p-0 uppercase text-blue-900 transition-all duration-300 hover:bg-white hover:text-blue-900/50 hover:ring-[88px] hover:ring-white/10 md:h-[272px] md:w-[272px]"
                asChild
              >
                <Link href={EXPLORE_BUTTON_LINK}>Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
