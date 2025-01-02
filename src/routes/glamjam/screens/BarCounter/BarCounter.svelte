<script lang="ts">
	import BubbleTea from './BubbleTea.svelte';
	import { BubbleTeaState, type TeaType } from '$lib/state/BubbleTeaState.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import Mistakes from './Mistakes.svelte';

	type Props = { nextGood: Page; nextBad: Page };
	let { nextGood, nextBad }: Props = $props();
	const tea = new BubbleTeaState();
	const game = getGameStateContext();
	function checkLose() {
		if (tea.failure) game.navigate(nextBad);
	}
	function addCap() {
		tea.addCap();
		checkLose();
	}
	function addCup() {
		tea.cup = true;
		checkLose();
	}
	function addStraw() {
		tea.addStraw();
		checkLose();
	}
	function addFluid(type: TeaType) {
		tea.addFluid(type);
		checkLose();
	}
	function addTapioca() {
		tea.addTapioca();
		checkLose();
	}
	function serve() {
		if (tea.readyToServe) game.navigate(nextGood);
		else {
			tea.mistakes++;
			checkLose();
		}
	}
	const teaTypeToDisplay: { [type in Exclude<TeaType, false>]: string } = {
		matcha: 'Matcha Latte Bubble Tea',
		'strawberry milk': 'Strawberry Milk Bubble Tea'
	};
</script>

<h2>Let's make some <span class="h2-emphasis">{teaTypeToDisplay[tea.order.fluid]}</span></h2>
<BubbleTea cap={tea.cap} cup={tea.cup} tapioca={tea.tapioca} tea={tea.fluid} straw={tea.straw} />

<group>
	{#if !tea.cup}<button onclick={addCup}>Cup</button>{/if}
	{#if !tea.cap}<button onclick={addCap}>Cap</button>{/if}
	{#if !tea.straw}<button onclick={addStraw}>Straw</button>{/if}
	{#if !tea.fluid}<button onclick={() => addFluid('strawberry milk')}>Strawberry Milk</button>{/if}
	<!-- {#if !tea.fluid}<button onclick={() => addFluid('matcha')}>Matcha Latte</button>{/if} -->
	{#if !tea.tapioca}<button onclick={addTapioca}>Tapioca</button>{/if}
	<button onclick={serve}>Serve</button>
</group>

<Mistakes count={tea.mistakes} />
