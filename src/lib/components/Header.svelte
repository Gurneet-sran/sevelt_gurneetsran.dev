<script lang="ts">
	import SideMenu from './SideMenu.svelte';
	import Nav from './Nav.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="header">
	<div class="header__content">
		<div class="header__row">
			<div class="header__col">
				<div class="header__logo">
					<span class="header__logo-text">Gurneet Sran</span>
				</div>
			</div>

			<div class="header__col header__col--nav">
				<div class="header__nav header__nav--desktop">
					<ThemeToggle />
				</div>
			</div>

			<div class="header__col">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<button class="header__menu-btn" onclick={toggleMenu} aria-label="Toggle menu">
					<span class="icon icon--menu"></span>
				</button>
			</div>
		</div>
	</div>
</header>

<SideMenu bind:isOpen={isMenuOpen} />

<style>
	.header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		padding: 1rem;
	}

	.header__content {
		/* max-width: 1200px; */
		max-width: 1440px;
		margin: 0 auto;
		align-items: center;
		display: flex;
		/* padding: 0 1rem; */
		flex-direction: row;
	}

	.header__row {
		display: flex;
		width: 100%;
		gap: 1rem;
		padding: 0 1rem;
		justify-content: space-evenly;
	}

	.header__col {
		width: 100%;
		padding: 0;
	}

	.header__col:last-child {
		display: flex;
		justify-content: flex-end;
	}

	.header__col--nav {
		display: none;
	}

	.header__logo {
		font-size: 1.5rem;
		color: var(--md-sys-color-primary);
	}

	.header__logo-text {
		font-family: 'Pacifico', sans-serif;
		white-space: nowrap;
	}

	.header__nav {
		display: none;
	}

	.header__nav--desktop {
		display: block;
	}

	/* Button Styles */
	.header__menu-btn {
		display: inline-block;
		padding: 0 0.5rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: var(--hover-transition);
		font-size: 2rem;
		color: var(--md-sys-color-on-surface);
		&:hover {
			color: var(--md-sys-color-primary-container);
		}
	}

	/* Tablet Styles (768px and up) */
	/* @media (min-width: 768px) {
		.header__row {
			flex-direction: row;
			flex-wrap: wrap;
			margin: 0 -0.75rem;
		}

		.header__col {
			padding: 0 0.75rem;
			flex: 1;
		}

		.header__col--nav {
			display: block;
		}
	} */

	/* Desktop Styles (992px and up) */
	@media (min-width: 992px) {
		.header {
			background: transparent;
			border-color: transparent;
			padding: 1.25em 0;
		}
		.header__row {
			/* margin: 0 -1rem;
			max-width: 690px; */
			padding: 0;
			grid-area: main;
		}

		.header__col {
			padding: 0;
			display: flex;
			align-items: center;
		}
		.header__content {
			display: grid;
			grid-template-columns: var(--page-grid-template);
			grid-template-areas: 'side main nav';
			padding: 0 2rem;
			column-gap: 2rem;
		}
		.header__logo {
			font-size: 2rem;
		}
		.header__menu-btn {
			background: var(--md-sys-color-background-secondary);
			border-radius: 50%;
			padding: 10px;
			font-size: 2.5em;
		}
	}
</style>
