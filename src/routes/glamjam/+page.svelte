<script lang="ts">
	import { getGameStateContext, setGameStateContext } from '$lib/state/GameStateContext.svelte';
	import BackToBusiness from './screens/BackToBusiness.svelte';
	import FavColor from './screens/FavColor.svelte';
	import FavColorWow from './screens/FavColorWow.svelte';
	import GameOver from './screens/GameOver.svelte';
	import IAmBusy from './screens/IAmBusy.svelte';
	import TheNewOwner from './screens/TheNewOwner.svelte';
	import YourName from './screens/YourName.svelte';

	setGameStateContext();
	const game = getGameStateContext();
</script>

<main>
	{#if game.page === 'theNewOwner'}<TheNewOwner />{/if}
	{#if game.page === 'yourName'}<YourName />{/if}
	{#if game.page === 'favColor'}<FavColor />{/if}
	{#if game.page === 'favColorWow'}<FavColorWow />{/if}
	{#if game.page === 'backToBusiness'}<BackToBusiness />{/if}
	{#if game.page === 'gameover'}<GameOver />{/if}
	{#if game.page === 'iAmBusy'}<IAmBusy />{/if}
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
