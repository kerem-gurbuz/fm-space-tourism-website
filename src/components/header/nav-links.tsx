'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAVIGATION_LINKS } from '@/lib/constants/navigation-links';
import { cn } from '@/lib/utils';

type NavLinksProps = {
  containerClassName?: string;
};

export function NavLinks({ containerClassName }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('h-24 bg-white/5 px-10 lg:px-16', containerClassName)}>
      <ul className="flex h-full justify-end gap-12">
        {NAVIGATION_LINKS.map(({ label, href }, index) => (
          <li
            key={index}
            className={cn(
              'border-b-[3px] border-transparent transition-colors duration-300 hover:border-white/50',
              {
                'border-white hover:border-white': pathname === href,
              },
            )}
          >
            <Link
              href={href}
              className="text_preset_8--desktop flex h-full items-center gap-3"
            >
              {index > 0 ? (
                <span className="font-bold tracking-[2.7px]">
                  {index.toString().padStart(2, '0')}
                </span>
              ) : null}
              <span className="uppercase">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
