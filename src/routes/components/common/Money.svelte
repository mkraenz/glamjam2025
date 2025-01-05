<script lang="ts">
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';

	const game = getGameStateContext();
	type Props = { animateJiggle?: boolean };
	let { animateJiggle = false }: Props = $props();
</script>

<div class="money-container" class:animate={animateJiggle} class:jiggle={animateJiggle}>
	<img src="/icons/money.png" alt="money" class="money-icon" />
	<div class="money-text">
		{new Intl.NumberFormat().format(game.money)}.00
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
	.animate.jiggle {
		animation: animate-jiggle 2s infinite;
		animation-delay: 0.5s;
		--max-jiggle-angle: 8deg;
	}
	@keyframes animate-jiggle {
		0% {
			transform: rotate(0deg);
		}
		2% {
			transform: rotate(var(--max-jiggle-angle));
		}
		4% {
			transform: rotate(0deg);
		}
		6% {
			transform: rotate(calc(-1 * var(--max-jiggle-angle)));
		}
		8% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(0deg);
		}
		12% {
			transform: rotate(var(--max-jiggle-angle));
		}
		14% {
			transform: rotate(0deg);
		}
		16% {
			transform: rotate(calc(-1 * var(--max-jiggle-angle)));
		}
		18% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
