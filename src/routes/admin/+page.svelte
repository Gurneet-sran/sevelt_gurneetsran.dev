<script lang="ts">
	import { logout } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	function handleLogout() {
		logout();
		goto('/admin-login');
	}
</script>

<main class="container">
	<h1>Admin Dashboard</h1>
	<p>Welcome to the admin dashboard! This is a protected route.</p>
	
	<button on:click={handleLogout}>Logout</button>
</main>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		color: #333;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	p {
		color: #666;
		margin-bottom: 2rem;
	}

	button {
		padding: 0.75rem 1.5rem;
		background-color: #dc3545;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #c82333;
	}
</style> 