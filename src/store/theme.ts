import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  toggleTheme: () =>
    set((state) => {
      const newDark = !state.dark;
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { dark: newDark };
    }),
}));

export default useThemeStore;
