<script lang="ts">
	import { getGameStateContext, type Page } from '$lib/state/GameStateContext.svelte';
	import NextButton from '../../components/common/NextButton.svelte';

	type Props = { next: Page };
	let { next }: Props = $props();
	const game = getGameStateContext();
</script>

<p>You do? Thanks!</p>
<p>
	I'm sure you already know <span class="inline-emphasis">how to make Bubble Tea</span> but let me give
	you a quick reminder. Just in case.
</p>

<p>
	To make Bubble Tea, the most important thing is the <span class="inline-emphasis">order</span>.
</p>

<ol>
	<li>First, put the <span class="inline-emphasis">Cup</span> on the counter before you.</li>
	<li>
		Next, pour <span class="inline-emphasis">Milk Tea</span> or add
		<span class="inline-emphasis">Tapioca Pearls</span>. The order doesn't matter.
	</li>
	<li>
		Your customers expect a service. So let's add the <span class="inline-emphasis">Cap</span> next.
	</li>
	<li>Finally, no Bubble Tea is perfect without the <span class="inline-emphasis">Straw</span>.</li>
	<li>
		All that's left is to <span class="inline-emphasis">Serve</span> the Bubble Tea to your customer.
	</li>
</ol>
<p>
	Before I forget: You're customers will <span class="inline-emphasis">leave</span> if you make too many
	mistakes. I guess one or two mistakes are fine but no more than that.
</p>

<group>
	<NextButton onclick={() => game.navigate(next)} text="Thanks for the reminder!" />
	<NextButton onclick={() => game.navigate(next)} text="I knew that already..." classes="outline" />
</group>
