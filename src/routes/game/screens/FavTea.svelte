<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import { teaDataArray } from '$lib/state/teas.data';
	import NextButton from '../../components/common/NextButton.svelte';
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import type { TeaType } from '$lib/state/types';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	function select(type: TeaType) {
		game.favTea = type;
		game.order = type;
		game.navigate(next);
	}
</script>

<Main>
	<h2>And what's your favorite Bubble Tea?</h2>
	<p>The most delicious Bubble Tea is</p>
	<group class="hstack">
		{#each teaDataArray as tea}
			<NextButton text={m[tea.tKeyShort]()} onclick={() => select(tea.id)} />
		{/each}
	</group>
</Main>
