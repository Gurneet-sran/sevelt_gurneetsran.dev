<script lang="ts">
	import '$lib/styles/global.css';
	import '$lib/styles/variables.css';
	import '$lib/styles/icons.css';
	import type { Snippet } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { onDestroy } from 'svelte';

	let { children } = $props<{ children: Snippet }>();

	onDestroy(() => {
		if (theme.cleanup) {
			theme.cleanup();
		}
	});
</script>

{@render children?.()}
<!-- <svg id="crtBgShape1" class="hidden-sm hidden-xs" height="519" width="758">
  <polygon class="pol" points="0,455,693,352,173,0,92,0,0,71"></polygon>
</svg>
<svg id="crtBgShape2" class="hidden-sm hidden-xs" height="536" width="633">
  <polygon points="0,0,633,0,633,536"></polygon>
</svg> -->
