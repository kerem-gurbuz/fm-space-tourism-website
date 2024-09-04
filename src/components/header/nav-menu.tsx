import Image from 'next/image';

import { NavLinks } from '@/components/header/nav-links';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';

export function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger className="mx-6 md:hidden">
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="Open mobile menu"
          width={24}
          height={21}
        />
        <span className="sr-only">Open mobile menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="min-h-dvh w-[254px] border-none bg-blue-900/15 p-0 pl-8 pt-[133px]"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation menu</SheetTitle>
          <SheetDescription>
            Mobile navigation menu for mobile devices
          </SheetDescription>
        </SheetHeader>
        <NavLinks
          navListClassName="flex justify-start gap-8"
          navListDirection="vertical"
          navLinks={NAVIGATION_LINKS}
        />
      </SheetContent>
    </Sheet>
  );
}
