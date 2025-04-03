<script lang="ts">
	import { login } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	
	let username = '';
	let password = '';
	let error = '';

	function handleSubmit() {
		if (login(username, password)) {
			goto('/admin');
		} else {
			error = 'Invalid username or password';
		}
	}
</script>

<main class="container">
	<h1>Admin Login</h1>
	
	<form on:submit|preventDefault={handleSubmit}>
		{#if error}
			<div class="error">{error}</div>
		{/if}
		
		<div class="form-group">
			<label for="username">Username:</label>
			<input
				type="text"
				id="username"
				bind:value={username}
				required
			/>
		</div>
		
		<div class="form-group">
			<label for="password">Password:</label>
			<input
				type="password"
				id="password"
				bind:value={password}
				required
			/>
		</div>
		
		<button type="submit">Login</button>
	</form>
</main>

<style>
	.container {
		max-width: 400px;
		margin: 2rem auto;
		padding: 2rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	h1 {
		text-align: center;
		color: #333;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		color: #555;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		background-color: #4CAF50;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		background-color: #45a049;
	}

	.error {
		color: #dc3545;
		margin-bottom: 1rem;
		text-align: center;
		padding: 0.5rem;
		background-color: #f8d7da;
		border-radius: 4px;
	}
</style> 