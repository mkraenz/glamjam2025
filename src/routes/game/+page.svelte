<script lang="ts">
	import db from '$lib/db';
	import type { DbGame } from '$lib/db/types';
	import {
		getGameStateContext,
		initialState,
		setGameStateContext
	} from '$lib/state/GameStateContext.svelte';
	import { onMount } from 'svelte';
	import BackToBusiness from './screens/BackToBusiness.svelte';
	import BarCounter from './screens/BarCounter/BarCounter.svelte';
	import CustomerLeaves from './screens/CustomerLeaves.svelte';
	import FavColor from './screens/FavColor.svelte';
	import FavColorWow from './screens/FavColorWow.svelte';
	import FavTea from './screens/FavTea.svelte';
	import GameOver from './screens/GameOver.svelte';
	import IAmBusy from './screens/IAmBusy.svelte';
	import NewCustomerOrder from './screens/NewCustomerOrder.svelte';
	import Thanks from './screens/Thanks.svelte';
	import TheNewOwner from './screens/TheNewOwner.svelte';
	import Tutorial from './screens/Tutorial/Tutorial.svelte';
	import TutorialFailed from './screens/Tutorial/TutorialFailed.svelte';
	import TutorialFinished from './screens/Tutorial/TutorialFinished.svelte';
	import WhatToDo from './screens/WhatToDo.svelte';
	import YourName from './screens/YourName.svelte';
	import LoadingScreen from './screens/LoadingScreen.svelte';
	import { getMetaContext } from '$lib/state/MetaContext.svelte';

	const game = getGameStateContext();
	const meta = getMetaContext();
	let page = $derived(game.page);

	$effect(() => {
		async function updateSavefile(data: DbGame) {
			if (!data.id) return;
			const savefile = await db.games.findOne(data.id);
			if (savefile) await db.games.update(data.id, data);
		}
		updateSavefile(game.toJSON());
	});
</script>

{#if !meta.savefileExists}
	<LoadingScreen />
{:else}
	{#if page === 'theNewOwner'}<TheNewOwner next="yourName" skip="backToBusiness" />{/if}
	{#if page === 'yourName'}<YourName next="favColor" />{/if}
	{#if page === 'favColor'}<FavColor next="favColorWow" />{/if}
	{#if page === 'favColorWow'}<FavColorWow next="favTea" />{/if}
	{#if page === 'favTea'}<FavTea next="backToBusiness" />{/if}
	{#if page === 'backToBusiness'}<BackToBusiness
			nextGood={game.skipTutorial ? 'barCounter' : 'tutorial'}
			nextBad="iAmBusy"
		/>{/if}
	{#if page === 'gameover'}<GameOver />{/if}
	{#if page === 'tutorial'}<Tutorial next="barCounter" />{/if}
	{#if page === 'tutorialFailed'}<TutorialFailed next="backToBusiness" />{/if}
	{#if page === 'iAmBusy'}<IAmBusy next="gameover" />{/if}
	{#if page === 'barCounter'}<BarCounter
			nextGood="thanks"
			nextBad={game.tutorialCompleted ? 'customerLeaves' : 'tutorialFailed'}
		/>{/if}
	{#if page === 'thanks'}<Thanks
			next={game.tutorialCompleted ? 'whatToDo' : 'tutorialFinished'}
		/>{/if}
	{#if page === 'tutorialFinished'}<TutorialFinished next="whatToDo" />{/if}
	{#if page === 'whatToDo'}<WhatToDo
			makeTea="newCustomerOrder"
			design="backToBusiness"
			shop="backToBusiness"
		/>{/if}
	{#if page === 'newCustomerOrder'}<NewCustomerOrder next="barCounter" />{/if}
	{#if page === 'customerLeaves'}<CustomerLeaves next="whatToDo" />{/if}
{/if}
