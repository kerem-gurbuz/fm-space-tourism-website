import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Destination } from '@/lib/constants/destinations';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  const { name, description, distance, travel } = destination;

  return (
    <Card className="text-center lg:text-left">
      <CardHeader className="mb-4">
        <CardTitle className="text_preset_2--mobile md:text_preset_2--tablet lg:text_preset_2--desktop uppercase">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop text-blue-300">
          {description}
        </p>
        <Separator
          orientation="horizontal"
          className="my-6 bg-white opacity-25 lg:my-10"
          decorative
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-3 uppercase">
            <h3 className="text_preset_7--desktop text-blue-300">
              Avg. Distance
            </h3>
            <p className="text_preset_6--desktop">{distance}</p>
          </div>
          <div className="space-y-3 uppercase">
            <h3 className="text_preset_7--desktop text-blue-300">
              Est. Travel Time
            </h3>
            <p className="text_preset_6--desktop">{travel}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
