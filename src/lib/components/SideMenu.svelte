<script lang="ts">
	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';

	export let isOpen = false;
	let isClosing = false;
	let menuElement: HTMLDivElement;
	let closeButton: HTMLButtonElement;

	onMount(() => {
		if (isOpen) {
			closeButton?.focus();
		}
	});

	$: if (isOpen) {
		// Focus the close button when menu opens
		setTimeout(() => {
			closeButton?.focus();
		}, 100);
	}

	function closeMenu() {
		isClosing = true;
		setTimeout(() => {
			isOpen = false;
			isClosing = false;
		}, 450); // Match this with animation duration
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	function handleLinkKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			closeMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div 
		class="sidemenu-overlay" 
		on:click={closeMenu} 
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
		transition:fade={{ duration: 450 }}
	>
		<div 
			class="sidemenu" 
			class:closing={isClosing} 
			on:click|stopPropagation
			role="menu"
			bind:this={menuElement}
		>
			<div class="sidemenu__header">
				<button 
					class="sidemenu__close-btn" 
					on:click={closeMenu}
					on:keydown={handleKeydown}
					aria-label="Close menu"
					bind:this={closeButton}
				>
					<span class="icon icon--close" aria-hidden="true"></span>
				</button>
			</div>

			<div class="sidemenu__content">
			</div>
		</div>
	</div>
{/if}

<style>
	.sidemenu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}

	.sidemenu {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		max-width: 300px;
		height: 100%;
		background-color: var(--color-surface);
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
		z-index: 1001;
		padding: 1rem;
		transform: translateX(100%);
		animation: slideIn 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards;
	}

	.sidemenu.closing {
		animation: slideOut 0.45s cubic-bezier(0.23, 1, 0.32, 1) forwards;
	}

	.sidemenu__header {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 2rem;
	}

	.sidemenu__close-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		color: var(--color-text);
		font-size: 1.5rem;
		transition: color 0.3s ease;
	}

	.sidemenu__close-btn:hover {
		color: var(--color-primary);
	}

	.sidemenu__content {
		margin-top: 1rem;
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes slideOut {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}

	/* Tablet and up */
	@media (min-width: 768px) {
		.sidemenu {
			max-width: 400px;
		}
	}
</style> 