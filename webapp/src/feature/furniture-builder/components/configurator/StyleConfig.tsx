'use client';

import { Button } from '@/components/ui';
import { useConfiguratorStore } from '../../store/configuratorStore';
import { cn } from '@/utils';

type ButtonConfig = {
  id: 'grid' | 'gradient' | 'pattern' | 'frame';
  title: string;
};

const buttonsConfig: ButtonConfig[] = [
  {
    id: 'grid',
    title: 'Grid',
  },
  {
    id: 'gradient',
    title: 'Gradient',
  },
  {
    id: 'pattern',
    title: 'Pattern',
  },
  {
    id: 'frame',
    title: 'Frame',
  },
];

type StyleConfigProps = {
  className?: string;
};

export function StyleConfig({ className }: StyleConfigProps) {
  const currentStyle = useConfiguratorStore((state) => state.style);
  const updateStyle = useConfiguratorStore((state) => state.updateStyle);

  return (
    <div className={cn('flex flex-row space-x-2', className)}>
      {buttonsConfig.map((btnConfig) => {
        const isActive = currentStyle === btnConfig.id;
        const variant = isActive ? 'outline-active' : 'secondary';

        return (
          <Button key={btnConfig.id} size="sm" variant={variant} onClick={() => updateStyle(btnConfig.id)}>
            {btnConfig.title}
          </Button>
        );
      })}
    </div>
  );
}
