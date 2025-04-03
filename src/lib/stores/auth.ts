import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize the auth store with the session storage value if available
const initialValue = browser ? sessionStorage.getItem('isAuthenticated') === 'true' : false;

export const isAuthenticated = writable<boolean>(initialValue);

// Subscribe to changes and update session storage
if (browser) {
    isAuthenticated.subscribe((value) => {
        sessionStorage.setItem('isAuthenticated', value.toString());
    });
}

// Admin credentials (in a real app, these would be stored securely)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

export function login(username: string, password: string): boolean {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        isAuthenticated.set(true);
        return true;
    }
    return false;
}

export function logout() {
    isAuthenticated.set(false);
} 