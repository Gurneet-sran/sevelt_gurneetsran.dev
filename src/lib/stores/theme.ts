import { writable } from 'svelte/store';

// Create a custom store
function createThemeStore() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    toggle: () => {
      update(isDark => {
        const newTheme = !isDark;
        if (newTheme) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        return newTheme;
      });
    },
    setTheme: (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      set(isDark);
    }
  };
}

// Initialize the store
export const theme = createThemeStore();

// Initialize theme from localStorage
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  theme.setTheme(savedTheme === 'dark');
} 