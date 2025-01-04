<script lang="ts">
	import db from '$lib/db';
	import type { DbGame } from '$lib/db/types';
	import { getGameStateContext, setGameStateContext } from '$lib/state/GameStateContext.svelte';
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

	// reminder: i did try to use the actual sveltekit routing and it did work. basically i can ensure gamestatecontext is set in the +layout.svelte but i lose the overview of which route leads where and injecting params.
	setGameStateContext();
	const game = getGameStateContext();
	let page = $derived(game.page);

	$effect(() => {
		async function save(data: DbGame) {
			if (!data.id) return;
			const savefile = await db.games.findOne(data.id);
			if (savefile) {
				await db.games.update(data.id, data);
			} else {
				await db.games.create(data);
			}
		}
		save(game.toJSON());
	});
</script>

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
