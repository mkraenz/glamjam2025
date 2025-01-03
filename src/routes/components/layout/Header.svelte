<script lang="ts">
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<div class="area-header sidebar" in:sceneIn out:sceneOut>{@render children()}</div>

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
