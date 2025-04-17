<script lang="ts">
	// Props using Svelte 5 syntax
	let { progress = 0, title = '', text = '' } = $props();

	// Calculate how many bullets should be filled
	let filledBullets = $derived(Math.round((progress / 100) * 10));
	let totalBullets = 10;
</script>

<div
	class="progress"
	role="progressbar"
	aria-valuenow={progress}
	aria-valuemin="0"
	aria-valuemax="100"
>
	<strong class="progress__title">{title}</strong>
	<div class="progress__row">
		<span class="progress__bar">
			{#each Array(totalBullets) as _, i}
				<span class="progress__bullet" class:progress__bullet--filled={i < filledBullets}></span>
			{/each}
		</span>
		<span class="progress__text progress__text--muted">{text}</span>
	</div>
</div>

<style>
	.progress {
		margin-bottom: 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.progress__title {
		/* margin-bottom: 0.5rem; */
		font-size: 0.9rem;
		color: var(--md-sys-color-on-surface-secondary);
		width: 100%;
		font-weight: 700;
	}

	.progress__row {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.progress__bar {
		display: flex;
		gap: 0.25rem;
	}

	.progress__bullet {
		width: 0.8em;
		height: 0.8em;
		border-radius: 50%;
		background-color: transparent;
		border: 1px solid var(--md-sys-color-primary);
	}

	.progress__bullet--filled {
		background-color: var(--md-sys-color-primary);
	}

	.progress__text {
		font-size: 0.8rem;
		white-space: nowrap;
	}

	.progress__text--muted {
		color: var(--md-sys-color-on-surface-tertiary);
	}
</style>
