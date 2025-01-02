<script>
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<p>Wow, really!?</p>
<input class="bg-default" type="color" value={game.favColor} />
<p>is my favorite color, too! You're amazing. We should hang out together one of these days.</p>

<NextButton onclick={() => game.navigate('backToBusiness')} />
