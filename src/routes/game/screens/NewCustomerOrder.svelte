<script lang="ts">
	import {
		getGameStateContext,
		randomTeaData,
		type Page
	} from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import * as m from '$lib/paraglide/messages';
	import Main from '../../components/layout/Main.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const orderedItem = randomTeaData();
	game.order = orderedItem.id;
	function onclick() {
		game.navigate(next);
	}
</script>

<Main>
	<h1>A New Customer</h1>
	<p>Hi, I'd like a cup of</p>
	<h2 class="h2-emphasis">{m[orderedItem.tKey]()}</h2>
	<NextButton onEnterKeyPressed={onclick} {onclick} text="Coming right up!" />
</Main>
