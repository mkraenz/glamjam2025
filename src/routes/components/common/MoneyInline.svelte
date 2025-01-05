<script lang="ts">
	type Props = { amount: number; size?: 'sm' | 'lg' };
	let { amount, size = 'sm' }: Props = $props();
</script>

<span class="money-container">
	<img
		src="/icons/money.png"
		alt="money"
		class:money-icon-sm={size === 'sm'}
		class:money-icon-lg={size === 'lg'}
	/>
	<span class:money-label-lg={size === 'lg'}> {new Intl.NumberFormat().format(amount)}.00</span>
</span>

<style>
	.money-icon-sm {
		height: 2ch;
		padding-right: 0.25rem;
	}
	.money-icon-lg {
		height: 4ch;
		padding-right: 0.5rem;
	}
	.money-container {
		display: inline;
	}
	.money-label-lg {
		font-size: x-large;
	}
</style>
