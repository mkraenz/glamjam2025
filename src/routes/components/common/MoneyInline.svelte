<script lang="ts">
	type Props = { amount: number };
	let { amount }: Props = $props();
</script>

<span class="money-container">
	<img src="/icons/money.png" alt="money" class="money-icon" />
	<span>{amount}</span>
</span>

<style>
	.money-icon {
		height: 2ch;
	}
	.money-container {
		display: inline;
	}
</style>
