import Image from 'next/image';
import Link from 'next/link';

import { NavLinks } from '@/components/header/nav-links';
import { Button } from '@/components/ui/button';

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
        <NavLinks containerClassName="hidden flex-1 md:block lg:-ml-4" />

        {/* TODO: Implement mobile menu */}
        <Button className="px-6 md:hidden">
          <Image
            src="/assets/shared/icon-hamburger.svg"
            width={24}
            height={21}
            alt="Mobile Menu"
          />
        </Button>
      </div>
    </header>
  );
}
