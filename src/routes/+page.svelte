<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Header />

<main>
	<Section id="about" title="About Me">
		<!-- About content will go here -->
		<div class="about-content">
			<p>Your introduction and about me content will go here.</p>
		</div>
	</Section>

	<Section id="experience" title="Experience">
		<!-- Experience content will go here -->
		<div class="experience-content">
			<p>Your experience content will go here.</p>
		</div>
	</Section>

	<Section id="projects" title="Projects">
		<!-- Projects content will go here -->
		<div class="projects-content">
			<p>Your projects content will go here.</p>
		</div>
	</Section>

	<Section id="skills" title="Skills">
		<!-- Skills content will go here -->
		<div class="skills-content">
			<p>Your skills content will go here.</p>
		</div>
	</Section>

	<Section id="contact" title="Contact">
		<!-- Contact content will go here -->
		<div class="contact-content">
			<p>Your contact information will go here.</p>
		</div>
	</Section>
</main>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		color: #333;
		font-size: 2.5rem;
	}

	a {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #4CAF50;
		color: white;
		text-decoration: none;
		border-radius: 4px;
	}

	a:hover {
		background-color: #45a049;
	}

	main {
		padding-top: 5rem; /* Space for fixed header */
	}

	.about-content,
	.experience-content,
	.projects-content,
	.skills-content,
	.contact-content {
		color: var(--color-text);
	}
</style>
