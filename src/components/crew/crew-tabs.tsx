'use client';

import { useState, useTransition } from 'react';

import { CrewImage } from '@/components/crew';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CREW } from '@/lib/constants/crew';
import { slugifyString } from '@/lib/utils';

const INITIAL_CREW_MEMBER_NAME = slugifyString(CREW['Douglas Hurley'].name);

export function CrewTabs() {
  const [isPending, startTransition] = useTransition();
  const [crewMemberName, setCrewMemberName] = useState<string>(
    INITIAL_CREW_MEMBER_NAME,
  );

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-8 lg:grid-cols-2 lg:grid-rows-1">
      <Tabs
        defaultValue={INITIAL_CREW_MEMBER_NAME}
        className="mx-auto flex h-[319px] w-full max-w-[514px] flex-col gap-6 pt-10 md:h-[305px] md:max-w-[512px] lg:h-full lg:min-w-[445px] lg:gap-10 lg:pb-12 lg:pt-0"
      >
        {Object.values(CREW).map((crewMember, index) => (
          <TabsContent key={index} value={slugifyString(crewMember.name)}>
            <article aria-label={`Information about ${crewMember.name}`}>
              {/* TODO: Add crew member information */}
            </article>
          </TabsContent>
        ))}
        <TabsList className="flex h-[10px] justify-center gap-4 lg:justify-start lg:gap-10">
          {Object.values(CREW).map(({ name }, index) => (
            <TabsTrigger
              key={index}
              value={slugifyString(name)}
              className="h-[10px] w-[10px] rounded-full bg-white opacity-20 hover:opacity-50 data-[state=active]:opacity-100 lg:h-[15px] lg:w-[15px]"
              onClick={() =>
                startTransition(() => setCrewMemberName(slugifyString(name)))
              }
            >
              <span className="sr-only">{name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <CrewImage
        initialCrewMemberName={INITIAL_CREW_MEMBER_NAME}
        crewMemberName={crewMemberName}
        isPending={isPending}
      />
    </div>
  );
}
