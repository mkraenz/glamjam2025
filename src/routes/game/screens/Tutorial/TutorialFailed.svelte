<script lang="ts">
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();

	const game = getGameStateContext();
</script>

<Main>
	<h2>Oops...</h2>
	<p>I guess that was a bit too much information at once, right? I'm sorry.</p>
	<NextButton
		text="Let me try again."
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
	/>
</Main>
