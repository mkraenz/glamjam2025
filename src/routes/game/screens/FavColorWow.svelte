<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<Main>
	<p>Wow, really!?</p>
	<input class="bg-default" type="color" value={game.favColor} disabled />
	<p>is my favorite color, too! You're amazing. We should hang out together one of these days.</p>

	<NextButton onclick={() => game.navigate(next)} onEnterKeyPressed={() => game.navigate(next)} />

	<style>
		input:disabled {
			opacity: 1;
		}
	</style>
</Main>
