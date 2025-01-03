<script lang="ts">
	import TutorialDialog from '../Tutorial/TutorialDialog.svelte';
	import HelpIcon from 'virtual:icons/feather/message-circle';

	type Props = { open: boolean; onClose: () => void; onOpen: () => void };
	let { open, onClose, onOpen: onclick }: Props = $props();
	let innerWidth = $state(0);
	const mdIcon = `width: 2rem; height: 2rem;`;
	const xsIcon = `width: 2rem; height: 2rem;`;
</script>

<svelte:window bind:innerWidth />

<!-- style={`width: 1rem; height: 1rem;`} -->
<button {onclick} class="outline help-btn"
	><HelpIcon opacity={0.5} style={innerWidth > 1024 ? mdIcon : xsIcon} /></button
>
<TutorialDialog {open} {onClose} />

<style>
	.help-btn {
		/* position: absolute; */
		top: 1rem;
		right: 1rem;
		padding: 0.5rem;
	}
	@media (max-width: 1024px) {
		.help-btn {
			padding: 0.25rem;
		}
	}
</style>
