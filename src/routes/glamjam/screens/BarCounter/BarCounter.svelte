<script lang="ts">
	import BubbleTea from './BubbleTea.svelte';
	import { BubbleTeaState, type TeaType } from '$lib/state/BubbleTeaState.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import Mistakes from './Mistakes.svelte';
	import { shuffle } from '$lib/utils/shuffle';
	import HelpButton from '../Tutorial/HelpButton.svelte';
	import Header from '../../../components/layout/Header.svelte';
	import Main from '../../../components/layout/Main.svelte';

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
		{ hideIf: () => tea.cup, onclick: addCup, text: 'Cup' },
		{ hideIf: () => tea.cap, onclick: addCap, text: 'Cap' },
		{ hideIf: () => tea.straw, onclick: addStraw, text: 'Straw' },
		{ hideIf: () => tea.tapioca, onclick: addTapioca, text: 'Tapioca' },
		{
			hideIf: () => !!tea.fluid,
			onclick: () => addFluid('strawberry milk'),
			text: 'Strawberry Milk'
		}
		// {
		// 	hideIf: () => !!tea.fluid,
		// 	onclick: () => addFluid('matcha'),
		// 	text: 'Matcha Latte'
		// }
	]);
	game.startStopwatch();
	let tutorialOpen = $state(false);
</script>

<Header>
	<HelpButton
		onClose={() => (tutorialOpen = false)}
		onOpen={() => (tutorialOpen = true)}
		open={tutorialOpen}
	/>
</Header>

<Main justifyContent="flex-start">
	<h2 class="pb-2">
		Let's make some <span class="h2-emphasis">{teaTypeToDisplay[tea.order.fluid]}</span>
	</h2>
	<BubbleTea
		cap={tea.cap}
		cup={tea.cup}
		tapioca={tea.tapioca}
		tea={tea.fluid}
		straw={tea.straw}
		strawColor={game.favColor}
	/>

	<group class="hstack">
		{#each buttons as aButton}
			<button
				onclick={aButton.onclick}
				class:transparent={aButton.hideIf()}
				aria-hidden={aButton.hideIf()}
				disabled={aButton.hideIf()}>{aButton.text}</button
			>
		{/each}
		<button onclick={serve}>Serve</button>
	</group>

	<Mistakes count={tea.mistakes} />
</Main>

<style>
	group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.pb-2 {
		padding-bottom: 2rem;
	}
</style>
