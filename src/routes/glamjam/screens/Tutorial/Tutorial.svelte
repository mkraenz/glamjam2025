<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import TutorialText from './TutorialText.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<main class="ingame" in:sceneIn out:sceneOut>
	<p>You do? Thanks!</p>
	<p>I'm sure you already know but let me give you a quick reminder of</p>
	<TutorialText />
	<group>
		<NextButton
			onclick={() => game.navigate(next)}
			onEnterKeyPressed={() => game.navigate(next)}
			text="Thanks for the reminder!"
		/>
		<NextButton
			onclick={() => game.navigate(next)}
			text="I knew that already..."
			classes="outline"
		/>
	</group>
</main>
