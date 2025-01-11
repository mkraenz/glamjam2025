<script lang="ts">
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import { range } from '$lib/utils/range';

	const audiobus = getAudiobusContext();
</script>

{#each range(audiobus.MAX_SIMULTANEOUS_TRACKS) as index}
	<audio bind:this={audiobus.audioElements[index]}></audio>
{/each}
