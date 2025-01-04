<script lang="ts">
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Main>
	<h2>{m.gameover__heading()}</h2>
	<p>{m.gameover__description()}</p>
	<a href="/" role="button">{m.gameover__cta()}</a>
</Main>
