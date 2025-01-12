<script module lang="ts">
	const { sparkle } = useStarParticles();
</script>

<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount, type Snippet } from 'svelte';
	import './global.css';
	import { detectServiceWorkerUpdate } from '$lib/pwa';
	import * as m from '$lib/paraglide/messages';
	import { getBgmContext, setBgmContext } from '$lib/state/BgmContext.svelte';
	import {
		getGameStateContext,
		initialState,
		setGameStateContext
	} from '$lib/state/GameStateContext.svelte';
	import db from '$lib/db';
	import { getMetaContext, setMetaContext } from '$lib/state/MetaContext.svelte';
	import Audiobus from './game/Audiobus.svelte';
	import { setAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import { useStarParticles } from './star-particle-effect';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();

	onMount(detectServiceWorkerUpdate);
	setBgmContext();
	setAudiobusContext();
	const bgm = getBgmContext();
	function onkeyup(e: KeyboardEvent) {
		if (e.key === 'm') {
			e.preventDefault();
			bgm.toggleAudio();
		}
	}

	// reminder: i did try to use the actual sveltekit routing and it did work. basically i can ensure gamestatecontext is set in the +layout.svelte but i lose the overview of which route leads where and injecting params.
	setGameStateContext();
	setMetaContext();
	const meta = getMetaContext();
	const game = getGameStateContext();

	onMount(async () => {
		const savefile = await db.games.findOne(initialState.id);
		if (!savefile) await db.games.create(game.toJSON());
		else game.fromJSON(savefile);
		window.setTimeout(() => {
			meta.savefileExists = true;
		}, 600);

		document.addEventListener('click', musicPlay);
		function musicPlay() {
			bgm.toggleAudio();
			document.removeEventListener('click', musicPlay);
		}
	});
</script>

<svelte:head>
	<title>{m.home_title()}</title>
</svelte:head>
<svelte:window {onkeyup} onmousemove={sparkle} />

<audio
	src="/audio/relax-girl.mp3"
	loop
	volume={0.05}
	bind:paused={bgm.paused}
	bind:this={bgm.audioElement}
></audio>

<Audiobus />

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
