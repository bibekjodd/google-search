import { create } from "zustand";

interface UseLoadingBar {
  initial: boolean;
  progress: number;

  initialLoaded: () => void;
  start: (url?: string) => boolean;
  finish: () => void;
}

const useLoadingBar = create<UseLoadingBar>((set) => ({
  progress: 0,
  initial: true,

  initialLoaded() {
    set({ initial: false });
  },
  start(url) {
    const currentUrl = location.pathname + location.search;
    if (currentUrl === url) return true;
    set({ progress: 90 });
    return false;
  },
  finish() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
