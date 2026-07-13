<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<svelte:head><title>about — creepy0964</title></svelte:head>

<PageHeader
	eyebrow="about"
	title="a bit about me"
	lead="dield of pink and gold"
/>

<div class="cols">
	<Card title="who i am">
		<p>
			hi there! i'm creepy0964. i like life and doing funny shit of all sorts and kinds
		</p>
		<p>fun fact: i have deeply unusual voice range and, like, every second person i've met compared me to toxi$ :p</p>
	</Card>

	<Card title="what i'm into">
		<ul class="list">
			<li>obviously, IT. more specifically in "resume" page</li>
			<li>a lot of artistic things. but firstly, music and photography</li>
			<li>reading a lot of (pseudo)scientific shit, especially in personality typologies sphere</li>
		</ul>
	</Card>

	<Card title="current focus">
		<ul class="list">
			<!-- <li>placeholder: what you're working on</li> -->
			<li>as usual, doing diabolical and random shit :p</li>
		</ul>
	</Card>

	<Card title="favourite bands and artists">
		<dl class="bands">
			<div><dt>my main inspo in music</dt><dd>Toby Fox</dd></div>
			<div><dt>i really like their style</dt><dd>Title Fight</dd></div>
			<div><dt>the GOAT</dt><dd>конец солнечных дней</dd></div>
			<!-- <div><dt>status</dt><dd>placeholder: open to / busy</dd></div> -->
		</dl>
	</Card>
</div>

<style>
	.cols {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.2rem;
	}
	.list {
		margin: 0;
		padding-left: 1.1rem;
		color: var(--text-dim);
	}
	.list li {
		margin-bottom: 0.5rem;
	}
	.bands {
		display: grid;
		gap: 0.7rem;
		margin: 0;
	}
	.bands > div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 0.7rem;
		border-bottom: 1px solid var(--stroke);
	}
	.bands > div:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	.bands dt {
		color: var(--text-faint);
		font-size: 0.9rem;
	}
	.bands dd {
		margin: 0;
		color: var(--text);
		font-weight: 550;
		text-align: right;
	}
	@media (max-width: 640px) {
		.cols {
			grid-template-columns: 1fr;
		}
	}
</style>
