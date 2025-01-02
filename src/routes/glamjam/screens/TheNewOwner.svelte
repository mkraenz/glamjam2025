<script>
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<h2>Welcome!</h2>
<p>You must be the new owner of the Bubble Tea shop next door, right?</p>
<p>Glad to get to know you. I'm <span class="character-name">Brandon<span>.</span></span></p>
<NextButton onclick={() => game.navigate('yourName')} />
