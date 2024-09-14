import Image from 'next/image';

import { createDescription } from '@/lib/utils';

type CrewImageProps = {
  initialCrewMemberName: string;
  crewMemberName: string;
};

export function CrewImage({
  initialCrewMemberName,
  crewMemberName,
}: CrewImageProps) {
  return (
    <div className="flex items-center justify-center lg:items-end">
      {/* Mobile Image  */}
      <div className="relative block h-full min-h-[340px] w-full md:hidden">
        <Image
          src={`/assets/crew/image-${crewMemberName}.webp`}
          alt={createDescription('Image of', crewMemberName)}
          className="object-contain object-center"
          sizes="(max-width: 767px) 100vw"
          priority={crewMemberName === initialCrewMemberName}
          quality={100}
          fill
        />
        {/* Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent to-25%" />
      </div>
      {/* Tablet Image  */}
      <div className="fixed bottom-0 top-[521px] hidden h-[560px] w-full md:block lg:hidden">
        <Image
          src={`/assets/crew/image-${crewMemberName}.webp`}
          alt={createDescription('Image of', crewMemberName)}
          className="object-contain object-top"
          sizes="(min-width: 768px) and (max-width: 1023px) 100vw"
          priority={crewMemberName === initialCrewMemberName}
          quality={100}
          fill
        />
      </div>
      {/* Desktop Image  */}
      <div className="relative hidden h-full w-full lg:block">
        <Image
          src={`/assets/crew/image-${crewMemberName}.webp`}
          alt={createDescription('Image of', crewMemberName)}
          className="object-contain object-bottom"
          sizes="(min-width: 1024px) 100vw"
          priority={crewMemberName === initialCrewMemberName}
          quality={100}
          fill
        />
        {/* Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent to-25%" />
      </div>
    </div>
  );
}
