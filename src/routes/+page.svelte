<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { fade } from 'svelte/transition';
	import BgmOnOff from './BgmOnOff.svelte';
	import Bubbles from './Bubbles.svelte';
	import ExternalLink from './components/common/ExternalLink.svelte';
	import Footer from './Footer.svelte';
	import HighlightedTitle from './HighlightedTitle.svelte';
	import NewGameButton from './NewGameButton.svelte';
	import NewGameModal from './NewGameModal.svelte';

	let newGameModalVisible = $state(false);

	function onkeyup(e: KeyboardEvent) {
		if (e.key === 'Enter' && !newGameModalVisible) {
			e.preventDefault();
			startGame();
		}
	}
	function startGame() {
		window.location.href = '/game';
	}
</script>

<svelte:head>
	<title>{m.home_title()}</title>
	<meta name="description" content={m.page_head_description()} />
</svelte:head>

<svelte:window {onkeyup} />

<div transition:fade>
	<main class="main">
		<div class="v-center">
			<HighlightedTitle />
		</div>
		<div class="v-center">
			<p class="animate fade transparent">
				{m.title__best_experience()}
				<ExternalLink href={m.title__best_experience_href()}
					>{m.title__best_experience_label()}</ExternalLink
				>
			</p>
		</div>
		<group class="hstack">
			<NewGameButton onclick={() => (newGameModalVisible = true)} />
			<NewGameModal close={() => (newGameModalVisible = false)} open={newGameModalVisible} />
			<button onclick={startGame} class="pyutiful animate fade transparent">
				{m.title__cta()}
			</button>
			<BgmOnOff />
		</group>
	</main>
	<Bubbles />
	<Footer />
</div>

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

	.animate.fade {
		animation: animate-fade 0.5s forwards;
		animation-delay: 3s; /* matching HighlightedTitle animation */
	}
	@keyframes animate-fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
