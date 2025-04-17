<script lang="ts">
	import CircularProgress from './CircularProgress.svelte';
	import LinearProgress from './ProgressBar.svelte';
	import ProgressBullets from './ProgressBullets.svelte';
</script>

<div class="skills">
	<section class="skills__section">
		<div class="skills__group">
			<h3 class="skills__subtitle">Technical Skills</h3>
			<dl class="skills__definition-list">
				<dt class="skills__term">Frontend</dt>
				<dd class="skills__description">
					React.js, Angular, TypeScript, JavaScript, HTML5, CSS, SASS, Module Federation
				</dd>
				<dt class="skills__term">Backend</dt>
				<dd class="skills__description">Node.js</dd>
				<dt class="skills__term">Other</dt>
				<dd class="skills__description">Redux, Webpack, vite</dd>
			</dl>
		</div>
		<div class="skills__group">
			<h3 class="skills__subtitle">Programming Languages</h3>
			<ProgressBullets progress={90} title="JavaScript" text="Proficient" />
			<ProgressBullets progress={85} title="TypeScript" text="Proficient" />
			<ProgressBullets progress={80} title="HTML5" text="Proficient" />
			<ProgressBullets progress={80} title="CSS" text="Proficient" />
		</div>
	</section>
	<section class="skills__section">
		<div class="skills__group">
			<h3 class="skills__subtitle">Frameworks & Libraries</h3>
			<LinearProgress progress={90} title="React.js" />
			<LinearProgress progress={80} title="Angular" />
			<LinearProgress progress={70} title="Redux" />
		</div>
		<div class="skills__group">
			<h3 class="skills__subtitle">Tools & Technologies</h3>
			<div class="skills__row">
				<div class="skills__item">
					<CircularProgress progress={85} title="Module Federation" />
				</div>
				<div class="skills__item">
					<CircularProgress progress={75} title="Webpack" />
				</div>
				<div class="skills__item">
					<CircularProgress progress={70} title="Node.js" />
				</div>
				<div class="skills__item">
					<CircularProgress progress={85} title="VSCode" />
				</div>
			</div>
		</div>
	</section>
	<section class="skills__section">
		<div class="skills__group">
			<h3 class="skills__subtitle">Soft Skills</h3>
			<ul class="skills__bullet-list">
				<li class="skills__bullet-item">Strong Collaboration</li>
				<li class="skills__bullet-item">Problem Solving</li>
				<li class="skills__bullet-item">Mentorship</li>
				<li class="skills__bullet-item">Code Reviews</li>
				<li class="skills__bullet-item">Agile Methodologies</li>
			</ul>
		</div>
		<div class="skills__group">
			<h3 class="skills__subtitle">Testing & DevOps</h3>
			<ul class="skills__icon-list">
				<li class="skills__icon-item">
					<img class="skills__icon-img" src="images/Jest-icon.svg" alt="Jest" /> Jest
				</li>
				<li class="skills__icon-item">
					<img class="skills__icon-img" src="images/Playwrite-icon.svg" alt="Playwright" /> Playwright
				</li>
				<li class="skills__icon-item">
					<img class="skills__icon-img" src="images/Webpack-icon.svg" alt="Webpack" /> Webpack
				</li>
				<li class="skills__icon-item">
					<img class="skills__icon-img" src="images/Jenkins-icon.svg" alt="Jenkins" /> Jenkins
				</li>
			</ul>
		</div>
	</section>
</div>

<style>
	.skills {
		/* padding: 2rem 0; */
	}

	.skills__section {
	}

	.skills__section:not(:last-child) {
		border-bottom: 1px solid var(--color-border-dark);
		margin-bottom: 1.5rem;
	}

	.skills__subtitle {
		font-weight: 300;
		color: var(--md-sys-color-on-surface-variant);
		margin-bottom: 2rem;
		font-size: 1.25rem;
	}

	.skills__group {
		margin-bottom: 1.25rem;
	}

	.skills__row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 4rem;
		row-gap: 1rem;
	}

	.skills__definition-list {
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 0.9em;
	}

	.skills__definition-list .skills__term {
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.skills__definition-list .skills__description {
		margin-bottom: 0.75rem;
		font-size: 0.9em;
	}

	.skills__bullet-list {
		padding-left: 1.75rem;
	}

	.skills__bullet-item {
		position: relative;
		&::before {
			content: '\f00c';
			font-family: 'icomoon';
			position: absolute;
			left: -1.75rem;
			color: var(--md-sys-color-primary);
		}
	}

	.skills__icon-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.skills__icon-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.skills__icon-img {
		width: 1.5rem;
		height: 1.5rem;
	}

	/*

	.skills__bullet-item,
	

	.skills__term {
		font-weight: bold;
		text-transform: uppercase;
		margin-top: 1rem;
	}

	.skills__description {
		margin-bottom: 1rem;
	}

	

	.skills__item {
		text-align: center;
	} */

	/* Tablet layout */
	@media (min-width: 576px) {
		.skills__row .skills__item:last-child {
			display: none !important;
			visibility: hidden;
		}
	}

	/* Desktop & laptop layout */
	@media (min-width: 992px) {
		.skills__section {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}

		.skills__row {
			display: flex;
			flex-wrap: nowrap;
			gap: 1rem;
			justify-content: space-between;
		}

		.skills__item {
			flex: 1;
			width: 0;
			text-align: center;
		}
	}
</style>
