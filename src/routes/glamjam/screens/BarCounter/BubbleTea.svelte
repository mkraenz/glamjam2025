<script lang="ts">
	type Props = {
		straw: boolean;
		cup: boolean;
		tea: false | 'matcha' | 'strawberry milk';
		tapioca: boolean;
		cap: boolean;
	};
	let { cap, cup, straw, tapioca, tea }: Props = $props();
</script>

<div class="cap" class:hidden={!cap}>
	<div class="straw" class:hidden={!straw}></div>
</div>
<div class="cup" class:hidden={!cup}>
	<div
		class="milk-tea"
		class:hidden={!tea}
		class:fill-anim={tea}
		class:matcha={tea === 'matcha'}
		class:strawberry-milk={tea === 'strawberry milk'}
	></div>
	<div class="tapioca" class:hidden={!tapioca}></div>
</div>

<style>
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
		--color-matcha: #8ac583;
		--color-strawberry: #ffd9e7;
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
		background: var(--pico-color-fuchsia);
		height: calc(var(--cup-height) * 1.64);
		width: 30px;
		position: absolute;
		transform: rotate(15deg);
		top: -40px;
		left: 50%;
	}
	@keyframes fill {
		0% {
			--tea-fill: 0;
		}
		100% {
			--tea-fill: 1;
		}
	}
	.hidden {
		opacity: 0;
	}
</style>
