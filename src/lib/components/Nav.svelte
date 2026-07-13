<script lang="ts">
	import { page } from '$app/stores';
	import { nav, site } from '$lib/data/site';

	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	let path = $derived($page.url.pathname);
</script>

<header class="nav" class:scrolled>
	<div class="container nav-inner">
		<a class="brand" href="/" aria-label="home">
			<span class="brand-mark" aria-hidden="true">
				<svg viewBox="0 0 32 32" width="26" height="26">
					<path
						d="M11 21 L11 11 L16 17 L21 11 L21 21"
						fill="none"
						stroke="url(#ng)"
						stroke-width="2.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<defs>
						<linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
							<stop offset="0" stop-color="#34d399" />
							<stop offset="1" stop-color="#4ade80" />
						</linearGradient>
					</defs>
				</svg>
			</span>
			<span class="brand-name">{site.name}</span>
		</a>

		<nav class="links" aria-label="primary navigation">
			{#each nav as item}
				<a
					href={item.href}
					class="link"
					class:active={path === item.href || path.startsWith(item.href + '/')}
					aria-current={path === item.href ? 'page' : undefined}
				>
					{item.title}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		transition: all 0.3s var(--ease);
		border-bottom: 1px solid transparent;
	}

	.nav.scrolled {
		background: rgba(10, 12, 18, 0.6);
		backdrop-filter: blur(14px) saturate(140%);
		-webkit-backdrop-filter: blur(14px) saturate(140%);
		border-bottom-color: var(--stroke);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		height: 68px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--text);
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.brand:hover {
		color: var(--text);
	}

	.brand-mark {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: 12px;
		background: var(--surface-strong);
		border: 1px solid var(--stroke);
		box-shadow: var(--neo);
	}

	.brand-name {
		font-size: 1.05rem;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.3rem;
		border-radius: 999px;
		background: var(--surface);
		border: 1px solid var(--stroke);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.link {
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
		font-size: 0.9rem;
		font-weight: 550;
		color: var(--text-dim);
		transition: all 0.2s var(--ease);
		white-space: nowrap;
	}

	.link:hover {
		color: var(--text);
		background: var(--surface-strong);
	}

	.link.active {
		color: var(--text);
		background: linear-gradient(120deg, rgba(52, 211, 153, 0.3), rgba(74, 222, 128, 0.2));
		box-shadow: inset 0 0 0 1px var(--stroke-strong);
	}

	@media (max-width: 640px) {
		.brand-name {
			display: none;
		}
		.links {
			gap: 0;
			padding: 0.25rem;
		}
		.link {
			padding: 0.4rem 0.6rem;
			font-size: 0.82rem;
		}
	}
</style>
