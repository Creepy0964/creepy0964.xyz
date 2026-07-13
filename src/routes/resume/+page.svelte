<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { skills, experience, education, selfhosted } from '$lib/data/resume';
	import { site } from '$lib/data/site';
</script>

<svelte:head><title>resume — creepy0964</title></svelte:head>

<PageHeader
	eyebrow="resume"
	title="experience and skills"
	lead="a thorough description of what i can do"
/>

<!-- Быстрый снимок: стек с первого взгляда -->
<section class="glass snapshot">
	<div class="snap-head">
		<div>
			<h2>{site.name}</h2>
			<p class="role">devops / backend</p>
		</div>
		<a class="dl" href={`mailto:${site.email}`}>
			get in touch
			<Icon name="arrow-right" size={16} />
		</a>
	</div>

	<div class="skills">
		{#each skills as group}
			<div class="skill-group">
				<span class="skill-cat">{group.category}</span>
				<div class="tags">
					{#each group.items as it}
						{#if it.stack?.length}
							<span
								class="tag has-stack"
								tabindex="0"
								role="button"
								aria-label={`${it.name}: ${it.stack.join(', ')}`}
							>
								{it.name}{#if it.level}<i class="lvl"> · {it.level}</i>{/if}
								<span class="dot" aria-hidden="true"></span>
								<span class="popover" role="tooltip">
									<span class="popover-title">{it.name}</span>
									<span class="popover-list">
										{#each it.stack as s}<span class="chip">{s}</span>{/each}
									</span>
								</span>
							</span>
						{:else}
							<span class="tag" title={it.level ?? ''}>
								{it.name}{#if it.level}<i class="lvl"> · {it.level}</i>{/if}
							</span>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Опыт: свёрнуто по умолчанию, детали по клику -->
<section class="block">
	<h2 class="block-title">experience (clickable)</h2>
	<div class="timeline">
		{#each experience as job}
			<details class="glass exp">
				<summary>
					<span class="exp-main">
						<span class="exp-role">{job.role}</span>
						<span class="exp-org">{job.org}</span>
					</span>
					<span class="exp-period">{job.period}</span>
					<span class="exp-caret" aria-hidden="true"><Icon name="chevron-down" size={18} /></span>
				</summary>
				<p class="exp-summary">{job.summary}</p>
				<ul class="exp-details">
					{#each job.details as d}<li>{d}</li>{/each}
				</ul>
				<div class="tags small">
					{#each job.tags as t}<span class="tag ghost">{t}</span>{/each}
				</div>
			</details>
		{/each}
	</div>
</section>

<!-- Self-hosted: сервисы, которые крутятся на homelab/инфре -->
<section class="block">
	<h2 class="block-title">selfhosted</h2>
	<div class="glass selfhosted">
		<p class="selfhosted-lead">stuff i run on my own infrastructure</p>
		<div class="tags">
			{#each selfhosted as s}<span class="tag">{s}</span>{/each}
		</div>
	</div>
</section>

<!-- Образование
<section class="block">
	<h2 class="block-title">education</h2>
	<div class="edu-grid">
		{#each education as ed}
			<div class="glass edu">
				<span class="edu-title">{ed.title}</span>
				<span class="edu-place">{ed.place}</span>
				<span class="edu-period">{ed.period}</span>
				{#if ed.note}<span class="edu-note">{ed.note}</span>{/if}
			</div>
		{/each}
	</div>
</section> -->

<style>
	.snapshot {
		padding: clamp(1.3rem, 3vw, 2rem);
		margin-bottom: 2.5rem;
	}
	.snap-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 1.6rem;
	}
	.snap-head h2 {
		margin: 0;
	}
	.role {
		margin: 0.2rem 0 0;
		color: var(--text-faint);
		font-size: 0.95rem;
	}
	.dl {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		background: linear-gradient(120deg, rgba(52, 211, 153, 0.28), rgba(74, 222, 128, 0.18));
		border: 1px solid var(--stroke-strong);
		color: var(--text);
		font-size: 0.9rem;
		font-weight: 550;
		white-space: nowrap;
		transition: gap 0.2s var(--ease), border-color 0.2s var(--ease);
	}
	.dl:hover {
		border-color: var(--accent);
		gap: 0.6rem;
	}

	.skills {
		display: grid;
		gap: 1.1rem;
	}
	.skill-group {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 1rem;
		align-items: start;
	}
	.skill-cat {
		color: var(--text-faint);
		font-size: 0.85rem;
		padding-top: 0.35rem;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}
	.tag {
		padding: 0.32rem 0.7rem;
		border-radius: 8px;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		font-size: 0.85rem;
		color: var(--text);
		box-shadow: var(--neo-inset);
	}
	.tag .lvl {
		color: var(--text-faint);
		font-style: normal;
		font-size: 0.8em;
	}
	.tag.ghost {
		box-shadow: none;
		background: var(--surface);
		color: var(--text-dim);
	}

	/* теги со стеком: hover/focus раскрывает поповер */
	.tag.has-stack {
		position: relative;
		cursor: help;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		transition:
			border-color 0.2s var(--ease),
			background 0.2s var(--ease);
	}
	.tag.has-stack:hover,
	.tag.has-stack:focus-visible {
		border-color: var(--accent);
		background: var(--surface-strong);
	}
	.tag.has-stack .dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 6px var(--accent-glow);
	}
	.popover {
		position: absolute;
		bottom: calc(100% + 10px);
		left: 50%;
		transform: translateX(-50%) translateY(4px);
		z-index: 20;
		min-width: 180px;
		max-width: min(320px, 80vw);
		width: max-content;
		padding: 0.75rem 0.85rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		border-radius: var(--r-md);
		background: rgba(11, 21, 18, 0.92);
		border: 1px solid var(--stroke-strong);
		box-shadow: var(--shadow-soft);
		backdrop-filter: blur(var(--blur)) saturate(140%);
		-webkit-backdrop-filter: blur(var(--blur)) saturate(140%);
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity 0.2s var(--ease),
			transform 0.2s var(--ease);
	}
	.popover::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border: 6px solid transparent;
		border-top-color: var(--stroke-strong);
	}
	.tag.has-stack:hover .popover,
	.tag.has-stack:focus-visible .popover {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(0);
	}
	.popover-title {
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-faint);
	}
	.popover-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}
	.popover-list .chip {
		padding: 0.24rem 0.55rem;
		border-radius: 7px;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		font-size: 0.8rem;
		color: var(--text);
		white-space: nowrap;
	}

	.selfhosted {
		padding: clamp(1.2rem, 3vw, 1.6rem);
	}
	.selfhosted-lead {
		margin: 0 0 1rem;
		color: var(--text-faint);
		font-size: 0.9rem;
	}

	.block {
		margin-top: 2.5rem;
	}
	.block-title {
		font-size: 1.3rem;
		margin-bottom: 1.1rem;
	}

	.timeline {
		display: grid;
		gap: 0.8rem;
	}
	.exp {
		padding: 0;
		overflow: hidden;
		transition: border-color 0.3s var(--ease);
	}
	.exp[open] {
		border-color: var(--stroke-strong);
	}
	.exp summary {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.1rem 1.3rem;
		cursor: pointer;
		list-style: none;
		user-select: none;
	}
	.exp summary::-webkit-details-marker {
		display: none;
	}
	.exp-main {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		min-width: 0;
	}
	.exp-role {
		font-weight: 600;
		font-size: 1.05rem;
	}
	.exp-org {
		color: var(--text-faint);
		font-size: 0.9rem;
	}
	.exp-period {
		margin-left: auto;
		color: var(--text-dim);
		font-size: 0.85rem;
		white-space: nowrap;
	}
	.exp-caret {
		display: inline-flex;
		color: var(--text-faint);
		transition: transform 0.3s var(--ease);
	}
	.exp[open] .exp-caret {
		transform: rotate(180deg);
	}
	.exp-summary,
	.exp-details,
	.exp .tags {
		padding-inline: 1.3rem;
	}
	.exp-summary {
		color: var(--text-dim);
		margin: 0 0 0.6rem;
	}
	.exp-details {
		margin: 0 0 1rem;
		padding-left: 2.5rem;
		color: var(--text-dim);
	}
	.exp-details li {
		margin-bottom: 0.4rem;
	}
	.exp .tags.small {
		padding-bottom: 1.2rem;
	}

	.edu-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
	}
	.edu {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1.2rem 1.3rem;
	}
	.edu-title {
		font-weight: 600;
	}
	.edu-place {
		color: var(--text-dim);
		font-size: 0.9rem;
	}
	.edu-period {
		color: var(--text-faint);
		font-size: 0.85rem;
	}
	.edu-note {
		margin-top: 0.4rem;
		color: var(--text-dim);
		font-size: 0.88rem;
	}

	@media (max-width: 640px) {
		.skill-group {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}
		.exp-period {
			display: none;
		}
	}
</style>
