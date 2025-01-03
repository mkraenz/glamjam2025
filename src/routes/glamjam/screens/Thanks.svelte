<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function formatSecs(ms: number) {
		return (ms / 1000).toFixed(2);
	}
</script>

<Main>
	<h2>Thanks a lot!</h2>
	{#if game.name}<p>You're the best, {game.name}</p>{/if}
	<p>
		And it took you only <span class="inline-emphasis">{formatSecs(game.stopwatchMs)} seconds</span
		>.
	</p>
	<p>Wow, this Strawberry Milk Bubble Tea is amazing! You're really good at this.</p>
	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Thank you!"
	/>
</Main>
