<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import Brandon from '../../components/chars/Brandon.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';

	type Props = { next: Page; skip: Page };
	let { next, skip }: Props = $props();
	const game = getGameStateContext();
</script>

<main class="ingame" in:sceneIn out:sceneOut>
	<h2>Welcome!</h2>
	<p>You must be the new owner of the Bubble Tea shop next door, right?</p>
	<p>Glad to get to know you. I'm <span class="character-name">Brandon<span>.</span></span></p>
	<group>
		<NextButton onEnterKeyPressed={() => game.navigate(next)} onclick={() => game.navigate(next)} />
		<NextButton
			onclick={() => {
				game.skipTutorial = true;
				game.navigate(skip);
			}}
			text="Your order?"
			classes="outline"
		/>
	</group>
	<!-- <Brandon /> -->
</main>
