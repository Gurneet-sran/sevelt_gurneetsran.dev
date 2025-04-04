<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header class="header">
	<div class="header-content">
		<div class="container-sm">
			<div class="head-row">
				<div class="head-col text-left">
					<div class="logo">
						<span class="gs-logo">Gurneet Sran</span>
					</div>
				</div>

				<div  class="head-col text-right">
					<div class="nav-container container hidden-sm hidden-xs">
						<nav>
							<ul class="clear-list">
								<li class="menu-item" >
									<a href="https://certy.px-lab.com/developer/" aria-current="page">Home</a>
								</li>
								<li class="menu-item" >
									<a href="https://certy.px-lab.com/developer/blog/">Blog</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div  class="head-col text-right">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button class="btn btn-icon btn-shade">
						<span class="gs-icon gs-icon-side-bar"></span>
					</button>
				</div>
			</div>
		</div>

		<!-- <div class="header-actions">
			<ThemeToggle />
		</div> -->
	</div>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-background);
		border-bottom: 1px solid var(--color-border);
		z-index: 100;
		padding: 1rem 0;
	}

	.header-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		font-size: 1.5rem;
		color: var(--color-primary);
	}

	.nav {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: var(--font-weight-medium);
		transition: color 0.3s ease;
	}

	.nav-link:hover {
		color: var(--color-primary);
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		.nav {
			display: none;
		}
	}
</style>
