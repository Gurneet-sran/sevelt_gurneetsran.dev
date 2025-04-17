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
	<div class="progress__row">
		<strong class="progress__title">{title}</strong>
		<div class="progress__text">
			{progress}%
		</div>
	</div>
	<div class="progress__bar" data-text="{progress}%" data-value={progress / 100}>
		<svg viewBox="0 0 100 4" preserveAspectRatio="none" class="progress__svg">
			<path
				d="M 0,2 L 100,2"
				stroke="var(--md-sys-color-surface-dim)"
				stroke-width="4"
				fill-opacity="0"
				class="progress__track"
			></path>
			<path
				d="M 0,2 L 100,2"
				stroke="var(--md-sys-color-primary)"
				stroke-width="4"
				fill-opacity="0"
				style="stroke-dasharray: 100, 100; stroke-dashoffset: {offset};"
				class="progress__fill"
			></path>
		</svg>
	</div>
</div>

<style>
	.progress {
		margin-bottom: 1.5rem;
	}

	.progress__row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: end;
		margin-bottom: 0.3rem;
	}

	.progress__title {
		display: block;
		font-size: 0.85em;
		color: var(--md-sys-color-on-surface-secondary);
	}

	.progress__bar {
		position: relative;
		height: 5px;
		background-color: transparent;
		border-radius: 4px;
	}

	.progress__svg {
		width: 100%;
		height: 100%;
	}

	/* .progress__text {
		font-size: 0.9rem;
		font-weight: bold;
		top: -25px;
		right: 0px;
		color: inherit;
		position: absolute;
		margin: 0px;
		padding: 0px;
		transform: translate(0px, 0px);
	} */
</style>
