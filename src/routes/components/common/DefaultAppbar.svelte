<script lang="ts">
	import Appbar from '../layout/Appbar.svelte';
	import Money from './Money.svelte';

	type Props = { animated?: boolean; animateIn?: boolean; animateOut?: boolean };
	let { animated, animateIn, animateOut }: Props = $props();
</script>

<Appbar {animated} {animateIn} {animateOut}>
	{#snippet main()}
		<Money />
	{/snippet}
</Appbar>
