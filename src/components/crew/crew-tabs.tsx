'use client';

import { useState } from 'react';

import { CrewCard, CrewImage } from '@/components/crew';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CREW } from '@/lib/constants/crew';
import { slugifyString } from '@/lib/utils';

const INITIAL_CREW_MEMBER_NAME = slugifyString(CREW['Douglas Hurley'].name);

export function CrewTabs() {
  const [crewMemberName, setCrewMemberName] = useState<string>(
    INITIAL_CREW_MEMBER_NAME,
  );

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-8 lg:grid-cols-2 lg:grid-rows-1">
      <Tabs
        defaultValue={INITIAL_CREW_MEMBER_NAME}
        className="relative mx-auto h-[319px] w-full max-w-[514px] md:h-[305px] md:max-w-[512px] lg:mx-0 lg:h-full lg:min-w-[445px] lg:max-w-full lg:pb-12"
      >
        <TabsList className="absolute inset-x-0 bottom-0 flex h-[10px] justify-center gap-4 lg:bottom-12 lg:h-[15px] lg:justify-start lg:gap-10">
          {Object.values(CREW).map(({ name }, index) => (
            <TabsTrigger
              key={index}
              value={slugifyString(name)}
              className="h-[10px] w-[10px] rounded-full bg-white opacity-20 hover:opacity-50 data-[state=active]:opacity-100 lg:h-[15px] lg:w-[15px]"
              onClick={() => setCrewMemberName(slugifyString(name))}
            >
              <span className="sr-only">{name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.values(CREW).map((crewMember, index) => (
          <TabsContent
            key={index}
            value={slugifyString(crewMember.name)}
            className="absolute inset-x-0 bottom-[34px] top-0 flex pt-10 lg:bottom-[103px] lg:items-center lg:pt-0"
          >
            <article aria-label={`Information about ${crewMember.name}`}>
              <CrewCard crewMember={crewMember} />
            </article>
          </TabsContent>
        ))}
      </Tabs>
      <CrewImage
        initialCrewMemberName={INITIAL_CREW_MEMBER_NAME}
        crewMemberName={crewMemberName}
      />
    </div>
  );
}
