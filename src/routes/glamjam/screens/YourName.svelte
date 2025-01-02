<script>
	import { fallback, getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<h2>What's your name?</h2>
<div>
	<p>
		My name is <input type="text" bind:value={game.name} placeholder={fallback.name} />
	</p>
</div>
<NextButton
	onclick={() => {
		game.name ||= fallback.name;
		game.navigate('favColor');
	}}
/>
