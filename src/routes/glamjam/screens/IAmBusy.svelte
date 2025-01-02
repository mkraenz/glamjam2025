<script>
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<p>Oh, that's too bad. I guess you're still preparing for the grand opening.</p>
<p>
	Alright then. See you around, {game.name}!
</p>

<group>
	<NextButton text="Bye, Brandon!" onclick={() => game.navigate('gameover')} />
</group>
