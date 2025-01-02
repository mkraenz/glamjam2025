<script lang="ts">
	type Props = {
		onclick: () => void;
		text?: string;
		classes?: string;
	};
	let { onclick, text = 'Continue', classes }: Props = $props();
</script>

<button {onclick} class={classes}>{text}</button>

<style>
	button {
		min-width: 180px;
	}
</style>
