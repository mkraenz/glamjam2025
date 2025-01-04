<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import { onMount } from 'svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';
	import Header from '../../components/layout/Header.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function formatSecs(ms: number) {
		return (ms / 1000).toFixed(2);
	}
	onMount(() => (game.money += 5));
</script>

<Header>
	{#snippet main()}
		<div>
			<p>
				$ {game.money}
			</p>
		</div>
	{/snippet}
</Header>

<Main>
	<h2>Thanks a lot!</h2>
	{#if game.name}<p>You're the best, {game.name}</p>{/if}
	<p>
		And it took you only <span class="inline-emphasis">{formatSecs(game.stopwatchMs)} seconds</span
		>.
	</p>
	<p>Wow, this Strawberry Milk Bubble Tea is amazing! You're really good at this.</p>
	<p>Here's the <span class="inline-emphasis">$5</span> for the Bubble Tea.</p>
	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Thank you!"
	/>
</Main>
