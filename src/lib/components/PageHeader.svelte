<script lang="ts">
	interface Props {
		eyebrow?: string;
		title: string;
		lead?: string;
	}
	let { eyebrow, title, lead }: Props = $props();
</script>

<header class="ph">
	{#if eyebrow}<span class="eyebrow">{eyebrow}</span>{/if}
	<h1 class="gradient-text">{title}</h1>
	{#if lead}<p class="lead">{lead}</p>{/if}
</header>

<style>
	.ph {
		margin-bottom: 2.5rem;
		animation: rise 0.6s var(--ease) both;
	}
	.eyebrow {
		margin-bottom: 0.8rem;
	}
	.lead {
		max-width: 60ch;
		font-size: 1.1rem;
		color: var(--text-dim);
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
	}
</style>
