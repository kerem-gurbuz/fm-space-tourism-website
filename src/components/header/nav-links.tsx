'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavigationLink } from '@/lib/constants/navigation-links';
import { cn } from '@/lib/utils';

type NavLinksProps = {
  className?: React.ComponentProps<'nav'>['className'];
  navListDirection: 'horizontal' | 'vertical';
  navListClassName?: string;
  navLinks: NavigationLink[];
};

export function NavLinks({
  className,
  navListDirection,
  navListClassName,
  navLinks,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="main navigation" className={className}>
      <ul
        className={cn(
          'flex h-full',
          {
            'flex-row': navListDirection === 'horizontal',
            'flex-col': navListDirection === 'vertical',
          },
          navListClassName,
        )}
      >
        {navLinks.map(({ label, href }, index) => {
          const isActive =
            pathname.length === 1
              ? href === '/'
              : pathname.split('/')[1] === href.split('/')[1];

          return (
            <li
              key={index}
              className={cn(
                'border-transparent transition-colors duration-300 hover:border-white/50',
                {
                  'border-b-[3px]': navListDirection === 'horizontal',
                  'border-r-[3px]': navListDirection === 'vertical',
                  'border-white hover:border-white': isActive,
                },
              )}
            >
              <Link
                href={href}
                className="text_preset_8--desktop flex h-full items-center gap-3"
              >
                {navListDirection === 'vertical' ||
                (navListDirection === 'horizontal' && index > 0) ? (
                  <span className="font-bold tracking-[2.7px]">
                    {index.toString().padStart(2, '0')}
                  </span>
                ) : null}
                <span className="uppercase">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
