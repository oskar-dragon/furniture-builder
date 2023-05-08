import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  style: 'grid' | 'gradient' | 'pattern' | 'frame';
  width: number;
  height: number;
  depth: 24 | 32 | 40 | 50;
  feet: 'standard' | 'legs';
  columns: number;
  backPanels: boolean;
  colour: string;
};

type Actions = {
  updateStyle: (style: State['style']) => void;
};

const initialState: State = {
  style: 'grid',
  width: 170,
  height: 43,
  depth: 40,
  feet: 'standard',
  columns: 4,
  backPanels: true,
  colour: 'black',
};

type ConfiguratorState = State & Actions;

export const useConfiguratorStore = create(
  devtools(
    immer<ConfiguratorState>((set, get) => ({
      ...initialState,
      updateStyle: (updatedStyle) =>
        set((state) => {
          state.style = updatedStyle;
        }),
    })),
  ),
);
