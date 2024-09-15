import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/components/header/nav-links';
import { NavMenu } from '@/components/header/nav-menu';
import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';

type HeaderProps = {
  className?: React.ComponentProps<'header'>['className'];
};

export function Header({ className }: HeaderProps) {
  return (
    <header id="header" className={className}>
      <div className="flex items-center justify-between py-6 md:py-0 lg:pt-10">
        {/* Logo Container */}
        <div className="flex items-center justify-start lg:w-1/2">
          <div className="px-6 md:px-10 lg:px-16">
            <Link href="/" className="relative block h-10 w-10 md:h-12 md:w-12">
              <Image src="/assets/shared/logo.svg" alt="Logo" fill priority />
            </Link>
          </div>
          <div className="z-10 hidden h-[1px] w-full bg-white opacity-25 lg:-mr-4 lg:block" />
        </div>
        {/* Desktop & Tablet Navigation Bar */}
        <div className="hidden flex-1 md:block lg:-ml-4">
          <NavLinks
            className="h-24 bg-white/5 px-10 backdrop-blur-2xl lg:px-16"
            navListDirection="horizontal"
            navListClassName="justify-end gap-12"
            navLinks={Object.values(NAVIGATION_LINKS)}
          />
        </div>
        {/* Mobile Navigation Menu */}
        <div className="px-6 md:hidden">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
