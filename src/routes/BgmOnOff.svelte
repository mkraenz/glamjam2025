<script lang="ts">
	import { getBgmContext } from '$lib/state/BgmContext.svelte';
	import VolumeOff from 'virtual:icons/feather/volume-x';
	import VolumeOn from 'virtual:icons/feather/volume-2';

	const bgm = getBgmContext();
</script>

<button class="outline" onclick={() => bgm.toggleAudio()}>
	{#if bgm.paused}
		<VolumeOff width="1.5rem" height="1.5rem" aria-label="BGM is off" />
	{:else}
		<VolumeOn width="1.5rem" height="1.5rem" aria-label="BGM is on" />
	{/if}
</button>
