<script lang="ts">
	export let title: string;
	export let id: string;
</script>

<section {id} class="section">
	<h2 class="section__title">{title}</h2>
	<div class="section__content">
		<slot />
	</div>
</section>

<style>
	.section {
		padding: 2.25rem 1.25rem;
		scroll-margin-top: 5rem;
	}

	.section__title {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		color: var(--color-text);
	}

	.section__content {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* @media (max-width: 768px) {
    .section {
      padding: 3rem 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }
  } */

	/* Desktop and laptop layout */
	@media (min-width: 992px) {
		.section {
			background-color: var(--color-background);
		}
	}
</style>
