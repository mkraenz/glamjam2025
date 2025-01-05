<script lang="ts">
	import { sceneIn, sceneOut } from '$lib/animations/sceneInOut';
	import type { Snippet } from 'svelte';

	type Props = { children: Snippet; justifyContent?: string; gap?: number | string };
	let { children, justifyContent, gap }: Props = $props();
</script>

<main
	class="ingame area-main"
	in:sceneIn
	out:sceneOut
	style:justify-content={justifyContent}
	style:gap
>
	{@render children()}
</main>
