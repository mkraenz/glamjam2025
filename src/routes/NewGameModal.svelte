<script lang="ts">
	import db from '$lib/db';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import Main from './components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import { scale } from 'svelte/transition';
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';

	let deleted = $state(false);
	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
	type Props = { open: boolean; close: () => void };
	let { open, close }: Props = $props();
</script>

<dialog {open} transition:scale>
	<div class="game-layout">
		{#if !deleted}
			<Main>
				<h2>{m.title__reset_game__heading()}</h2>
				<p>{m.title__reset_game__description1()}<br />{m.title__reset_game__description2()}</p>
				<group class="hstack">
					<button class="btn-miw" onclick={close}>{m.common__cancel()}</button>
					<button
						class="outline btn-miw"
						onclick={async () => {
							audiobus.play('pop');
							await db.games.remove(game.id);
							game.reset();
							await db.games.create(game.toJSON());
							deleted = true;
							audiobus.play('success');
						}}>{m.common__reset()}</button
					>
				</group>
			</Main>
		{:else}
			<Main>
				<h2>{m.title__reset_game__deleted__heading()}</h2>
				<p>{m.title__reset_game__deleted__description()}</p>
				<button onclick={close} class="btn-miw">{m.common__ok()}</button>
			</Main>
		{/if}
	</div>
</dialog>
