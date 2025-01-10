<script lang="ts">
	import type { TeaRenderData } from '$lib/state/types';
	import { range } from '$lib/utils/range';

	type Props = {
		teaData: TeaRenderData;
		scale?: number;
	};
	let { teaData, scale = 1 }: Props = $props();
</script>

<div style:--fluid-color={teaData.fluidColor} class="bubble-tea" style:--scale={scale}>
	<div class="lid">
		<div class="straw"></div>
	</div>
	<div class="cup">
		<div class="milk-tea tapioca-pearls">
			{#each range(32)}
				<div class="tapioca"></div>
			{/each}
		</div>
		<div class="milk-tea colored-fluid"></div>
	</div>
</div>

<style lang="scss">
	@use 'sass:math';
	.bubble-tea {
		--scale: 1;
		--cup-height: calc(280px * var(--scale));
		--cup-width: calc(200px * var(--scale));
		--color-plastic-semitransparent: #48abe044;
		--tea-offset-y: calc(32px * var(--scale));
		--tea-offset-x: calc(32px * var(--scale));
		--color-matcha: #8ac583aa;
		--color-strawberry: #ffd9e7aa;
	}
	.milk-tea.tapioca-pearls {
		background: transparent;
	}
	.tapioca {
		--tapioca-diameter: 20px;
		position: absolute;
		border-radius: var(--tapioca-diameter);
		width: var(--tapioca-diameter);
		height: var(--tapioca-diameter);
		background: #121212;
	}
	$cup-height-with-inset: 248;
	@for $i from 1 through 32 {
		$target-bottom: math.random(40) + px;
		$left: math.random(120) + px;
		.tapioca:nth-child(#{$i}) {
			// https://sass-lang.com/documentation/breaking-changes/css-vars/
			--target-bottom: #{$target-bottom};
			--left: #{$left};
			bottom: var(--target-bottom);
			opacity: 1;
			left: calc(var(--left) * var(--scale));
		}
	}
	.cup {
		transform: perspective(calc(9px * var(--scale))) rotateX(-1deg);
		width: var(--cup-width);
		height: var(--cup-height);
		background: var(--color-plastic-semitransparent);
		border: 1px solid var(--pico-color);
		border-radius: 10px 10px 20px 20px;
		margin-top: calc(0.17 * var(--cup-height));
		margin-left: auto;
		margin-right: auto;
	}
	.lid {
		position: relative;
		transform: translateY(12px);
		width: calc(var(--cup-height) - (20px * var(--scale)));
		height: calc(var(--cup-height) * 0.5);
		background-color: var(--color-plastic-semitransparent);
		border-radius: calc(var(--cup-height) * 0.5) calc(var(--cup-height) * 0.5) 0 0;
		border: 1px solid var(--pico-color);
		border-bottom: 0;
		margin-right: auto;
		margin-left: auto;
	}
	.milk-tea {
		--tea-fill: 1;
		background: var(--color-matcha);
		height: calc((var(--cup-height) - var(--tea-offset-y)) * var(--tea-fill));
		width: calc(var(--cup-width) - var(--tea-offset-x));
		position: absolute;
		left: calc(var(--tea-offset-x) * 0.5);
		bottom: calc(var(--tea-offset-y) * 0.66);
		border-radius: 4px 4px 20px 20px;
	}
	.colored-fluid {
		background: var(--fluid-color);
	}
	.straw {
		background-color: var(--pico-color-fuchsia);
		border-radius: 4px;
		height: calc(var(--cup-height) * 1.44);
		width: calc(var(--cup-height) * 0.15);
		position: absolute;
		transform: rotate(15deg);
		top: calc(-1 * 0.14 * var(--cup-height));
		left: 50%;
	}
</style>
