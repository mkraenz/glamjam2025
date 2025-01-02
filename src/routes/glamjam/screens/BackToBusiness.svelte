<script>
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<p class="mb-0">Anyway, I actually came here for my favorite beverage:</p>
<h2 class="h2-emphasis">Strawberry Milk Bubble Tea!</h2>
<p>Since you're the new shop owner, could you make me a cup, please?</p>

<group>
	<NextButton text="Sure!" onclick={() => game.navigate('gameover')} />
	<NextButton text="I'm busy." classes="outline" onclick={() => game.navigate('iAmBusy')} />
</group>
