<script lang="ts">
	import SideMenu from './SideMenu.svelte';
	import Nav from './Nav.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="header">
	<div class="header__content">
			<div class="container container--sm header__row">
				<div class="header__col">
					<div class="header__logo">
						<span class="header__logo-text">Gurneet Sran</span>
					</div>
				</div>

				<div class="header__col header__col--nav">
					<div class="header__nav header__nav--desktop">
						<Nav />
					</div>
				</div>

				<div class="header__col">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button class="header__menu-btn" on:click={toggleMenu} aria-label="Toggle menu">
						<span class="icon icon--menu"></span>
					</button>
				</div>
			</div>
	</div>
  <Nav />
  
</header>

<SideMenu bind:isOpen={isMenuOpen} />

<style>
	.header {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
		padding: 1rem 0;
    padding-bottom: 0;
	}

	.header__content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}

	.header__row {
		display: flex;
		gap: 1rem;
		padding: 0 1rem;
		justify-content: space-between;
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
		color: var(--color-primary);
	}

	.header__logo-text {
		font-family: 'Pacifico', sans-serif;
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
		padding: 0 .5rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 2rem;
    color: var(--color-text);
    &:hover {
      color: var(--color-primary);
    }
	}

	/* Tablet Styles (768px and up) */
	@media (min-width: 768px) {
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
	}

	/* Desktop Styles (992px and up) */
	@media (min-width: 992px) {
		.header__row {
			margin: 0 -1rem;
		}

		.header__col {
			padding: 0 1rem;
		}
	}
</style>
