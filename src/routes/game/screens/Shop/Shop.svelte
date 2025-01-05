<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import { shopItemDataArray, type ShopItemId } from '$lib/state/shop-items.data';
	import DefaultAppbar from '../../../components/common/DefaultAppbar.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';
	import ProductGrid, { type Product } from './ProductGrid.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const products: Product[] = $derived(
		shopItemDataArray.map((item) => ({
			...item,
			id: item.id as ShopItemId,
			soldOut: game.hasBought(item.id)
		}))
	);
	function onBuy(id: ShopItemId) {
		const item = products.find((product) => product.id === id);
		if (!item) return;
		if (game.money < item.price) return;
		game.buy(item.id, item.price);
	}
</script>

<DefaultAppbar />

<Main gap={'2rem'}>
	<h1>Welcome, take a good look around.</h1>
	<ProductGrid items={products} {onBuy} />

	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Leave"
	/>
</Main>
