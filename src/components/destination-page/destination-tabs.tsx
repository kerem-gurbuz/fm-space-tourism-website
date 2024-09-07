import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DESTINATIONS } from '@/lib/constants/destinations';
import { transformString } from '@/lib/utils';

const DESTINATION_NAMES = DESTINATIONS.map((destination) =>
  transformString(destination.name),
);

export function DestinationTabs() {
  return (
    <Tabs defaultValue={DESTINATION_NAMES[0]}>
      <TabsList className="inline-flex h-8 w-full items-stretch justify-center gap-8 lg:justify-start">
        {DESTINATION_NAMES.map((destinationName, index) => (
          <TabsTrigger
            key={index}
            value={destinationName}
            className="text_preset_8--mobile md:text_preset_8--desktop inline-flex items-start justify-center text-blue-300 data-[state=active]:border-b-[3px] data-[state=active]:border-b-white data-[state=active]:text-white"
          >
            {destinationName.toUpperCase().replace('-', ' ')}
          </TabsTrigger>
        ))}
      </TabsList>
      {DESTINATIONS.map((destination, index) => (
        <TabsContent key={index} value={DESTINATION_NAMES[index]}>
          {destination.description}
        </TabsContent>
      ))}
    </Tabs>
  );
}
