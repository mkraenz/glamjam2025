<script lang="ts">
	import BubbleTea from './BubbleTea.svelte';
	import { BubbleTeaState } from '$lib/state/BubbleTeaState.svelte';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import Mistakes from './Mistakes.svelte';
	import { shuffle } from '$lib/utils/random';
	import HelpButton from '../Tutorial/HelpButton.svelte';
	import Appbar from '../../../components/layout/Appbar.svelte';
	import Main from '../../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import { teaDataMap } from '$lib/state/teas.data';
	import type { TeaType } from '$lib/state/types';
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';

	type Props = { nextGood: Page; nextBad: Page };
	let { nextGood, nextBad }: Props = $props();
	const tea = new BubbleTeaState();
	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
	function checkLose() {
		if (tea.failure) game.navigate(nextBad);
	}
	function addLid() {
		audiobus.play('pop');
		tea.addLid();
		checkLose();
	}
	function addCup() {
		audiobus.play('pop');
		tea.cup = true;
		checkLose();
	}
	function addStraw() {
		audiobus.play('pop');
		tea.addStraw();
		checkLose();
	}
	function addFluid(type: TeaType) {
		audiobus.play('pop');
		tea.addFluid(type);
		checkLose();
	}
	function addTapioca() {
		audiobus.play('pop');
		tea.addTapioca();
		checkLose();
	}
	function serve() {
		audiobus.play('pop');
		if (tea.readyToServe) {
			audiobus.play('success');
			game.stopStopwatch();
			game.navigate(nextGood);
		} else {
			tea.mistakes++;
			checkLose();
		}
	}

	const buttons = shuffle([
		{ hideIf: () => tea.cup, onclick: addCup, text: 'Cup' },
		{ hideIf: () => tea.lid, onclick: addLid, text: 'Lid' },
		{ hideIf: () => tea.straw, onclick: addStraw, text: 'Straw' },
		{ hideIf: () => tea.tapioca, onclick: addTapioca, text: 'Tapioca' },
		{
			hideIf: () => !!tea.fluid,
			onclick: () => addFluid('strawberry'),
			text: m[teaDataMap[game.order].tKeyShort]()
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

<Appbar backgroundHidden>
	{#snippet left()}
		<HelpButton
			onClose={() => {
				audiobus.play('pop');
				tutorialOpen = false;
			}}
			onOpen={() => {
				audiobus.play('pop');
				tutorialOpen = true;
			}}
			open={tutorialOpen}
		/>
	{/snippet}
</Appbar>

<Main justifyContent="flex-start">
	<h2 class="pb-2">
		Let's make some <span class="h2-emphasis">{m[teaDataMap[game.order].tKey]()}</span>
	</h2>
	<BubbleTea
		lid={tea.lid}
		cup={tea.cup}
		tapioca={tea.tapioca}
		tea={tea.fluid}
		straw={tea.straw}
		strawColor={game.favColor}
		teaData={teaDataMap[game.order]}
		logoSrc={game.activeStickerShopItem?.image.type === 'img'
			? game.activeStickerShopItem?.image.src
			: undefined}
		logoScale={game.activeStickerShopItem?.type === 'stickers' &&
		game.activeStickerShopItem?.image.type === 'img'
			? game.activeStickerShopItem?.image.scale
			: undefined}
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
