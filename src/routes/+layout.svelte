<script module lang="ts">
	const sparkle: MouseEventHandler<EventTarget> = (e) => {
		const maxLifetimeMs = 600;
		const arr = [1, 0.9, 0.8, 0.5, 0.2];
		arr.forEach(function (i) {
			let x = (1 - i) * 75;
			let star = document.createElement('div');
			star.className = 'star';
			star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
			star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';
			document.body.appendChild(star);

			window.setTimeout(
				() => {
					document.body.removeChild(star);
				},
				Math.round(Math.random() * i * maxLifetimeMs)
			);
		});
	};
</script>

<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount, type Snippet } from 'svelte';
	import './global.css';
	import { detectServiceWorkerUpdate } from '$lib/pwa';
	import * as m from '$lib/paraglide/messages';
	import type { MouseEventHandler } from 'svelte/elements';
	import { getBgmContext, setBgmContext } from '$lib/state/BgmContext.svelte';
	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();

	onMount(detectServiceWorkerUpdate);
	setBgmContext();
	const bgm = getBgmContext();
</script>

<svelte:head>
	<title>{m.home_title()}</title>
</svelte:head>

<audio
	src="/audio/relax-girl.mp3"
	autoplay
	loop
	volume={0.2}
	bind:paused={bgm.paused}
	bind:this={bgm.audioElement}
></audio>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

<svelte:window onmousemove={sparkle} />
