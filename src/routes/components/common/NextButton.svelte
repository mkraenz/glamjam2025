<script lang="ts">
	type Props = {
		onclick: () => void;
		text?: string;
	};
	let { onclick, text = 'Continue' }: Props = $props();
</script>

<button {onclick}>{text}</button>
