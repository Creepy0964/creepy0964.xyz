<script lang="ts">
	import '$lib/styles/app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="app">
	<Nav />
	<main class="container main">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.main {
		flex: 1;
		padding-top: clamp(2.5rem, 6vw, 4.5rem);
		padding-bottom: 2rem;
	}
</style>
