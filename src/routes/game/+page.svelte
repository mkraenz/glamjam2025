<script lang="ts">
	import { getGameStateContext, setGameStateContext } from '$lib/state/GameStateContext.svelte';
	import BackToBusiness from './screens/BackToBusiness.svelte';
	import BarCounter from './screens/BarCounter/BarCounter.svelte';
	import CustomerLeaves from './screens/CustomerLeaves.svelte';
	import FavColor from './screens/FavColor.svelte';
	import FavColorWow from './screens/FavColorWow.svelte';
	import GameOver from './screens/GameOver.svelte';
	import IAmBusy from './screens/IAmBusy.svelte';
	import Thanks from './screens/Thanks.svelte';
	import TheNewOwner from './screens/TheNewOwner.svelte';
	import Tutorial from './screens/Tutorial/Tutorial.svelte';
	import TutorialFailed from './screens/Tutorial/TutorialFailed.svelte';
	import TutorialFinished from './screens/Tutorial/TutorialFinished.svelte';
	import WhatToDo from './screens/WhatToDo.svelte';
	import YourName from './screens/YourName.svelte';

	setGameStateContext('thanks');
	const game = getGameStateContext();
	let page = $derived(game.page);
</script>

{#if page === 'theNewOwner'}<TheNewOwner next="yourName" skip="backToBusiness" />{/if}
{#if page === 'yourName'}<YourName next="favColor" />{/if}
{#if page === 'favColor'}<FavColor next="favColorWow" />{/if}
{#if page === 'favColorWow'}<FavColorWow next="backToBusiness" />{/if}
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
{#if page === 'thanks'}<Thanks next="tutorialFinished" />{/if}
{#if page === 'tutorialFinished'}<TutorialFinished next="whatToDo" />{/if}
{#if page === 'whatToDo'}<WhatToDo
		makeTea="barCounter"
		design="backToBusiness"
		shop="backToBusiness"
	/>{/if}
{#if page === 'customerLeaves'}<CustomerLeaves next="backToBusiness" />{/if}
