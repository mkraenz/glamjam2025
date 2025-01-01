<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import BgmOnOff from './BgmOnOff.svelte';
	import Bubbles from './Bubbles.svelte';
	import ExternalLink from './components/common/ExternalLink.svelte';
	import Footer from './Footer.svelte';
	import HighlightedTitle from './HighlightedTitle.svelte';
</script>

<svelte:head>
	<title>{m.home_title()}</title>
	<meta name="description" content={m.page_head_description()} />
</svelte:head>

<main class="main">
	<div class="v-center">
		<HighlightedTitle />
	</div>
	<p>
		TypeScriptTeatime's project for
		<ExternalLink href="https://itch.io/jam/glam-jam">Glam Jam 2025</ExternalLink>
	</p>
	<div>
		<a href="/glamjam" role="button" class="pyutiful">Play</a>
		<BgmOnOff />
	</div>
</main>
<Bubbles />
<Footer />

<style>
	.main {
		text-align: center;
		height: 100vh;
		margin: 0 auto;
		padding: 1rem;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 100px 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.pyutiful {
		text-transform: uppercase;
		font-weight: bold;
		min-width: 12rem;
		letter-spacing: 0.2rem;
		font-size: xx-large;
		text-shadow: 1px 1px 1px #0f3f57;
	}
	.v-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
