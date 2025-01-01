<h1 class="pico-color-fuchsia-500 anim-highlight">My Little Bubble Tea Shop</h1>

<style>
	@property --highlight-progress {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 0%;
	}
	h1 {
		font-size: 64px;
		-webkit-text-stroke-width: thin;
		-webkit-text-stroke-color: black;
		/* text-shadow: 4px 6px 4px #0f3f57; */
	}
	/* derived with the help of https://www.youtube.com/watch?v=8_SDTuoIYwA and https://www.youtube.com/watch?v=dba1xLnU9AM */
	.anim-highlight {
		--gradient-color: var(--pico-color-fuchsia-500);
		--highlight-progress: 0%;
		background: linear-gradient(
			120deg,
			var(--gradient-color) 0%,
			var(--gradient-color) calc(max(var(--highlight-progress) - 3%, 0%)),
			white var(--highlight-progress),
			var(--gradient-color) calc(max(var(--highlight-progress) + 3%, 0%)),
			var(--gradient-color) 100%
		);
		animation: highlighter 3s linear infinite;
		background-size: 150% 100%;
		background-position-x: -50px;
		background-clip: text;
		color: transparent;
	}

	@keyframes highlighter {
		0% {
			--highlight-progress: 0%;
		}
		50% {
			--highlight-progress: 100%;
		}
		100% {
			--highlight-progress: 100%;
		}
	}

	@media screen and (min-width: 600px) {
		h1 {
			font-size: 96px;
		}
	}
</style>
