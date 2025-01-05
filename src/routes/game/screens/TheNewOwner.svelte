<script lang="ts">
	import { fallback, getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import Brandon from '../../components/chars/Brandon.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page; skip: Page };
	let { next, skip }: Props = $props();
	const game = getGameStateContext();

	function skipIntro() {
		game.skipTutorial = true;
		game.name = fallback.name;
		game.buy(`tea_${game.order}`, 0);
		game.navigate(skip);
	}
</script>

<Main>
	<h2>Welcome!</h2>
	<p>You must be the new owner of the Bubble Tea shop next door, right?</p>
	<p>Glad to get to know you. I'm <span class="character-name">Brandon<span>.</span></span></p>
	<group class="hstack">
		<NextButton onEnterKeyPressed={() => game.navigate(next)} onclick={() => game.navigate(next)} />
		<NextButton onclick={skipIntro} text="Your order?" classes="outline" />
	</group>
	<!-- <Brandon /> -->
</Main>
