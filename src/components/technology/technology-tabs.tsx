'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { TechnologyCard } from '@/components/technology';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TECHNOLOGIES } from '@/lib/constants/technologies';
import { createDescription, slugifyString } from '@/lib/utils';

const INITIAL_TECHNOLOGY_NAME = slugifyString(
  TECHNOLOGIES['Launch Vehicle'].name,
);
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;

export function TechnologyTabs() {
  const [technologyName, setTechnologyName] = useState<string>(
    INITIAL_TECHNOLOGY_NAME,
  );
  const { width: windowWidth } = useWindowSize({
    initializeWithValue: false,
  });

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-8 pt-16 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:pt-0">
      {windowWidth ? (
        <div className="relative -mx-6 h-[258px] md:-mx-10 md:h-[356px] lg:order-last lg:mx-0 lg:h-[600px]">
          <Image
            src={`/assets/technology/image-${technologyName}-${
              windowWidth < MD_BREAKPOINT || windowWidth >= LG_BREAKPOINT
                ? 'portrait'
                : 'landscape'
            }.jpg`}
            alt={createDescription('Image of the', technologyName)}
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 50vw"
            priority={technologyName === INITIAL_TECHNOLOGY_NAME}
            quality={100}
            fill
          />
        </div>
      ) : null}
      <Tabs
        defaultValue={INITIAL_TECHNOLOGY_NAME}
        className="mx-auto flex w-full max-w-[514px] flex-col gap-10 md:max-w-[512px] lg:max-w-[640px] lg:flex-row lg:items-center lg:gap-16"
      >
        <TabsList className="flex h-10 gap-4 md:h-14 lg:h-[304px] lg:flex-col lg:gap-8">
          {Object.values(TECHNOLOGIES).map(({ name }, index) => (
            <TabsTrigger
              key={index}
              value={slugifyString(name)}
              className="text_preset_4--mobile md:text_preset_4--tablet lg:text_preset_4--desktop inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-transparent hover:border-white data-[state=active]:border-white data-[state=active]:bg-white data-[state=active]:text-blue-900 md:h-14 md:w-14 lg:h-20 lg:w-20"
              onClick={() => setTechnologyName(slugifyString(name))}
            >
              {index + 1}
              <span className="sr-only">{name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.values(TECHNOLOGIES).map((technology, index) => (
          <TabsContent key={index} value={slugifyString(technology.name)}>
            <article aria-label={`Information about the ${technology.name}`}>
              <TechnologyCard technology={technology} />
            </article>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
