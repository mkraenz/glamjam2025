<script lang="ts">
	import TutorialDialog from '../Tutorial/TutorialDialog.svelte';
	import HelpIcon from 'virtual:icons/feather/message-circle';

	type Props = { open: boolean; onClose: () => void; onOpen: () => void };
	let { open, onClose, onOpen: onclick }: Props = $props();
	let innerWidth = $state(0);
	const mdIcon = `width: 1.5rem; height: 1.5rem;`;
	const xsIcon = `width: 1rem; height: 1rem;`;
</script>

<svelte:window bind:innerWidth />

<!-- style={`width: 1rem; height: 1rem;`} -->
<button {onclick} class="outline help-btn"
	><HelpIcon opacity={0.5} style={innerWidth > 1024 ? mdIcon : xsIcon} /></button
>
<TutorialDialog {open} {onClose} />

<style>
	.help-btn {
		padding-top: 0.25rem;
	}
</style>
