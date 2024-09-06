import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

const BACKGROUND_IMAGE_QUALITY = 100;
const COMMON_IMAGE_CLASSES = 'object-cover object-center';
const ERROR_MESSAGE = 'At least one image must be provided!';

type StaticImageProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

type BackgroundImageProps = Partial<{
  containerClassName: string;
  mobileImage: StaticImageProps;
  tabletImage: StaticImageProps;
  desktopImage: StaticImageProps;
}>;

export function BackgroundImage({
  containerClassName,
  mobileImage,
  tabletImage,
  desktopImage,
}: BackgroundImageProps) {
  if (!mobileImage && !tabletImage && !desktopImage) {
    throw new Error(ERROR_MESSAGE);
  }

  return (
    <div className={cn('absolute inset-0 -z-50', containerClassName)}>
      <div className="relative h-full">
        {mobileImage ? (
          <Image
            src={mobileImage.src}
            alt={mobileImage.alt}
            className={cn(COMMON_IMAGE_CLASSES, mobileImage?.className)}
            sizes={mobileImage?.sizes || undefined}
            priority={mobileImage?.priority || false}
            quality={BACKGROUND_IMAGE_QUALITY}
            placeholder="blur"
            fill
          />
        ) : null}
        {tabletImage ? (
          <Image
            src={tabletImage.src}
            alt={tabletImage.alt}
            className={cn(COMMON_IMAGE_CLASSES, tabletImage?.className)}
            sizes={tabletImage?.sizes || undefined}
            priority={tabletImage?.priority || false}
            quality={BACKGROUND_IMAGE_QUALITY}
            placeholder="blur"
            fill
          />
        ) : null}
        {desktopImage ? (
          <Image
            src={desktopImage.src}
            alt={desktopImage.alt}
            className={cn(COMMON_IMAGE_CLASSES, desktopImage?.className)}
            sizes={desktopImage?.sizes || undefined}
            priority={desktopImage?.priority || false}
            quality={BACKGROUND_IMAGE_QUALITY}
            placeholder="blur"
            fill
          />
        ) : null}
      </div>
    </div>
  );
}
