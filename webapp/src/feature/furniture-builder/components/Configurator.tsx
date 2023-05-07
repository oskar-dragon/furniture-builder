'use client';

type ConfiguratorProps = {
  style: 'grid' | 'gradient' | 'pattern' | 'frame';
  width: string;
  height: string;
  depth: '24' | '32' | '40' | '50';
  feet: 'standard' | 'legs';
  columns: number;
  backPanels: boolean;
  colour: string;
};

export function Configurator({}: ConfiguratorProps) {
  return <div>Configurator</div>;
}
