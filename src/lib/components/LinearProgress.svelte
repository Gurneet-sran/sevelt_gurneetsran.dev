<script lang="ts">
	// Props using Svelte 5 syntax
	let { progress = 0, title = '' } = $props();

	// Calculate the stroke-dashoffset based on progress percentage
	let offset = $derived(100 - progress);
</script>

<div
	class="progress"
	role="progressbar"
	aria-valuenow={progress}
	aria-valuemin="0"
	aria-valuemax="100"
>
	<strong class="progress__title">{title}</strong>
	<div
		class="progress__bar"
		data-text="{progress}%"
		data-value={progress / 100}
	>
		<svg viewBox="0 0 100 4" preserveAspectRatio="none" class="progress__svg">
			<path d="M 0,2 L 100,2" stroke="rgba(0,0,0,0.07)" stroke-width="4" fill-opacity="0" class="progress__track"></path>
			<path
				d="M 0,2 L 100,2"
				stroke="#1FA184"
				stroke-width="4"
				fill-opacity="0"
				style="stroke-dasharray: 100, 100; stroke-dashoffset: {offset};"
				class="progress__fill"
			></path>
		</svg>
		<div class="progress__text">
			{progress}%
		</div>
	</div>
</div>

<style>
	.progress {
		margin-bottom: 1.5rem;
	}

	.progress__title {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
	}

	.progress__bar {
		position: relative;
		height: 8px;
		background-color: transparent;
		border-radius: 4px;
	}

	.progress__svg {
		width: 100%;
		height: 100%;
	}

	.progress__text {
		font-size: 0.9rem;
		font-weight: bold;
		top: -25px;
		right: 0px;
		color: inherit;
		position: absolute;
		margin: 0px;
		padding: 0px;
		transform: translate(0px, 0px);
	}
</style>
