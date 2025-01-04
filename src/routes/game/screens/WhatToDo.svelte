<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import DefaultAppbar from '../../components/common/DefaultAppbar.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { makeTea: Page; design: Page; shop: Page };
	let { makeTea, design, shop }: Props = $props();
	const game = getGameStateContext();
</script>

<DefaultAppbar animateOut />
<Main>
	<h2>What would you like to do?</h2>
	<group class="hstack">
		<NextButton
			onclick={() => game.navigate(makeTea)}
			onEnterKeyPressed={() => game.navigate(makeTea)}
			text="Make Bubble Tea"
		/>
		<NextButton
			onclick={() => game.navigate(design)}
			onEnterKeyPressed={() => game.navigate(design)}
			text="Design"
		/>
		<NextButton
			onclick={() => game.navigate(shop)}
			onEnterKeyPressed={() => game.navigate(shop)}
			text="Shopping"
		/>
	</group>
</Main>
