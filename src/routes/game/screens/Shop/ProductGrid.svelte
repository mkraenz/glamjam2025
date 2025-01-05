<script lang="ts">
	import type { ShopItemId } from '$lib/state/shop-items.data';
	import MoneyInline from '../../../components/common/MoneyInline.svelte';

	export type Product = {
		id: ShopItemId;
		label: string;
		description: string;
		imgSrc: string;
		imgAlt: string;
		state: 'active' | 'inactive' | 'sold' | 'for sale';
		price: number;
	};
	type Props = { items: Product[]; onSelect: (id: ShopItemId) => void };
	let { items, onSelect }: Props = $props();
</script>

<div class="product-grid">
	{#each items as item (item.id)}
		<div class="product-card" class:disabled={item.state === 'sold'}>
			<div class="product-card-top">
				<img src={item.imgSrc} alt={item.imgAlt} class="product-img" />
				<h3>{item.label}</h3>
			</div>
			<div class="product-card-bottom">
				<p class="product-card-description">{item.description}</p>
				<div class="product-price greyscale">
					<MoneyInline
						amount={item.price}
						free={['active', 'inactive'].includes(item.state)}
						size="lg"
					/>
				</div>
				{#if item.state === 'sold'}
					<button disabled class="product-cta">Sold out</button>
				{:else if item.state === 'for sale'}
					<button class="product-cta" onclick={() => onSelect(item.id)}>Buy now</button>
				{:else if item.state === 'active'}
					<button disabled class="product-cta" onclick={() => onSelect(item.id)}>Active</button>
				{:else if item.state === 'inactive'}
					<button class="product-cta" onclick={() => onSelect(item.id)}>Choose</button>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.product-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(12, min-content);
		grid-column-gap: 1rem;
		grid-row-gap: 3rem;
	}
	.product-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--peach-pastel);
		width: 280px;
		padding-top: 1rem;
		border-radius: 24px;
		box-shadow: 2px 2px 4px var(--pico-color);
	}
	.product-card.disabled {
		filter: grayscale(1);
	}
	.product-card-top {
		display: flex;
		flex-direction: column;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.product-card-bottom {
		display: flex;
		flex-direction: column;
	}
	.product-card-description {
		padding: 0.25rem;
	}
	.product-img {
		width: 180px;
		height: 180px;
		align-self: center;
		margin-bottom: 1rem;
	}
	.product-price {
		margin-bottom: 1rem;
	}
	.product-cta {
		border-bottom-right-radius: 24px;
		border-bottom-left-radius: 24px;
	}
	@media screen and (min-width: 480px) {
		.product-grid {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(6, min-content);
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.product-grid {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(4, min-content);
			grid-column-gap: 2rem;
			grid-row-gap: 4rem;
		}
	}
</style>
