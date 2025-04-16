<script lang="ts">
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
					Highly motivated Frontend Engineer with 9+ years of experience specializing in developing
					and optimizing user-centric, mobile-first web applications. Proven ability to architect
					scalable solutions using React, TypeScript, and modern frontend technologies. Strong
					emphasis on performance optimization, accessibility, and collaboration within agile
					environments. Passionate about delivering high-quality user experiences and building
					maintainable, efficient applications.
				</p>
			</div>
		</Section>

		<Section id="skills">
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
				<ul class="interests-list">
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

<!-- <svg id="crtBgShape1" class="hidden-sm hidden-xs" height="519" width="758">
	<polygon class="pol" points="0,455,693,352,173,0,92,0,0,71"></polygon>
</svg>
<svg id="crtBgShape2" class="hidden-sm hidden-xs" height="536" width="633">
	<polygon points="0,0,633,0,633,536"></polygon>
</svg> -->

<style>
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

	/* Tablet layout */
	@media (min-width: 768px) {
		.interests-list {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
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
			display: flex;
			gap: 0.95rem;
			flex-direction: column;
		}
		.page-grid::before {
			content: '';
			inset: 0;
			background: var(--color-background);
			clip-path: polygon(0 87.7%, 91.4% 67.8%, 22.8% 0, 12.1% 0, 0 13.7%);
			box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1);
			z-index: -1;
			height: 519px;
			width: 758px;
			top: 0;
			position: fixed;
			z-index: -1;
		}

		.page-grid::after {
			content: '';
			position: fixed;
			inset: 0;
			background: var(--color-primary);
			clip-path: polygon(0 0, 100% 0, 100% 100%);
			box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1);
			z-index: -1;
			height: 536px;
			width: 633px;
			top: -100px;
			left: auto;
			right: -100px;
		}
	}
</style>
