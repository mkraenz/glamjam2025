<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getBgmContext } from '$lib/state/BgmContext.svelte';
	import VolumeOff from 'virtual:icons/feather/volume-x';
	import VolumeOn from 'virtual:icons/feather/volume-2';
	import TitleMenuIconButton from './TitleMenuIconButton.svelte';
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';

	const bgm = getBgmContext();
	const audiobus = getAudiobusContext();
</script>

<TitleMenuIconButton
	onclick={() => {
		audiobus.play('pop');
		bgm.toggleAudio();
	}}
	ariaLabel={bgm.paused ? m.bgm__aria_off() : m.bgm__aria_on()}
>
	{#if bgm.paused}
		<VolumeOff width="1.5rem" height="1.5rem" />
	{:else}
		<VolumeOn width="1.5rem" height="1.5rem" />
	{/if}
</TitleMenuIconButton>
