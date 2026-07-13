<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<footer class="footer">
	<div class="container footer-inner">
		<span class="muted">© {site.name} · placeholder</span>
		<span class="muted small">built with sveltekit</span>
	</div>
</footer>

<style>
	.footer {
		margin-top: 5rem;
		border-top: 1px solid var(--stroke);
		background: rgba(8, 9, 13, 0.4);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		height: 64px;
		flex-wrap: wrap;
	}

	.muted {
		color: var(--text-faint);
		font-size: 0.85rem;
	}

	.small {
		font-size: 0.8rem;
	}
</style>
