<div class="cap">
	<div class="straw"></div>
</div>
<div class="cup">
	<div class="milk-tea"></div>
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
		--tea-fill: 1;
		background: var(--color-matcha);
		height: calc((var(--cup-height) - var(--tea-offset-y)) * var(--tea-fill));
		width: calc(var(--cup-width) - var(--tea-offset-x));
		position: absolute;
		left: calc(var(--tea-offset-x) * 0.5);
		bottom: calc(var(--tea-offset-y) * 0.66);
		border-radius: 4px 4px 20px 20px;
		animation: fill 8s infinite;
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
		45% {
			--tea-fill: 1;
		}
		55% {
			--tea-fill: 1;
		}
		95% {
			--tea-fill: 0;
		}
		100% {
			--tea-fill: 0;
		}
	}
</style>
