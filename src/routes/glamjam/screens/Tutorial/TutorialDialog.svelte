<script lang="ts">
	import TutorialText from './TutorialText.svelte';
	import CloseIcon from 'virtual:icons/feather/x';

	type Props = { open: boolean; onClose: () => void };
	let { open, onClose: onclick }: Props = $props();
</script>

<!-- TODO this is broken on mobile :/ -->
<dialog {open} class="ingame">
	<button {onclick} class="outline close-btn"><CloseIcon width="2rem" height="2rem" /></button>
	<TutorialText />
	<form method="dialog">
		<button {onclick} class="ok-btn">OK</button>
	</form>
</dialog>

<style>
	.ok-btn {
		min-width: 180px;
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
