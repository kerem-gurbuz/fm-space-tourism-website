import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Destination } from '@/lib/constants/destinations';
import { cn } from '@/lib/utils';

type DestinationCardProps = {
  className?: React.ComponentProps<'div'>['className'];
  destination: Destination;
};

export function DestinationCard({
  className,
  destination,
}: DestinationCardProps) {
  return (
    <Card className={cn('text-center lg:text-left', className)}>
      <CardHeader className="mb-4">
        <CardTitle className="text_preset_2--mobile md:text_preset_2--tablet lg:text_preset_2--desktop uppercase">
          {destination.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop text-blue-300">
          {destination.description}
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
            <p className="text_preset_6--desktop">{destination.distance}</p>
          </div>
          <div className="space-y-3 uppercase">
            <h3 className="text_preset_7--desktop text-blue-300">
              Est. Travel Time
            </h3>
            <p className="text_preset_6--desktop">{destination.travel}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
