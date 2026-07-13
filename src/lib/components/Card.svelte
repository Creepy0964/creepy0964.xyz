<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		title?: string;
		hint?: string;
		children: Snippet;
	}
	let { title, hint, children }: Props = $props();
</script>

<section class="card glass">
	{#if title}
		<div class="card-head">
			<h3>{title}</h3>
			{#if hint}<span class="hint">{hint}</span>{/if}
		</div>
	{/if}
	<div class="card-body">
		{@render children()}
	</div>
</section>

<style>
	.card {
		padding: clamp(1.2rem, 3vw, 1.8rem);
		transition:
			transform 0.3s var(--ease),
			border-color 0.3s var(--ease);
	}
	.card:hover {
		border-color: var(--stroke-strong);
	}
	.card-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.card-head h3 {
		margin: 0;
		font-size: 1.15rem;
	}
	.hint {
		color: var(--text-faint);
		font-size: 0.82rem;
		white-space: nowrap;
	}
	.card-body :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
