<script lang="ts">
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
	import db from '$lib/db';
	import { getGameStateContext } from '$lib/state/GameStateContext.svelte';
	import { goto } from '$app/navigation';

	const game = getGameStateContext();
	// isn't permadeath fun? :)
	async function onclick() {
		await db.games.remove(game.id);
		game.reset();
		await db.games.create(game.toJSON());
		goto('/');
	}
</script>

<Main>
	<h2>{m.gameover__heading()}</h2>
	<p>{m.gameover__description()}</p>
	<button class="btw-miw" {onclick}>
		{m.gameover__cta()}
	</button>
</Main>
