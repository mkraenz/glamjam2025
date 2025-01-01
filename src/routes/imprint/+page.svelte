<script lang="ts">
	const data = [
		{
			type: 'a',
			href: 'https://opengameart.org/content/relax-girl',
			title: 'Background Music "Relax Girl"',
			innerHTML: 'Background Music "Relax Girl" created by Alex McCulloch.'
		},
		{
			type: 'a',
			href: 'https://www.flaticon.com/free-icon/bubble-tea_7519908?term=bubble+tea&page=1&position=88&origin=tag&related_id=7519908',
			title: 'Bear bubble tea icon',
			innerHTML: 'Bear Bubble tea icon created by Smashicons - Flaticon'
		},
		{
			type: 'a',
			href: 'https://www.flaticon.com/free-icon/bubble-tea_6580656?term=bubble+tea&page=1&position=34&origin=tag&related_id=6580656',
			title: 'Happy Bubble tea icon',
			innerHTML: 'Happy Bubble tea icons created by Freepik - Flaticon'
		},
		{
			type: 'a',
			href: 'https://www.flaticon.com/free-icon/laugh_7301959?term=bubble+tea&page=1&position=22&origin=tag&related_id=7301959',
			title: 'Laughing Bubble tea',
			innerHTML: 'Laughing Bubble tea icon created by Rohim - Flaticon'
		},
		{
			type: 'a',
			href: 'https://codepen.io/Mark_Bowley/pen/PozwyP',
			title: 'Title screen bubble animation',
			innerHTML: 'Title screen bubble css-only animation by Mark_Bowley'
		}
	] as const;
</script>

<main>
	<h1>Acknowledgement</h1>
	<ul>
		{#each data as date}
			<li>
				<svelte:element
					this={date.type}
					href={date.href}
					title={date.title}
					target="_blank"
					referrerpolicy="no-referrer">{date.innerHTML}</svelte:element
				>
			</li>
		{/each}
	</ul>
	<a href="/"><button>Back to home</button></a>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 5rem;
	}
</style>
