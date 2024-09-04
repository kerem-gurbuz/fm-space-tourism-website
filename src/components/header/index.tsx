import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/components/header/nav-links';
import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';
import { NavMenu } from './nav-menu';

export function Header() {
  return (
    <header id="header" className="bg-gray-900">
      <div className="flex items-center justify-between py-6 md:py-0 lg:pt-10">
        <div className="flex items-center justify-start lg:w-1/2">
          <div className="px-6 md:px-10 lg:px-16">
            <Link href="/" className="relative block h-10 w-10 md:h-12 md:w-12">
              <Image src="/assets/shared/logo.svg" alt="Logo" fill priority />
            </Link>
          </div>
          <div className="hidden h-[1px] w-full bg-white opacity-25 lg:-mr-4 lg:block" />
        </div>
        <NavLinks
          containerClassName="hidden h-24 flex-1 bg-white/5 px-10 md:block lg:-ml-4 lg:px-16"
          navListClassName="flex justify-end gap-12"
          navListDirection="horizontal"
          navLinks={NAVIGATION_LINKS}
        />
        <NavMenu />
      </div>
    </header>
  );
}
