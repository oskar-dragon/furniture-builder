import { StyleConfig } from './StyleConfig';

export function DesktopConfigurator() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Style</p>
        <StyleConfig />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Width</p>
        <StyleConfig />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Height</p>
        <StyleConfig />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Depth</p>
        <StyleConfig />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Feet</p>
        <StyleConfig />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Columns</p>
        <StyleConfig />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Back panels</p>
        <StyleConfig />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <p className="text-sm">Colour</p>
        <StyleConfig />
      </div>
    </div>
  );
}
