<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.home_title()}</title>
	<meta name="description" content={m.page_head_description()} />
</svelte:head>

<main class="main">
	<div class="v-center">
		<h1 class="pico-color-fuchsia-500">My Little Bubble Tea Shop</h1>
	</div>
	<p>
		TypeScriptTeatime's project for <a
			href="https://itch.io/jam/glam-jam"
			target="_blank"
			referrerpolicy="no-referrer">Glam Jam 2025</a
		>
	</p>
	<a href="/glamjam"><button class="pyutiful">Play</button></a>
</main>

<footer>
	<div class="footer-container">
		<p>Author: Mirco Kraenz aka TypeScriptTeatime.</p>
		<p><a href="/imprint">Acknowledgement</a></p>
	</div>
</footer>

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
	footer {
		position: absolute;
		bottom: 0;
	}
	.footer-container {
		display: flex;
		gap: 1rem;
		justify-content: center;
		width: 100vw;
	}
	.pyutiful {
		text-transform: uppercase;
		font-weight: bold;
		min-width: 12rem;
	}
	h1 {
		font-size: 64px;
	}
	.v-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* min-width:; */
	}
</style>
