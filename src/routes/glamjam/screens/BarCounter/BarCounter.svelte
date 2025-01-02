<script lang="ts">
	import BubbleTea from './BubbleTea.svelte';
	import { BubbleTeaState } from '$lib/state/BubbleTeaState.svelte';
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
	function addFluid() {
		tea.addFluid();
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
</script>

<BubbleTea cap={tea.cap} cup={tea.cup} tapioca={tea.tapioca} tea={tea.fluid} straw={tea.straw} />

<group>
	{#if !tea.cup}<button onclick={addCup}>Cup</button>{/if}
	{#if !tea.cap}<button onclick={addCap}>Cap</button>{/if}
	{#if !tea.straw}<button onclick={addStraw}>Straw</button>{/if}
	{#if !tea.fluid}<button onclick={addFluid}>Milk tea</button>{/if}
	{#if !tea.tapioca}<button onclick={addTapioca}>Tapioca</button>{/if}
	<button onclick={serve}>Serve</button>
</group>

<Mistakes count={tea.mistakes} />
