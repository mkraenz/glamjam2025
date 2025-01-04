<script lang="ts">
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';

	const game = getGameStateContext();
</script>

<div class="money-container">
	<img src="/icons/money.png" alt="money" class="money-icon" />
	<div class="money-text">
		{game.money}
	</div>
</div>

<style>
	.money-icon {
		padding-right: 0.5rem;
		height: 32px;
	}
	.money-text {
		line-height: 32px;
		text-align: center;
		vertical-align: middle;
		font-size: x-large;
	}
	.money-container {
		display: flex;
		justify-content: center;
	}
</style>
