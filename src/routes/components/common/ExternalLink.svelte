<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		children: Snippet;
	};
	let { href, children } = $props();
</script>

<a {href} target="_blank" referrerpolicy="no-referrer">{@render children()}</a>
