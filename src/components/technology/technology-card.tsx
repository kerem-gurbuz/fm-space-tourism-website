import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Technology } from '@/lib/constants/technologies';

type TechnologyCardProps = {
  technology: Technology;
};

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const { name, description } = technology;

  return (
    <Card className="flex h-full flex-col gap-4 text-center lg:gap-6 lg:text-left">
      <CardHeader className="flex flex-col gap-4 uppercase">
        <CardDescription className="text_preset_4--mobile md:text_preset_4--tablet lg:text_preset_4--desktop opacity-50">
          The terminology...
        </CardDescription>
        <CardTitle className="text_preset_3--mobile md:text_preset_3--tablet lg:text_preset_3--desktop">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop h-full text-blue-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
