<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<p>Wow, really!?</p>
<input class="bg-default" type="color" value={game.favColor} />
<p>is my favorite color, too! You're amazing. We should hang out together one of these days.</p>

<NextButton onclick={() => game.navigate(next)} />
