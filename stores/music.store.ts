import { create } from 'zustand';
import ReactHowler from 'react-howler';

type MusicState = {
  play: boolean;
  loaded: boolean;
  seek: number;
  duration: number;
  isSeeking: boolean;
  decimalToTime: (time: number) => string;
  togglePlay: () => void;
  onLoadHandler: (by: number) => void;
  setSeek: (by: number) => void;
  onMouseDownSeekHandler: () => void;
  onMouseUpSeekHandler: () => void;
  onSeekChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};
export const useMusic = create<MusicState>()((set, get) => ({
  play: false,
  loaded: false,
  seek: 0,
  duration: 0,
  isSeeking: false,
  decimalToTime: (time) =>
    `${Math.floor(time / 60)}:${`${Math.floor(time % 60)}`.padStart(2, '0')}`,
  togglePlay: () => set((state) => ({ play: !state.play })),
  onLoadHandler: (by) => {
    set(() => ({
      loaded: true,
      duration: by,
    }));
  },
  setSeek: (by) => {
    set(() => ({
      seek: by,
    }));
  },
  onMouseDownSeekHandler: () => {
    set(() => ({
      isSeeking: true,
    }));
  },
  onMouseUpSeekHandler: () => {
    set(() => ({
      isSeeking: false,
    }));
  },
  onSeekChangeHandler: (event) => {
    const target = event.target as HTMLInputElement;
    set(() => ({
      seek: parseFloat(target.value),
    }));
  },
  reset: () => {
    set(() => ({
      loaded: false,
      seek: 0,
      duration: 0,
    }));
  },
}));
