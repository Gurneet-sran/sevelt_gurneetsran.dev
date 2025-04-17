<script lang="ts">
	let { className } = $props<{ className?: string }>();
</script>

<nav class="nav {className}">
	<ul class="nav__list">
		<li class="nav__item">
			<a href="#about" class="nav__avatar-link" data-tooltip="About">
				<img
					alt="GS"
					src="images/avatar-42x42.jpeg"
					class="nav__avatar-img nav__avatar-img--small"
				/>
			</a>
		</li>
		<li class="nav__item">
			<a href="#skills" class="nav__link" aria-label="Skills" data-tooltip="Skills">
				<span class="nav__icon icon icon--portfolio"></span>
			</a>
		</li>
		<li class="nav__item">
			<a href="#experience" class="nav__link" aria-label="Experience" data-tooltip="Experience">
				<span class="nav__icon icon icon--experience"></span>
			</a>
		</li>
		<!-- <li class="nav__item">
			<a href="#ref" class="nav__link" aria-label="References" data-tooltip="References">
				<span class="nav__icon icon icon--references"></span>
			</a>
		</li> -->
		<li class="nav__item">
			<a href="#blog" class="nav__link" aria-label="Blog" data-tooltip="Blog">
				<span class="nav__icon icon icon--blog"></span>
			</a>
		</li>
		<li class="nav__item">
			<a href="#contacts" class="nav__link" aria-label="Contacts" data-tooltip="Contacts">
				<span class="nav__icon icon icon--contact"></span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.nav {
		display: flex;
		padding: 0.75rem 1rem;
		flex-direction: row;
		background-color: var(--md-sys-color-background);
	}

	.nav__avatar-link {
		display: inline-block;
		text-decoration: none;
	}

	.nav__avatar-img {
		border-radius: 50%;
		transition: transform 0.3s ease;
	}

	.nav__avatar-img:hover {
		transform: scale(1.1);
	}

	.nav__avatar-img--small {
		width: 42px;
		height: 42px;
	}

	.nav__list {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
		justify-content: space-evenly;
		width: 100%;
	}

	.nav__item {
		/* margin-bottom: 0.5rem; */
		display: flex;
		align-items: center;
	}
	/*

	.nav__item:last-child {
		margin-bottom: 0;
	} */

	.nav__link {
		display: flex;
		align-items: center;
		color: var(--md-sys-color-on-surface);
		text-decoration: none;
		border-radius: 0.5rem;
		transition: var(--hover-transition);
	}

	.nav__link:hover {
		color: var(--md-sys-color-primary-container);
	}

	.nav__icon {
		margin-right: 0.75rem;
		font-size: 2rem;
	}

	/* Tablet and up */
	/* @media (min-width: 768px) {
		.nav__list {
			flex-direction: row;
			gap: 1.5rem;
		}

		.nav__item {
			margin: 0;
		}

		.nav__link {
			padding: 0.5rem 1rem;
		}
	} */

	@media (min-width: 992px) {
		.nav {
			order: 3;
			flex-direction: column;
			background: transparent;
			margin-left: -2rem;
		}
		.nav__list {
			flex-direction: column;
			justify-content: center;
			gap: 3rem;
		}
		.nav__item {
			justify-content: center;
		}
		.nav__icon {
			margin-right: 0;
		}
	}
</style>
