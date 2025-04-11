<section id="exp" class="section padd-box brd-btm">
	<!-- <h2 class="title-lg text-upper">work experience</h2> -->
	<div class="education">
		<div class="education-box">
			<span class="education-date">
				<span>2015 - 2017</span>
			</span>
			<h3>FULL STACK DEVELOPER</h3>
			<div class="education-logo">
				<img
					width="82"
					height="17"
					src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-envato.png"
					class="crt-bw wp-post-image"
					alt=""
					srcset="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-envato.png 82w, https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-envato-80x17.png 80w"
					sizes="(max-width: 82px) 100vw, 82px"
				/>
			</div>
			<a href="https://themeforest.net/user/px-lab/portfolio">
				<span class="company-name">Loft Studio</span>
			</a>
			<p>
				Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as requested by the
				IT Manager. Had a specific brief to ensure the websites build for customer’s precisely
				matched their requirements.developers and marketers.
			</p>
		</div>
		<div class="education-box">
			<span class="education-date">
				<span>2012 - 2015</span>
			</span>
			<h3>SYSTEMS ANALYST / WEB DEVELOPER</h3>
			<div class="education-logo">
				<a href="https://themeforest.net/user/px-lab/portfolio">
					<img
						width="106"
						height="21"
						src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-bootstrap.png"
						class="crt-bw wp-post-image"
						alt=""
						loading="lazy"
					/>
				</a>
			</div>
			<span class="company-name">Noemi Productions LTD</span>

			<p>
				Rebuilt and enhanced existing ASP B2C site with ASP.NET 2.0 Framework and tools. Technology
				consists of ASP.NET 2.0 (C#), IIS, Microsoft SQL Server 2005, Stored Procedures &amp; PayPal
				Instant Payment Notification.
			</p>
		</div>
		<div class="education-box">
			<span class="education-date">
				<span>2009 - 2012</span>
			</span>
			<h3>WEBMASTER / WEB DEVELOPER</h3>
			<div class="education-logo">
				<img
					width="91"
					height="22"
					src="https://certy.px-lab.com/developer/wp-content/uploads/sites/6/2017/05/logo-jquery.png"
					class="crt-bw wp-post-image"
					alt=""
					loading="lazy"
				/>
			</div>
			<span class="company-name">Boombox Group</span>

			<p>
				Developed, managed, operated and promoted an Internet business.Handled customer support
				issues.Planned and managed business finances.
			</p>
		</div>
	</div>
</section>

<style>
	p {
		font-size: 0.875em;
	}
	.education {
		position: relative;
	}

	.education:before {
		top: 10px;
		left: 0;
		bottom: 0;
		width: 2px;
		content: '';
		opacity: 0.5;
		position: absolute;
		background: var(--color-primary-dark);
	}
	.education-box {
		position: relative;
		padding-left: 20px;
		margin-bottom: 45px;
		&::before {
			content: '';
			top: 9px;
			left: -1px;
			position: absolute;
			width: 4px;
			height: 4px;
			border-radius: 50%;
			background-color: var(--color-text);
		}
		&:last-child:after {
			top: 14px;
			left: 0;
			bottom: 0;
			width: 2px;
			content: '';
			position: absolute;
			background-color: var(--color-surface);
		}
	}
	.education-date {
		background: var(--color-primary-dark);
		left: -20px;
		width: 117px;
		letter-spacing: 0;
		line-height: 1.1;
		padding: 6px;
		margin-left: 15px;
		font-size: 0.625em;
		position: relative;
		display: inline-block;
		&:before {
			content: '';
			top: 0;
			right: 100%;
			width: 0;
			height: 0;
			position: absolute;
			border-top: 11px solid transparent !important;
			border-bottom: 11px solid transparent !important;
			border-left: 0 solid transparent !important;
			border-right: 7px solid transparent;
			border-color: var(--color-primary-dark);
		}
	}
	.company-name {
		line-height: 1.1;
		letter-spacing: 0;
		font-size: 1em;
		margin-bottom: 15px;
		display: inline-block;
		color: var(--color-text-tertiary);
	}

	.education-box h3 {
		letter-spacing: 0;
		font-size: 0.938em;
		margin-top: 15px;
	}
	.education-box h3,
	.education-logo {
		margin-bottom: 10px;
	}

	@media (min-width: 768px) {
		.education {
			margin-left: 210px;
		}
		.education-date {
			margin-left: 0;
			margin-right: 22px;
			padding: 8px 6px;
			font-size: 0.875em;
			text-align: center;
			position: absolute;
			width: 160px;
			right: 100%;
			left: auto;
			top: -4px;
			&:before {
				top: 0;
				left: 100%;
				width: 0;
				height: 0;
				position: absolute;
				border-top: 16px solid transparent !important;
				border-bottom: 16px solid transparent !important;
				border-right: 10px solid transparent !important;
				border-left: 10px solid var(--color-primary-dark) !important;
			}
		}
	}
</style>
