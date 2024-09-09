'use client';

import Image from 'next/image';
import { useState } from 'react';

import { DestinationCard } from '@/components/destination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DESTINATIONS } from '@/lib/constants/destinations';

type DestinationTabsProps = {
  className?: React.ComponentProps<'div'>['className'];
};

export function DestinationTabs({ className }: DestinationTabsProps) {
  const [destinationName, setDestinationName] = useState<string>(
    DESTINATIONS.Moon.name.toLowerCase(),
  );

  return (
    <div className={className}>
      <div className="relative aspect-square h-[150px] md:h-[300px] lg:h-[400px] xl:h-[480px]">
        <Image
          src={`/assets/destination/image-${destinationName}.webp`}
          alt={`Image of the ${destinationName}`}
          className="object-cover object-center"
          sizes="(max-width: 767px) 150px, (max-width: 1023px) 300px, (max-width: 1279px) 400px, 480px"
          quality={100}
          fill
        />
      </div>

      <Tabs
        defaultValue={DESTINATIONS.Moon.name.toLowerCase()}
        className="flex flex-col items-center gap-6 lg:items-start lg:gap-10"
      >
        <TabsList className="flex h-8 gap-8">
          {Object.values(DESTINATIONS).map(({ name }, index) => (
            <TabsTrigger
              key={index}
              value={name.toLowerCase()}
              className="text_preset_8--mobile md:text_preset_8--desktop inline-flex items-start justify-center text-blue-300 data-[state=active]:border-b-[3px] data-[state=active]:border-b-white data-[state=active]:text-white"
              onClick={() => setDestinationName(name.toLowerCase())}
            >
              {name.toUpperCase()}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.values(DESTINATIONS).map((destination, index) => (
          <TabsContent key={index} value={destination.name.toLowerCase()}>
            <DestinationCard
              className="w-full max-w-[514px] lg:max-w-[445px]"
              destination={destination}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
