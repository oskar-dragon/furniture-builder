import { cn } from '@/utils';

export type DividerProps = {
  className?: string;
};

export function Divider({ className }: DividerProps) {
  return <div className={cn('border border-gray-100', className)} />;
}
