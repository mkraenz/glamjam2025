<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = { left?: Snippet; main?: Snippet };
	let { left, main }: Props = $props();
</script>

<div
	class="area-header sidebar header"
	in:fade={{ delay: 400, duration: 200 }}
	out:fade={{ duration: 200 }}
>
	<div>
		{@render left?.()}
	</div>
	<div class="header-main">
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
	.header {
		display: grid;
		grid-template-columns: min-content 1fr;
	}
	.header-main {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
