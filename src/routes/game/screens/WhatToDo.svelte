<script lang="ts">
	import { goto } from '$app/navigation';
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
	<h2 class="lonely-heading">What would you like to do?</h2>
	<group class="hstack">
		<NextButton
			onclick={() => game.navigate(makeTea)}
			onEnterKeyPressed={() => game.navigate(makeTea)}
			text="Take a new order"
		/>
		<!-- <NextButton
			onclick={() => game.navigate(design)}
			onEnterKeyPressed={() => game.navigate(design)}
			text="Design"
		/> -->
		<NextButton
			onclick={() => game.navigate(shop)}
			onEnterKeyPressed={() => game.navigate(shop)}
			text="Shopping"
		/>
		<NextButton
			classes="outline"
			onclick={() => goto('/')}
			onEnterKeyPressed={() => goto('/')}
			text="Call it a day"
		/>
	</group>
</Main>

<style>
	.lonely-heading {
		margin-bottom: 4rem;
	}
</style>
