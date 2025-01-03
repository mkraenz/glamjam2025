<script lang="ts">
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	const game = getGameStateContext();
</script>

<main class="ingame" in:sceneIn out:sceneOut>
	<h2>Game Over</h2>
	<p>Thanks for playing!</p>
	<group>
		<NextButton
			text="New Game"
			onclick={() => game.reset()}
			onEnterKeyPressed={() => game.reset()}
		/>
		<a href="/" role="button" class="outline">Back to Title</a>
	</group>
</main>
