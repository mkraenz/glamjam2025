<script lang="ts">
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import { teaDataMap } from '$lib/state/teas.data';

	type Props = { nextBad: Page; nextGood: Page };
	let { nextBad, nextGood }: Props = $props();

	const game = getGameStateContext();
</script>

<Main>
	<p class="mb-0">You know what? I actually came here for my favorite drink</p>
	<h2 class="h2-emphasis">{m[teaDataMap[game.order].tKey]()}!</h2>
	<p>Since you're the new shop owner, could you make me a cup, please?</p>

	<group class="hstack">
		<NextButton
			text="Sure!"
			onclick={() => game.navigate(nextGood)}
			onEnterKeyPressed={() => game.navigate(nextGood)}
		/>
		<NextButton text="I'm busy." classes="outline" onclick={() => game.navigate(nextBad)} />
	</group>
</Main>
