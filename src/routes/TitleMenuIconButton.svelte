<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet; onclick: () => void; ariaLabel: string };
	let { children, onclick, ariaLabel }: Props = $props();
</script>

<button class="outline animate fade transparent" {onclick} aria-label={ariaLabel}>
	{@render children()}
</button>

<style>
	.animate.fade {
		animation: animate-fade 0.5s forwards;
		animation-delay: 3s; /* matching HighlightedTitle animation */
	}
	@keyframes animate-fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
