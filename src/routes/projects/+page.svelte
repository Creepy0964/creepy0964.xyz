<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { projects } from '$lib/data/projects';
</script>

<svelte:head><title>projects — creepy0964</title></svelte:head>

<PageHeader
	eyebrow="projects"
	title="the holy grail of random shit"
	lead="these are the things i did in my spare time from college/work"
/>

<div class="grid">
	{#each projects as p}
		<article class="glass proj">
			<header class="proj-head">
				<h3>{p.title}</h3>
				{#if p.status}<span class="status">{p.status}</span>{/if}
			</header>
			<p class="blurb">{p.blurb}</p>
			<div class="tags">
				{#each p.tags as t}<span class="tag">{t}</span>{/each}
			</div>
			{#if p.href}
				<a class="proj-link" href={p.href} target="_blank" rel="noreferrer">
						learn more
						<Icon name="arrow-right" size={15} />
					</a>
			{:else}
				<span class="proj-link disabled">link — placeholder</span>
			{/if}
		</article>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.2rem;
	}
	.proj {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		transition:
			transform 0.3s var(--ease),
			border-color 0.3s var(--ease);
	}
	.proj:hover {
		transform: translateY(-4px);
		border-color: var(--stroke-strong);
	}
	.proj-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}
	.proj-head h3 {
		margin: 0;
		font-size: 1.15rem;
	}
	.status {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--accent-2);
		padding: 0.2rem 0.55rem;
		border: 1px solid var(--stroke);
		border-radius: 999px;
		white-space: nowrap;
	}
	.blurb {
		margin: 0.7rem 0 1.1rem;
		color: var(--text-dim);
		flex: 1;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-bottom: 1.1rem;
	}
	.tag {
		padding: 0.3rem 0.65rem;
		border-radius: 8px;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		font-size: 0.82rem;
		color: var(--text-dim);
	}
	.proj-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.9rem;
		font-weight: 550;
		color: var(--accent-2);
		transition: gap 0.2s var(--ease);
	}
	.proj-link:hover {
		gap: 0.6rem;
	}
	.proj-link.disabled {
		color: var(--text-faint);
		cursor: default;
	}
	.proj-link.disabled:hover {
		gap: 0.4rem;
	}
	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
