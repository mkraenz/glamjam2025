<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<div in:fly={{ x: 200, duration: 200, opacity: 0, delay: 200 }} out:fade={{ duration: 200 }}>
	{@render children()}
</div>

<style>
	div {
		height: 100vh;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
</style>
