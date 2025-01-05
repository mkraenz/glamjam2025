<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import { onMount } from 'svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';
	import MoneyInline from '../../../components/common/MoneyInline.svelte';
	import * as m from '$lib/paraglide/messages';
	import { teaDataMap } from '$lib/state/teas.data';
	import Appbar from '../../../components/layout/Appbar.svelte';
	import Money from '../../../components/common/Money.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function formatSecs(ms: number) {
		return (ms / 1000).toFixed(2);
	}
	const price = 5;
	onMount(() => (game.money += price));
</script>

<Appbar animateIn>
	{#snippet main()}
		<Money animateJiggle />
	{/snippet}
</Appbar>

<Main>
	<h2>Thanks a lot!</h2>
	{#if game.name}<p>You're the best, {game.name}</p>{/if}
	<p>
		And it took you only <span class="inline-emphasis">{formatSecs(game.stopwatchMs)} seconds</span
		>.
	</p>
	<p>Wow, this {m[teaDataMap[game.order].tKey]()} is amazing! You're really good at this.</p>
	<p>Here's the <MoneyInline amount={price} /> for the Bubble Tea.</p>
	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Thank you, Brandon!"
	/>
</Main>
