<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<div
	class="area-header sidebar"
	in:fade={{ delay: 400, duration: 200 }}
	out:fade={{ duration: 200 }}
>
	{@render children()}
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
</style>
