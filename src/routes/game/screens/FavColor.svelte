<script lang="ts">
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
</script>

<Main>
	<p>That's a beautiful name.<br />Nice to meet you, {game.name}.</p>
	<h2>What's your favorite color?</h2>
	<p>
		The best color in the world is <input
			class="bg-default"
			type="color"
			bind:value={game.favColor}
			onclick={() => audiobus.play('pop')}
		/>
	</p>
	<p>(click the box above to select your color)</p>

	<NextButton onclick={() => game.navigate(next)} onEnterKeyPressed={() => game.navigate(next)} />
</Main>
