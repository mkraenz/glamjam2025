<script lang="ts">
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import { shopItemDataArray, type ShopItemId } from '$lib/state/shop-items.data';
	import DefaultAppbar from '../../../components/common/DefaultAppbar.svelte';
	import NextButton from '../../../components/common/NextButton.svelte';
	import Main from '../../../components/layout/Main.svelte';
	import ProductGrid, { type Product } from './ProductGrid.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
	const products: Product[] = $derived(
		shopItemDataArray.map(
			(item) =>
				game.getBoughtItem(item.id as ShopItemId) ?? {
					...item,
					state: 'for sale',
					id: item.id as ShopItemId
				}
		)
	);
	function onSelect(id: ShopItemId) {
		const item = products.find((product) => product.id === id);
		if (!item) return;
		if (game.hasBought(id)) {
			audiobus.play('pop');
			game.toggleActivation(id);
		} else {
			const success = game.buy(item.id);
			if (success) audiobus.play('upgrade');
			else audiobus.play('purchaseFailed');
		}
	}
</script>

<DefaultAppbar />

<Main gap={'2rem'}>
	<h1>Welcome, take a look around.</h1>
	<ProductGrid items={products} {onSelect} />

	<NextButton
		onclick={() => game.navigate(next)}
		onEnterKeyPressed={() => game.navigate(next)}
		text="Leave"
	/>
</Main>
