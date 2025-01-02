<script lang="ts">
	import type { TeaType } from '$lib/state/BubbleTeaState.svelte';
	import { range } from '$lib/utils/range';

	type Props = {
		straw: boolean;
		cup: boolean;
		tea: TeaType;
		tapioca: boolean;
		cap: boolean;
		strawColor?: string;
	};
	let { cap, cup, straw, tapioca, tea, strawColor }: Props = $props();
	// const cap = true,
	// 	cup = true,
	// 	straw = true,
	// 	tapioca = true,
	// 	tea = 'matcha';
</script>

<div class="cap" class:hidden={!cap} class:cap-falling={cap}>
	<div
		class="straw"
		class:hidden={!straw}
		class:straw-falling={straw}
		style:background-color={strawColor}
	></div>
</div>
<div class="cup" class:hidden={!cup}>
	<div class="milk-tea tapioca-pearls" class:hidden={!tapioca}>
		{#each range(32)}
			<div class="tapioca" class:tapioca-falling={tapioca}></div>
		{/each}
	</div>
	<div
		class="milk-tea"
		class:hidden={!tea}
		class:fill-anim={tea}
		class:matcha={tea === 'matcha'}
		class:strawberry-milk={tea === 'strawberry milk'}
	></div>
</div>

<style lang="scss">
	@use 'sass:math';

	.milk-tea.tapioca-pearls {
		--tea-fill: 1;
		background: transparent;
	}
	.tapioca {
		--tapioca-diameter: 20px;
		position: absolute;
		border-radius: var(--tapioca-diameter);
		width: var(--tapioca-diameter);
		height: var(--tapioca-diameter);
		background: #121212;
		// transform: perspective(-10px) rotateX(1deg); /* TODO somehow revert the cup's transform */
	}
	$cup-height-with-inset: 248;
	@for $i from 1 through 32 {
		$target-bottom: math.random(40) + px;
		$start-bottom: 200 + math.random(100) + px;
		.tapioca:nth-child(#{$i}) {
			// https://sass-lang.com/documentation/breaking-changes/css-vars/
			--target-bottom: #{$target-bottom};
			--start-bottom: #{$start-bottom};
			bottom: var(--start-bottom);
			opacity: 0;
			left: math.random(150) + px;
		}
	}
	.tapioca-falling {
		animation: tapioca-fall-down 1s forwards;
	}
	.cap-falling {
		animation: cap-fall-down 1s forwards;
	}
	@property --tea-fill {
		syntax: '<number>';
		inherits: false;
		initial-value: 0;
	}
	div {
		--cup-height: 280px;
		--cup-width: 200px;
		--color-plastic-semitransparent: #48abe044;
		--tea-offset-y: 32px;
		--tea-offset-x: 32px;
		--color-matcha: #8ac583aa;
		--color-strawberry: #ffd9e7aa;
	}
	.cup {
		transform: perspective(10px) rotateX(-1deg);
		width: var(--cup-width);
		height: var(--cup-height);
		background: var(--color-plastic-semitransparent);
		margin: 50px;
		border: 1px solid var(--pico-color);
		border-radius: 10px 10px 20px 20px;
	}
	.cap {
		position: relative;
		transform: translateY(12px);
		width: calc(var(--cup-height) - 20px);
		height: calc(var(--cup-height) * 0.5);
		background-color: var(--color-plastic-semitransparent);
		border-radius: calc(var(--cup-height) * 0.5) calc(var(--cup-height) * 0.5) 0 0;
		border: 1px solid var(--pico-color);
		border-bottom: 0;
	}
	.milk-tea {
		--tea-fill: 0;
		background: var(--color-matcha);
		height: calc((var(--cup-height) - var(--tea-offset-y)) * var(--tea-fill));
		width: calc(var(--cup-width) - var(--tea-offset-x));
		position: absolute;
		left: calc(var(--tea-offset-x) * 0.5);
		bottom: calc(var(--tea-offset-y) * 0.66);
		border-radius: 4px 4px 20px 20px;
	}
	.matcha {
		background: var(--color-matcha);
	}
	.strawberry-milk {
		background: var(--color-strawberry);
	}
	.fill-anim {
		animation: fill 2s forwards;
	}
	.straw {
		background-color: var(--pico-color-fuchsia);
		border-radius: 4px;
		height: calc(var(--cup-height) * 1.64);
		width: 30px;
		position: absolute;
		transform: rotate(15deg);
		top: -40px;
		left: 50%;
	}
	.straw-falling {
		animation: straw-fall-down 0.5s forwards;
	}
	@keyframes straw-fall-down {
		0% {
			top: -2000px;
		}
		100% {
			top: -40px;
		}
	}
	@keyframes fill {
		0% {
			--tea-fill: 0;
		}
		100% {
			--tea-fill: 1;
		}
	}
	@keyframes tapioca-fall-down {
		0% {
			bottom: var(--start-bottom);
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		100% {
			bottom: var(--target-bottom);
			opacity: 1;
		}
	}
	@keyframes cap-fall-down {
		0% {
			transform: translateY(-300px);
		}
		100% {
			transform: translateY(12px);
		}
	}
	.hidden {
		opacity: 0;
	}
</style>
