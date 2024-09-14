import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { CrewMember } from '@/lib/constants/crew';

type CrewCardProps = {
  crewMember: CrewMember;
};

export function CrewCard({ crewMember }: CrewCardProps) {
  const { name, role, bio } = crewMember;

  return (
    <Card className="flex h-full flex-col gap-6 text-center lg:text-left">
      <CardHeader className="flex flex-col gap-2 uppercase md:gap-4">
        <CardDescription className="text_preset_4--mobile md:text_preset_4--tablet lg:text_preset_4--desktop opacity-50">
          {role}
        </CardDescription>
        <CardTitle className="text_preset_3--mobile md:text_preset_3--tablet lg:text_preset_3--desktop">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text_preset_9--mobile md:text_preset_9--tablet lg:text_preset_9--desktop h-full text-blue-300">
          {bio}
        </p>
      </CardContent>
    </Card>
  );
}
