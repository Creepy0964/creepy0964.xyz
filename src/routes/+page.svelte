<script lang="ts">
	import { nav, site } from '$lib/data/site';
	import Icon from '$lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>{site.name}</title>
</svelte:head>

<section class="hero">
	<span class="eyebrow">{site.role}</span>
	<h1>
		<span class="gradient-text">{site.name}</span>
	</h1>
	<p class="tagline">{site.tagline}</p>

	<div class="hero-meta">
		<a class="chip chip-link" href={`mailto:${site.email}`}>
			<Icon name="mail" size={16} stroke={2} />
			{site.email}
		</a>
	</div>
</section>

<section class="grid" aria-label="site sections">
	{#each nav as item, i}
		<a class="tile glass" href={item.href} style={`--i:${i}`}>
			<span class="tile-icon" aria-hidden="true"><Icon name={item.icon} size={22} /></span>
			<span class="tile-text">
				<span class="tile-title">{item.title}</span>
				<span class="tile-sub">{item.subtitle}</span>
			</span>
			<span class="tile-arrow" aria-hidden="true"><Icon name="arrow-right" size={20} /></span>
		</a>
	{/each}
</section>

<style>
	.hero {
		padding: clamp(2rem, 8vw, 5rem) 0 clamp(2.5rem, 6vw, 4rem);
		max-width: 44ch;
		animation: rise 0.7s var(--ease) both;
	}
	.hero h1 {
		margin-top: 0.6rem;
	}
	.tagline {
		font-size: 1.15rem;
		color: var(--text-dim);
		margin-top: 0.4rem;
	}
	.hero-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-top: 1.6rem;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.5ch;
		padding: 0.4rem 0.85rem;
		border-radius: 999px;
		background: var(--surface);
		border: 1px solid var(--stroke);
		font-size: 0.88rem;
		color: var(--text-dim);
	}
	.chip-link:hover {
		color: var(--text);
		border-color: var(--stroke-strong);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(0.8rem, 2vw, 1.2rem);
	}
	.tile {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.4rem 1.5rem;
		color: var(--text);
		position: relative;
		overflow: hidden;
		animation: rise 0.6s var(--ease) both;
		animation-delay: calc(var(--i) * 0.07s + 0.15s);
		transition:
			transform 0.3s var(--ease),
			border-color 0.3s var(--ease),
			box-shadow 0.3s var(--ease);
	}
	.tile::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(
			400px circle at var(--mx, 50%) var(--my, 0%),
			rgba(52, 211, 153, 0.14),
			transparent 40%
		);
		opacity: 0;
		transition: opacity 0.3s var(--ease);
		pointer-events: none;
	}
	.tile:hover {
		transform: translateY(-4px);
		border-color: var(--stroke-strong);
		box-shadow: var(--shadow-soft);
	}
	.tile:hover::after {
		opacity: 1;
	}
	.tile-icon {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		flex-shrink: 0;
		border-radius: 14px;
		font-size: 1.3rem;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		box-shadow: var(--neo);
		color: var(--accent-2);
	}
	.tile-text {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-width: 0;
	}
	.tile-title {
		font-weight: 650;
		font-size: 1.1rem;
	}
	.tile-sub {
		color: var(--text-faint);
		font-size: 0.88rem;
	}
	.tile-arrow {
		margin-left: auto;
		color: var(--text-faint);
		transition:
			transform 0.3s var(--ease),
			color 0.3s var(--ease);
	}
	.tile:hover .tile-arrow {
		transform: translateX(4px);
		color: var(--accent-2);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
