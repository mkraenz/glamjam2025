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
			'header'
			'main';
		grid-template-rows: min-content 1fr;
		display: grid;
	}
</style>
