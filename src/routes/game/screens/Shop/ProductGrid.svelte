<script lang="ts">
	import MoneyInline from '../../../components/common/MoneyInline.svelte';

	export type Product = {
		id: string;
		label: string;
		description: string;
		imgSrc: string;
		imgAlt: string;
		soldOut?: boolean;
		price: number;
	};
	type Props = { items: Product[]; onBuy: (id: string) => void };
	let { items, onBuy }: Props = $props();
</script>

<div class="product-grid">
	{#each items as item (item.id)}
		<div class="product-card">
			<div class="product-card-top">
				<img src={item.imgSrc} alt={item.imgAlt} class="product-img" />
				<h3>{item.label}</h3>
			</div>
			<div class="product-card-bottom">
				<p>{item.description}</p>
				<div class="product-price"><MoneyInline amount={item.price} size="lg" /></div>
				{#if item.soldOut}
					<button disabled class="product-cta">Sold</button>
				{:else}
					<button class="product-cta" onclick={() => onBuy(item.id)}>Buy now</button>
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
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
		}
	}
</style>
