<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function formatSecs(ms: number) {
		return (ms / 1000).toFixed(2);
	}
</script>

<h2>Thanks a lot!</h2>
{#if game.name}<p>You're the best, {game.name}</p>{/if}
<p>It only took you {formatSecs(game.stopwatchMs)} seconds.</p>
<p>Wow, this Strawberry Milk Bubble Tea is amazing! You're really good at this.</p>
{#if game.name}
	<p>I've gotta go now. See you soon, {game.name}.</p>
{:else}
	<p>Bye.</p>
{/if}
<NextButton onclick={() => game.navigate(next)} text="Thank you!" />
