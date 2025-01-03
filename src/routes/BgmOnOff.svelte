<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getBgmContext } from '$lib/state/BgmContext.svelte';
	import VolumeOff from 'virtual:icons/feather/volume-x';
	import VolumeOn from 'virtual:icons/feather/volume-2';

	const bgm = getBgmContext();
</script>

<button class="outline animate fade transparent" onclick={() => bgm.toggleAudio()}>
	{#if bgm.paused}
		<VolumeOff width="1.5rem" height="1.5rem" aria-label={m.bgm__aria_off()} />
	{:else}
		<VolumeOn width="1.5rem" height="1.5rem" aria-label={m.bgm__aria_on()} />
	{/if}
</button>

<style>
	.animate.fade {
		animation: animate-fade 0.5s forwards;
		animation-delay: 3s; /* matching HighlightedTitle animation */
	}
	@keyframes animate-fade {
		0% {
			opacity: 0;
			/* transform: scaleY(0); */
		}
		100% {
			opacity: 1;
			/* transform: scaleY(1); */
		}
	}
</style>
