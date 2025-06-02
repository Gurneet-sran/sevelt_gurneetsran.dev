import { writable } from 'svelte/store';

// Create a custom store
function createThemeStore() {
	const { subscribe, set, update } = writable(false);

	// Add system theme listener
	if (typeof window !== 'undefined') {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		console.log('Initial system theme:', mediaQuery.matches ? 'dark' : 'light');

		// Listen for changes using addEventListener
		const handleThemeChange = (e: MediaQueryListEvent) => {
			console.log('System theme changed to:', e.matches ? 'dark' : 'light');
			const newTheme = e.matches;
			setTheme(newTheme);
		};

		// Add the listener
		mediaQuery.addEventListener('change', handleThemeChange);

		// Store the cleanup function
		const cleanup = () => {
			mediaQuery.removeEventListener('change', handleThemeChange);
		};

		// Add cleanup to the store
		return {
			subscribe,
			toggle: () => {
				update((isDark) => {
					const newTheme = !isDark;
					setTheme(newTheme);
					return newTheme;
				});
			},
			setTheme,
			cleanup
		};
	}

	function setTheme(isDark: boolean) {
		console.log('Setting theme to:', isDark ? 'dark' : 'light');
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		set(isDark);
	}

	return {
		subscribe,
		toggle: () => {
			update((isDark) => {
				const newTheme = !isDark;
				setTheme(newTheme);
				return newTheme;
			});
		},
		setTheme
	};
}

// Initialize the store
export const theme = createThemeStore();

// Initialize theme from localStorage or system preference
if (typeof window !== 'undefined') {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme !== null) {
		// Use saved theme if available
		console.log('Using saved theme:', savedTheme);
		theme.setTheme(savedTheme === 'dark');
	} else {
		// Otherwise use system preference
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log('Using system theme:', systemPrefersDark ? 'dark' : 'light');
		theme.setTheme(systemPrefersDark);
	}
}
