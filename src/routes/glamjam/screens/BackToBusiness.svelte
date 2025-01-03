<script lang="ts">
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { nextBad: Page; nextGood: Page };
	let { nextBad, nextGood }: Props = $props();

	const game = getGameStateContext();
</script>

<Main>
	<p class="mb-0">Anyway, I actually came here for my favorite beverage:</p>
	<h2 class="h2-emphasis">Strawberry Milk Bubble Tea!</h2>
	<p>Since you're the new shop owner, could you make me a cup, please?</p>

	<group>
		<NextButton
			text="Sure!"
			onclick={() => game.navigate(nextGood)}
			onEnterKeyPressed={() => game.navigate(nextGood)}
		/>
		<NextButton text="I'm busy." classes="outline" onclick={() => game.navigate(nextBad)} />
	</group>
</Main>
