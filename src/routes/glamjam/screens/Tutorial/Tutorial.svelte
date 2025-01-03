<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import TutorialText from './TutorialText.svelte';
	import Main from '../../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<Main>
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
</Main>
