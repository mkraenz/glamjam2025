<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<Main>
	<p>Oh, that's too bad. I guess you're still preparing for the grand opening.</p>
	<p>
		Alright then. See you around{#if game.name}, {game.name}{/if}!
	</p>

	<NextButton
		text="Bye, Brandon!"
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
	/>
</Main>
