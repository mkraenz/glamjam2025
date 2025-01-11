<script lang="ts">
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import db from '$lib/db';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import { goto } from '$app/navigation';
	import { getAudiobusContext } from '$lib/state/AudiobusContext.svelte';

	const game = getGameStateContext();
	const audiobus = getAudiobusContext();
	// isn't permadeath fun? :)
	async function onclick() {
		audiobus.play('pop');
		await db.games.remove(game.id);
		game.reset();
		await db.games.create(game.toJSON());
		goto('/');
	}
</script>

<Main>
	<h2>{m.gameover__heading()}</h2>
	<p>{m.gameover__description()}</p>
	<button class="btn-miw" {onclick}>
		{m.gameover__cta()}
	</button>
</Main>
