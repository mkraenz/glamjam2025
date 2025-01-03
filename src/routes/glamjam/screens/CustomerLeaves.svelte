<script lang="ts">
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();

	const game = getGameStateContext();
</script>

<main class="ingame" in:sceneIn out:sceneOut>
	<p>I'm sorry but I think I forgot to switch off the oven at home. I have to leave. Bye!</p>
	<NextButton
		text="But your Bubble Tea..."
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
	/>
</main>
