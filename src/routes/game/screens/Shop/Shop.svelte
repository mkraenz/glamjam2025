<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import DefaultAppbar from '../../../components/common/DefaultAppbar.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';
	import ProductGrid, { type Product } from './ProductGrid.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const products: Product[] = $derived(
		[
			{
				id: 'elephant-stickers',
				imgAlt: 'Elephant stickers',
				imgSrc: 'icons/laugh-256x256.png',
				label: 'Elephant Stickers',
				description: 'Stickers with Elephant motive to decorate your Bubble Tea cups.',
				price: 10
			},
			{
				id: 'name-stickers',
				imgAlt: 'Name stickers',
				imgSrc: 'icons/laugh-256x256.png',
				label: 'Name Stickers',
				description: 'Stickers with your name to decorate your Bubble Tea cups.',
				price: 15
			},
			{
				id: 'perfectionist',
				imgAlt: 'Perfectionist product icon',
				imgSrc: 'icons/laugh-256x256.png',
				label: 'Perfectionist',
				description: 'Challenge yourself by disallowing any mistakes when making Bubble Tea.',
				price: 5
			}
		].map((item) => ({
			...item,
			soldOut: game.hasBought(item.id)
		}))
	);
	$inspect(game.boughtShopItems);
	function onBuy(id: string) {
		const item = products.find((product) => product.id === id);
		if (!item) return;
		if (game.money < item.price) return;
		game.buy(item);
	}
</script>

<DefaultAppbar />

<Main>
	<h1>Welcome, take a good look around.</h1>
	<ProductGrid items={products} {onBuy} />

	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Leave"
	/>
</Main>
