<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	const game = getGameStateContext();
</script>

<Main>
	<h2>Game Over</h2>
	<p>Thanks for playing!</p>
	<group class="hstack">
		<NextButton
			text="New Game"
			onclick={() => game.reset()}
			onEnterKeyPressed={() => game.reset()}
		/>
		<a href="/" role="button" class="outline">Back to Title</a>
	</group>
</Main>
