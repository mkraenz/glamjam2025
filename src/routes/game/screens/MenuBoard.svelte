<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';
	import MoneyInline from '../../components/common/MoneyInline.svelte';
	import * as m from '$lib/paraglide/messages';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	let menuItems = $derived(game.boughtTeas);

	let shopName = $derived(`${game.name}'s Bubble Tea Paradise`);
	let logo = $derived(game.getBoughtItem(game.activeMenuBoardLogo));
</script>

<Main justifyContent="space-between">
	<div class="menu-board">
		<h2>{shopName}</h2>
		<div class="menu-items">
			{#each menuItems as item}
				<div class="menu-item" style:background-color={item.fluidColor}>
					<div>
						<span>{m[item.tKey]()}</span>
					</div>
					<div>
						<MoneyInline amount={item.price} />
					</div>
				</div>
			{/each}
		</div>
		{#if game.activeMenuBoardLogo}
			<img
				src={logo?.imgSrc}
				class="menu-logo"
				alt={`logo of ${shopName}`}
				style:--favorite-color={game.favColor}
			/>
		{/if}
	</div>
	<NextButton onEnterKeyPressed={() => game.navigate(next)} onclick={() => game.navigate(next)} />
</Main>

<style>
	.menu-board {
		padding: 1rem;
		border: 4px solid var(--pico-color);
		border-radius: 20px;
		margin-bottom: 2rem;
		box-shadow: 4px 4px 16px #00000088;
	}
	.menu-item {
		border-radius: 20px;
	}
	.menu-items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.menu-logo {
		--favorite-color: var(--peach-pastel);
		background-color: var(--favorite-color);
		margin-top: 1rem;
		padding: 1rem;
		border: 3px solid var(--pico-color);
		border-radius: 50%;
		width: 30%;
	}
</style>
