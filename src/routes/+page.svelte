<script lang="ts">
	import { page } from '$app/stores';
	import AvatarCard from '$lib/components/AvatarCard.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Section from '$lib/components/Section.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
</script>

<Header />
<div class="page-grid">
	<Nav className="page-nav" />
	<AvatarCard className="page-avatar" />
	<main>
		<Section id="about" title="About Me">
			<!-- About content will go here -->
			<div class="about-content">
				<p>Hello, I'm Gurneet Singh</p>
				<p>
					Senior Web Developer specializing in front end development. Experienced with all stages of
					the development cycle for dynamic web projects. Well-versed in numerous programming
					languages including JavaScript, SQL, and C. Stng background in project management and
					customer relations.
				</p>
			</div>
		</Section>

		<Section id="skills" title="Skills">
			<div class="skills-content">
				<SkillsSection />
			</div>
		</Section>

		<Section id="experience" title="work experience">
			<div class="experience-content">
				<ExperienceSection />
			</div>
		</Section>

		<Section id="interests" title="Interests">
			<div class="interests-content">
				<ul class="">
					<li>
						<span class="icon icon--animal-lover"></span>
						Animals
					</li>
					<li>
						<span class="icon icon--island"></span>
						Travel
					</li>
					<li>
						<span class="icon icon--chef"></span>
						Cooking
					</li>
					<li>
						<span class="icon icon--party"></span>
						Parties
					</li>
					<li>
						<span class="icon icon--keyboard"></span>
						Coding
					</li>
					<li>
						<span class="icon icon--game"></span>
						Gaming
					</li>
				</ul>
			</div>
		</Section>

		<!-- <Section id="projects" title="Projects">
			<div class="projects-content">
				<p>Your projects content will go here.</p>
			</div>
		</Section>

		<Section id="contact" title="Contact">
			<div class="contact-content">
				<p>Your contact information will go here.</p>
			</div>
		</Section> -->
	</main>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	.page-grid {
		display: grid;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
	}

	/* Mobile layout (default) */
	.page-grid {
		grid-template-columns: 1fr;
	}

	p {
		margin: 0 0 22px;
	}

	h1 {
		color: #333;
		font-size: 2.5rem;
	}

	a {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #4caf50;
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
	.interests-content,
	.skills-content {
		color: var(--color-text);
		line-height: 1.875em;
	}

	.interests-content {
		ul {
			line-height: 1.1em;
			li {
				padding: 0.35em;
				margin-bottom: 0.9em;
				display: flex;
				align-items: center;
			}
		}
		.icon {
			color: var(--color-primary-dark);
			font-size: 1.7em;
			margin-right: 0.25em;
		}
	}

	/* Desktop and laptop layout */
	@media (min-width: 992px) {
		.page-grid {
			grid-template-columns: var(--page-grid-template);
			grid-template-areas: 'side main nav';
			column-gap: 2rem;
			padding: 0 2rem;
		}

		main {
			padding-top: 0;
		}
	}
</style>
