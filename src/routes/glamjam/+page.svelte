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
	import Tutorial from './screens/Tutorial.svelte';
	import YourName from './screens/YourName.svelte';

	setGameStateContext();
	const game = getGameStateContext();
	let page = $derived(game.page);
</script>

<main>
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
	{#if page === 'iAmBusy'}<IAmBusy next="gameover" />{/if}
	{#if page === 'barCounter'}<BarCounter nextGood="thanks" nextBad="customerLeaves" />{/if}
	{#if page === 'customerLeaves'}<CustomerLeaves next="backToBusiness" />{/if}
	{#if page === 'thanks'}<Thanks next="backToBusiness" />{/if}
</main>

<style>
	main {
		text-align: center;
		height: 100vh;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
</style>
