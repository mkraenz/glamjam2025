<script lang="ts">
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';

	type Props = {
		onclick: () => void;
		text?: string;
		classes?: string;
		onEnterKeyPressed?: () => void;
	};
	let { onclick, text = 'Continue', classes, onEnterKeyPressed }: Props = $props();
	const audiobus = getAudiobusContext();

	function onkeyup(e: KeyboardEvent) {
		if (e.key === 'Enter' && onEnterKeyPressed) {
			e.preventDefault();
			onEnterKeyPressed();
		}
	}
</script>

<svelte:window {onkeyup} />

<button
	onclick={() => {
		audiobus.play('pop');
		onclick();
	}}
	class={`btn-miw ${classes}`}>{text}</button
>
