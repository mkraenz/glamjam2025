<script lang="ts">
	import {
		getGameStateContext,
		randomTeaData,
		type Page
	} from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import * as m from '$lib/paraglide/messages';
	import Main from '../../components/layout/Main.svelte';
	import DefaultAppbar from '../../components/common/DefaultAppbar.svelte';
	import { sample } from '$lib/utils/random';
	import { teaDataMap } from '$lib/state/teas.data';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const orderedType = sample(game.boughtTeaIds);
	const orderedItem = teaDataMap[orderedType];
	game.order = orderedItem.id;
	function onclick() {
		game.navigate(next);
	}
</script>

<DefaultAppbar />
<Main>
	<h1>A New Customer</h1>
	<p>Hi, I'd like a cup of</p>
	<h2 class="h2-emphasis">{m[orderedItem.tKey]()}</h2>
	<NextButton onEnterKeyPressed={onclick} {onclick} text="Coming right up!" />
</Main>
