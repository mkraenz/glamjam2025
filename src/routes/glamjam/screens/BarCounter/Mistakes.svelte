<script lang="ts">
	type Props = { count: number };
	let { count }: Props = $props();
</script>

<div class="container">
	{#each [...Array(count).keys()] as i}
		<p>X</p>
	{/each}
</div>

<style>
	.container {
		display: flex;
		height: 3rem;
		gap: 1rem;
		justify-content: center;
		margin-top: 3rem;
	}
</style>
