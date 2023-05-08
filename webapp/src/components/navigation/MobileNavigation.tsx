'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';
import { usePathname } from 'next/navigation';
import { VariantProps, cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';

const linkVariants = cva('text-sm text-gray-600 height-full block transition-all ease-in-out', {
  variants: {
    isActive: {
      true: ['text-accent-foreground'],
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

type MobileNavigationProps = {
  navLinks: { href: string; title: string }[];
  className?: string;
} & VariantProps<typeof linkVariants>;

export function MobileNavigation({ navLinks, className }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  function toggle() {
    setIsOpen((prevValue) => !prevValue);
  }

  function selectRoute(path: string) {
    router.push(path);
    setIsOpen(false);
  }

  return (
    <div className={cn(className)}>
      <Button variant="menu" size="none" className="flex flex-col space-y-1" onClick={() => toggle()}>
        <span
          className={cn(
            'h-[1px] w-4 bg-gray-400 transition-all ease-in-out',
            `${isOpen && 'translate-y-[2px] rotate-45'}`,
          )}
        />
        <span className={cn('h-[1px] w-4 bg-gray-400 transition-all ease-in-out', `${isOpen && 'hidden'}`)} />
        <span
          className={cn(
            'h-[1px] w-4 bg-gray-400 transition-all ease-in-out',
            `${isOpen && '-translate-y-[3px] -rotate-45'}`,
          )}
        />
      </Button>
      <nav
        className={cn(
          'navbar-container direction-column absolute left-0 mt-2 w-60 space-y-2 bg-neutral-50 px-4 py-4 transition-all',
          `${isOpen ? 'block' : '-translate-x-full'}`,
        )}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <button className={cn(linkVariants({ isActive }))} key={link.title} onClick={() => selectRoute(link.href)}>
              {link.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
