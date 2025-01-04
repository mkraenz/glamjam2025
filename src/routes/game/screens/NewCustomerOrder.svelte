<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';
	import * as m from '$lib/paraglide/messages';
	import { teaDataMap } from '$lib/state/teas.data';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
	const orderedItem = game.order;
	function onclick() {
		game.navigate(next);
	}
</script>

<p>Hi, I'd like a cup of</p>
<h2 class="h2-emphasis">{m[teaDataMap[orderedItem].tKey]()}</h2>
<NextButton onEnterKeyPressed={onclick} {onclick} text="Coming right up!" />
