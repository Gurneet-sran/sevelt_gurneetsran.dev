<script lang="ts">
	import { onMount } from 'svelte';
	import '$lib/styles/icons.css';

	let iconNames: string[] = [];

	onMount(() => {
		// Get all style rules that start with .gs-icon-
		const rules = Array.from(document.styleSheets)
			.flatMap((sheet) => {
				try {
					return Array.from(sheet.cssRules);
				} catch (e) {
					return [];
				}
			})
			.filter((rule) => rule instanceof CSSStyleRule && rule.selectorText.startsWith('.icon-'))
			.map((rule) => {
				const selector = (rule as CSSStyleRule).selectorText;
				// Remove .gs-icon- prefix and :before suffix
				console.log(selector);
				return selector.replace('.icon-', '').replace('::before', '');
			});

		iconNames = [...new Set(rules)].sort();
	});
</script>

<div class="container">
	<h1>Icon Library</h1>
	<div class="icon-grid">
		{#each iconNames as iconName}
			<div class="icon-item">
				<i class="icon icon-{iconName}"></i>
				<span class="icon-name">{iconName}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		text-align: center;
	}

	.icon-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1rem;
	}

	.icon-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border: 1px solid #eee;
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.icon-item:hover {
		background-color: #f5f5f5;
		transform: translateY(-2px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.icon-item i {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.icon-name {
		font-size: 0.875rem;
		color: #666;
		text-align: center;
		word-break: break-word;
	}
</style>
