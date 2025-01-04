<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		left?: Snippet;
		main?: Snippet;
		animated?: boolean;
		animateIn?: boolean;
		animateOut?: boolean;
	};
	let { left, main, animated = false, animateIn = false, animateOut = false }: Props = $props();
</script>

<div
	class="area-appbar sidebar appbar"
	in:fade={{ delay: 400, duration: animated || animateIn ? 200 : 0 }}
	out:fade={{ duration: animated || animateOut ? 200 : 0 }}
>
	<div>
		{@render left?.()}
	</div>
	<div class="appbar-main">
		{@render main?.()}
	</div>
</div>

<style>
	.sidebar {
		padding-top: 0.5rem;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
	}
	@media (max-width: 700px) {
		.sidebar {
			display: none;
		}
	}
	.appbar {
		display: grid;
		grid-template-columns: min-content 1fr;
	}
	.appbar-main {
		display: flex;
		flex-direction: row;
		align-items: flex-start; /* this makes sure the animation from default app bar to the help bar does not jump as it would with align-items:center (due to a changing container size before the image was completely invisible) */
		justify-content: center;
	}
</style>
