import { currencyFormatter } from '@/utils';
import { cn } from '@/utils/cn';
import { Check } from 'lucide-react';

type FurnitureHeaderProps = {
  className?: string;
  name: string;
  price: number;
};

export function FurnitureHeader({ className, name, price }: FurnitureHeaderProps) {
  return (
    <div className={cn('px-4 lg:px-0', className)}>
      <div className="lg:flex lg:justify-between">
        <div className="tems-center flex justify-between lg:flex-col lg:items-start lg:space-y-2">
          <h1 className="text-xs">{name}</h1> <p className="text-sm md:text-xl">{currencyFormatter(price)}</p>
        </div>
        <div className="hidden space-y-2 lg:block">
          <p className="flex items-center text-xs">
            <Check className="mr-1 flex h-3 w-3 items-center text-emerald-500" />
            Taxes Included
          </p>

          <p className="flex items-center text-xs">
            <Check className="mr-1 flex h-3 w-3 items-center text-emerald-500" />
            Ships in 2-3 weeks
          </p>
        </div>
      </div>
    </div>
  );
}
