<script lang="ts">
	type Props = {
		onclick: () => void;
		text?: string;
		classes?: string;
		onEnterKeyPressed?: () => void;
	};
	let { onclick, text = 'Continue', classes, onEnterKeyPressed }: Props = $props();

	function onkeyup(e: KeyboardEvent) {
		if (e.key === 'Enter' && onEnterKeyPressed) {
			e.preventDefault();
			onEnterKeyPressed();
		}
	}
</script>

<svelte:window {onkeyup} />

<button {onclick} class={classes}>{text}</button>

<style>
	button {
		min-width: 180px;
	}
</style>
