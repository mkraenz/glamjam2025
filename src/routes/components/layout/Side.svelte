<script lang="ts">
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<div class="area-side sidebar" in:sceneIn out:sceneOut>{@render children()}</div>

<style>
	.sidebar {
		padding: 0.5rem;
	}
	@media (max-width: 700px) {
		.sidebar {
			display: none;
		}
	}
</style>
