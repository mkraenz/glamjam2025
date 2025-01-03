<script lang="ts">
	import TutorialDialog from '../Tutorial/TutorialDialog.svelte';
	import HelpIcon from 'virtual:icons/feather/message-circle';

	type Props = { open: boolean; onClose: () => void; onOpen: () => void };
	let { open, onClose, onOpen: onclick }: Props = $props();
</script>

<button {onclick} class="outline help-btn"
	><HelpIcon width="2rem" height="2rem" opacity={0.5} /></button
>
<TutorialDialog {open} {onClose} />

<style>
	.help-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
