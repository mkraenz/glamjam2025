<script lang="ts">
	import { getAudiobusContext, setAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import { range } from '$lib/utils/range';

	setAudiobusContext();
	const audiobus = getAudiobusContext();
</script>

{#each range(audiobus.MAX_SIMULTANEOUS_TRACKS) as index}
	<audio bind:this={audiobus.audioElements[index]}></audio>
{/each}
