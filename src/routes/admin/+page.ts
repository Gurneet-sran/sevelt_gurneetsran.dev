import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    if (browser) {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
        if (!isAuthenticated) {
            throw redirect(302, '/admin-login');
        }
    }
    return {};
}; 