<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="container">
	<h1>Hello World</h1>
	<p>Welcome to my SvelteKit site!</p>
	<a href="/admin-login">Admin Login</a>
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
	}

	a {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #4CAF50;
		color: white;
		text-decoration: none;
		border-radius: 4px;
	}

	a:hover {
		background-color: #45a049;
	}
</style>
