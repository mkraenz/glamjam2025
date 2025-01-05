<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import SaveIcon from 'virtual:icons/feather/save';
	import TitleMenuIconButton from './TitleMenuIconButton.svelte';

	type Props = { onclick: () => void };
	let { onclick }: Props = $props();
</script>

<TitleMenuIconButton {onclick} ariaLabel={m.title__reset_game__open_button_aria()}>
	<SaveIcon width="1.5rem" height="1.5rem" />
</TitleMenuIconButton>
