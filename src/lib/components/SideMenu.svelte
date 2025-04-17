<script lang="ts">
	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import AvatarCard from './AvatarCard.svelte';

	let { isOpen = $bindable() } = $props<{ isOpen: boolean }>();
	let isClosing = $state(false);
	let menuElement: HTMLDivElement | null = $state(null);
	let closeButton: HTMLButtonElement | null = $state(null);

	onMount(() => {
		if (isOpen) {
			closeButton?.focus();
		}
	});

	$effect(() => {
		if (isOpen) {
			// Focus the close button when menu opens
			setTimeout(() => {
				closeButton?.focus();
			}, 100);
		}
	});

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

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div
		class="sidemenu-overlay"
		onclick={closeMenu}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
		tabindex="-1"
		transition:fade={{ duration: 450 }}
	>
		<div
			class="sidemenu"
			class:closing={isClosing}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="menu"
			tabindex="-1"
			bind:this={menuElement}
		>
			<div class="sidemenu__header">
				<button
					class="sidemenu__close-btn"
					onclick={closeMenu}
					onkeydown={handleKeydown}
					aria-label="Close menu"
					bind:this={closeButton}
					type="button"
				>
					<span class="icon icon--close" aria-hidden="true"></span>
				</button>
			</div>

			<div class="sidemenu__content">
				<ThemeToggle />
				<AvatarCard />
				<h2 class="sidemenu__subtitle">Tags</h2>
				<ul class="sidemenu__list">
					<li>ReactJS</li>
					<li>Svelte</li>
					<li>Typescript</li>
					<li>CSS3</li>
					<li>HTML5</li>
					<li>SASS</li>
					<li>TailwindCSS</li>
				</ul>
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
		background-color: var(--md-sys-color-background);
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
		margin-bottom: 0.5rem;
	}

	.sidemenu__close-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		color: var(--md-sys-color-on-surface);
		font-size: 1.5rem;
		transition: color 0.3s ease;
	}

	.sidemenu__close-btn:hover {
		color: var(--md-sys-color-primary);
	}

	.sidemenu__content {
		margin-top: 1rem;
	}

	.sidemenu__subtitle {
		margin-top: 4rem;
		margin-bottom: 1.5rem;
		color: var(--md-sys-color-on-surface-tertiary);
		text-align: center;
	}

	.sidemenu__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		> li {
			padding: 0.5rem 1rem;
			background-color: var(--md-sys-color-surface-container-high);
			color: var(--md-sys-color-on-surface);
			/* transition: box-shadow 0.3s ease; */
			cursor: pointer;
		}
		> li:hover {
			box-shadow: var(--md-elevation-level2);
		}
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
