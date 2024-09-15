'use client';

import Image from 'next/image';
import { useState } from 'react';

import { DestinationCard } from '@/components/destination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DESTINATIONS } from '@/lib/constants/destinations';
import { createDescription, slugifyString } from '@/lib/utils';

const INITIAL_DESTINATION_NAME = slugifyString(DESTINATIONS.Moon.name);

export function DestinationTabs() {
  const [destinationName, setDestinationName] = useState<string>(
    INITIAL_DESTINATION_NAME,
  );

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[1fr_auto] items-center justify-items-center gap-8 lg:grid-cols-2 lg:grid-rows-1">
      <div className="relative aspect-square h-[150px] md:h-[300px] lg:h-[400px] xl:h-[480px]">
        <Image
          src={`/assets/destination/image-${destinationName}.webp`}
          alt={createDescription('Image of the', destinationName)}
          className="object-cover object-center"
          sizes="(max-width: 767px) 150px, (max-width: 1023px) 300px, (max-width: 1279px) 400px, 480px"
          priority={destinationName === INITIAL_DESTINATION_NAME}
          quality={100}
          fill
        />
      </div>
      <Tabs
        defaultValue={INITIAL_DESTINATION_NAME}
        className="flex w-full max-w-[514px] flex-col gap-6 lg:max-w-[445px] lg:gap-10"
      >
        <TabsList className="flex h-8 justify-center gap-8 lg:justify-start">
          {Object.values(DESTINATIONS).map(({ name }, index) => (
            <TabsTrigger
              key={index}
              value={slugifyString(name)}
              className="text_preset_8--mobile md:text_preset_8--desktop inline-flex items-start justify-center text-blue-300 data-[state=active]:border-b-[3px] data-[state=active]:border-b-white data-[state=active]:text-white"
              onClick={() => setDestinationName(slugifyString(name))}
            >
              {name.toUpperCase()}
              <span className="sr-only">{name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.values(DESTINATIONS).map((destination, index) => (
          <TabsContent key={index} value={slugifyString(destination.name)}>
            <article aria-label={`Information about the ${destination.name}`}>
              <DestinationCard destination={destination} />
            </article>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
