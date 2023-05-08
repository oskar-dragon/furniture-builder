'use client';

import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkVariants = cva('text-sm text-gray-600 height-full transition-all ease-in-out', {
  variants: {
    isActive: {
      true: ['text-accent-foreground'],
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

type DesktopNavigationProps = {
  navLinks: { href: string; title: string }[];
  className?: string;
} & VariantProps<typeof linkVariants>;

export function DesktopNavigation({ navLinks, className }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('space-x-4', className)}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link className={cn(linkVariants({ isActive }))} href={link.href} key={link.title}>
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
