<script lang="ts">
	import NextButton from '../components/common/NextButton.svelte';

	type Page = 'theNewOwner' | 'yourName' | 'favColor' | 'gameover';
	let page = $state<Page>('theNewOwner');
	const fallback = {
		name: 'Kelly',
		favColor: '#ffc0cb'
	};
	const initialState = {
		name: '',
		favColor: fallback.favColor
	};
	let gameState = $state<{ name: string; favColor: string }>(structuredClone(initialState));
	const navigate = (nextPage: Page) => (page = nextPage);
	const restartGame = () => {
		gameState = structuredClone(initialState);
		page = 'theNewOwner';
	};
</script>

{#snippet theNewOwner()}
	<h2>Welcome!</h2>
	<p>You must be the new owner of the Bubble Tea shop next door, right?</p>
	<p>Glad to get to know you. I'm <span class="character-name">Brandon<span>.</span></span></p>
	<NextButton onclick={() => navigate('yourName')} />
{/snippet}

{#snippet yourName()}
	<h2>What's your name?</h2>
	<div>
		<p>
			My name is <input
				class="mw"
				type="text"
				bind:value={gameState.name}
				placeholder={fallback.name}
			/>
		</p>
	</div>
	<NextButton
		onclick={() => {
			gameState.name ??= fallback.name;
			navigate('favColor');
		}}
	/>
{/snippet}

{#snippet favColor()}
	<h2>What's your favorite color?</h2>
	<p>
		The best color in the world is <input
			class="mw bg-default"
			type="color"
			bind:value={gameState.favColor}
		/>
	</p>
	<p>(click the box above to select your color)</p>

	<NextButton onclick={() => navigate('gameover')} />
{/snippet}

{#snippet gameover()}
	<h2>Game Over</h2>
	<p>Thanks for playing!</p>
	<group>
		<NextButton text="New Game" onclick={restartGame} />
		<a href="/" role="button" class="outline">Back to Title</a>
	</group>
{/snippet}

<main>
	{#if page === 'theNewOwner'}{@render theNewOwner()}{/if}
	{#if page === 'yourName'}{@render yourName()}{/if}
	{#if page === 'favColor'}{@render favColor()}{/if}
	{#if page === 'gameover'}{@render gameover()}{/if}
</main>

<style>
	main {
		text-align: center;
		height: 100vh;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.mw {
		max-width: 320px;
	}
	.character-name {
		display: 'inline';
		text-decoration: underline;
		text-decoration-color: var(--pico-color-fuchsia);
		color: var(--pico-color-fuchsia);
	}
</style>
