<script lang="ts">
	export let className: string = '';
</script>

<aside class="avatar-card {className}">
	<div class="avatar-card__avatar">
		<img src="images/avatar.png" alt="Avatar" />
	</div>
	<h2 class="avatar-card__name">Gurneet Sran</h2>
	<p class="avatar-card__title">Frontend Developer</p>
	<ul class="clear-list avatar-card__social-list">
		<li class="avatar-card__social-item">
			<a
				href="https://www.linkedin.com/in/gurneet-sran/"
				aria-label="LinkedIn Profile"
				class="avatar-card__social-link"
			>
				<span class="icon icon--linkedin"></span>
			</a>
		</li>
		<li class="avatar-card__social-item">
			<a
				href="https://github.com/gurneet-sran"
				aria-label="GitHub Profile"
				class="avatar-card__social-link"
			>
				<span class="icon icon--github"></span>
			</a>
		</li>
	</ul>
</aside>

<style>
	.avatar-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--md-sys-color-primary);
		color: var(--md-sys-color-on-primary);
		padding: 2rem 1rem 1.5rem;
	}

	/* selct all chdrens in avatr-card except the first one */
	.avatar-card > *:not(:first-child) {
		margin-top: 1rem;
	}

	.avatar-card__avatar {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		overflow: hidden;
		background-color: white;
	}

	.avatar-card__name {
		text-transform: uppercase;
		color: var(--md-sys-color-on-primary);
		white-space: nowrap;
		/* font-size: 1.40em; */
	}

	.avatar-card__title {
		color: var(--md-sys-color-on-surface-secondary);
	}

	.avatar-card__social-list {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	.avatar-card__social-link {
		font-size: 1.5rem;
		transition: var(--hover-transition);
		&:hover {
			color: var(--md-sys-color-primary-container);
		}
	}

	/* Desktop and laptop layout */
	@media (min-width: 992px) {
		.avatar-card {
			align-self: self-start;
			position: sticky;
			top: 0.75rem;
		}
	}
</style>
