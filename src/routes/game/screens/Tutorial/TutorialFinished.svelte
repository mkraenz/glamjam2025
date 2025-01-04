<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import DefaultAppbar from '../../../components/common/DefaultAppbar.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function onclick() {
		game.tutorialCompleted = true;
		game.navigate(next);
	}
</script>

<DefaultAppbar />
<Main>
	<p>Well, you obviously got this business figured out. I'll leave you to it then.</p>
	<p>
		I've gotta go now. I will be <span class="inline-emphasis">back tomorrow</span> for more
		delicious Bubble Tea. Thanks{#if game.name}, {game.name}{/if}!
	</p>
	<NextButton {onclick} onEnterKeyPressed={onclick} text="Bye, Brandon!" />
</Main>
