<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
</script>

<div class="layout">
	{@render children()}
</div>

<style>
	.layout {
		grid-template-areas:
			'side  main'
			'side  main'
			'side  main';
		grid-template-columns: min-content 1fr;
		display: grid;
	}
</style>
