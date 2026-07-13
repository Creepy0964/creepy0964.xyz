<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { site } from '$lib/data/site';

	const iconFor = (label: string) =>
		({ github: 'github', telegram: 'telegram', email: 'mail' })[label] ?? 'arrow-right';
</script>

<svelte:head><title>contacts — creepy0964</title></svelte:head>

<PageHeader
	eyebrow="contacts"
	title="uhhh"
	lead="uuuuuuuuuuh........"
/>

<div class="wrap">
	<div class="channels">
		{#each site.socials as s}
			<a class="glass ch" href={s.href} target="_blank" rel="noreferrer">
				<span class="ch-icon" aria-hidden="true"><Icon name={iconFor(s.label)} size={20} /></span>
				<span class="ch-text">
					<span class="ch-label">{s.label}</span>
					<span class="ch-handle">{s.handle}</span>
				</span>
				<span class="ch-arrow" aria-hidden="true"><Icon name="arrow-right" size={18} /></span>
			</a>
		{/each}
	</div>

	<aside class="glass note">
		<h3>some useful info</h3>
		<p>
			usually, i'm always available, at least in telegram. keep in mind that i live in utc+3 timezone
		</p>
		<a class="cta" href={`mailto:${site.email}`}>
			send an email
			<Icon name="arrow-right" size={16} />
		</a>
	</aside>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 1.2rem;
		align-items: start;
	}
	.channels {
		display: grid;
		gap: 0.8rem;
	}
	.ch {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.1rem 1.3rem;
		color: var(--text);
		transition:
			transform 0.25s var(--ease),
			border-color 0.25s var(--ease);
	}
	.ch:hover {
		transform: translateX(4px);
		border-color: var(--stroke-strong);
	}
	.ch-icon {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		flex-shrink: 0;
		border-radius: 12px;
		font-size: 1.2rem;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		box-shadow: var(--neo);
		color: var(--accent-2);
	}
	.ch-text {
		display: flex;
		flex-direction: column;
	}
	.ch-label {
		font-weight: 600;
	}
	.ch-handle {
		color: var(--text-faint);
		font-size: 0.88rem;
	}
	.ch-arrow {
		margin-left: auto;
		color: var(--text-faint);
	}
	.note {
		padding: 1.6rem;
	}
	.note h3 {
		margin-top: 0;
	}
	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-top: 0.6rem;
		padding: 0.55rem 1.1rem;
		border-radius: 999px;
		background: linear-gradient(120deg, rgba(52, 211, 153, 0.28), rgba(74, 222, 128, 0.18));
		border: 1px solid var(--stroke-strong);
		color: var(--text);
		font-weight: 550;
		font-size: 0.9rem;
		transition: gap 0.2s var(--ease), border-color 0.2s var(--ease);
	}
	.cta:hover {
		border-color: var(--accent);
		gap: 0.65rem;
	}
	@media (max-width: 720px) {
		.wrap {
			grid-template-columns: 1fr;
		}
	}
</style>
