# SvelteKit Admin Dashboard with Cloudflare Pages

This is a SvelteKit project template that includes authentication and is configured for deployment to Cloudflare Pages.

## Features

- Home page with link to admin login
- Protected admin dashboard
- Authentication system with session storage
- Cloudflare Pages deployment configuration

## Development Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Default Admin Credentials

- Username: admin
- Password: admin123

**Note:** In a production environment, you should use secure authentication methods and store credentials safely.

## Deployment to Cloudflare Pages

1. Push your code to a GitHub repository

2. Log in to the Cloudflare Dashboard

3. Go to Pages and create a new project

4. Connect your GitHub repository

5. Configure the build settings:
   - Framework preset: SvelteKit
   - Build command: `pnpm build`
   - Build output directory: `.svelte-kit/cloudflare`

6. Deploy!

## Project Structure

- `/src/routes/` - Contains all the route components
  - `+page.svelte` - Home page
  - `/admin-login/+page.svelte` - Admin login page
  - `/admin/+page.svelte` - Protected admin dashboard
  - `/admin/+page.ts` - Authentication guard for admin route
- `/src/lib/stores/` - Contains the authentication store
  - `auth.ts` - Authentication logic and state management

## Development

To add new features or modify existing ones:

1. The authentication logic is in `src/lib/stores/auth.ts`
2. Protected routes should use the load function pattern from `src/routes/admin/+page.ts`
3. Styles are scoped to each component using Svelte's built-in style block

## License

MIT
