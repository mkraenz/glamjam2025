<script lang="ts">
	import BubbleTea from './BubbleTea.svelte';
	import { BubbleTeaState, type TeaType } from '$lib/state/BubbleTeaState.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import Mistakes from './Mistakes.svelte';
	import { shuffle } from '$lib/utils/shuffle';

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
		if (tea.readyToServe) {
			game.stopStopwatch();
			game.navigate(nextGood);
		} else {
			tea.mistakes++;
			checkLose();
		}
	}
	const teaTypeToDisplay: { [type in Exclude<TeaType, false>]: string } = {
		matcha: 'Matcha Latte Bubble Tea',
		'strawberry milk': 'Strawberry Milk Bubble Tea'
	};

	const buttons = shuffle([
		{ condition: () => !tea.cup, onclick: addCup, text: 'Cup' },
		{ condition: () => !tea.cap, onclick: addCap, text: 'Cap' },
		{ condition: () => !tea.straw, onclick: addStraw, text: 'Straw' },
		{ condition: () => !tea.tapioca, onclick: addTapioca, text: 'Tapioca' },
		{
			condition: () => !tea.fluid,
			onclick: () => addFluid('strawberry milk'),
			text: 'Strawberry Milk'
		}
		// {
		// 	condition: () => !tea.fluid,
		// 	onclick: () => addFluid('matcha'),
		// 	text: 'Matcha Latte'
		// }
	]);
	game.startStopwatch();
</script>

<h2>Let's make some <span class="h2-emphasis">{teaTypeToDisplay[tea.order.fluid]}</span></h2>
<BubbleTea
	cap={tea.cap}
	cup={tea.cup}
	tapioca={tea.tapioca}
	tea={tea.fluid}
	straw={tea.straw}
	strawColor={game.favColor}
/>

<group>
	{#each buttons as aButton}
		{#if aButton.condition()}<button onclick={aButton.onclick}>{aButton.text}</button>{/if}
	{/each}
	<button onclick={serve}>Serve</button>
</group>

<Mistakes count={tea.mistakes} />

<style>
	group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
</style>
