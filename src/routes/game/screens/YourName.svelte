<script lang="ts">
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';
	import type { Page } from '$lib/state/GameStateContext.svelte';
	import { fallback, getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
	function onclick() {
		game.name ||= fallback.name;
		game.navigate(next);
	}

	function stopPropagation(e: Event) {
		// this is in order to avoid the global key listener events to trigger while typing in the input field
		e.stopPropagation();
	}
	async function onbeforeinput() {
		// note: onkeydown/up would also trigger for special keys like Alt, Shift, etc.
		await audiobus.play('pop');
	}
</script>

<Main>
	<h2>What's your name?</h2>
	<div>
		<p>
			My name is <input
				type="text"
				bind:value={game.name}
				placeholder={fallback.name}
				onkeyup={stopPropagation}
				{onbeforeinput}
			/>
		</p>
	</div>
	<NextButton onEnterKeyPressed={onclick} {onclick} />
</Main>
