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
			title: 'Laughing Bubble tea icon',
			innerHTML: 'Laughing Bubble tea icon created by Rohim - Flaticon'
		},
		{
			type: 'a',
			href: 'https://www.flaticon.com/free-icon/profits_733186?term=money&page=1&position=76&origin=search&related_id=733186',
			title: 'Money icon',
			innerHTML: 'Money icon created by Chanut-is-Industries - Flaticon'
		},
		{
			type: 'a',
			href: 'https://codepen.io/Mark_Bowley/pen/PozwyP',
			title: 'Title screen bubble animation',
			innerHTML: 'Title screen bubble css-only animation by Mark_Bowley'
		},
		{
			type: 'a',
			href: 'https://openclipart.org/detail/260428/cute-lock-icons',
			title: 'Cute lock icons',
			innerHTML: 'Cute lock icons by anarres (CC0)'
		},
		{
			type: 'a',
			href: 'https://openclipart.org/detail/254920/corgi',
			title: 'Corgy',
			innerHTML: 'Corgy by anarres (CC0)'
		},
		{
			type: 'a',
			href: 'https://openclipart.org/detail/250877/cute-kittens-playing',
			title: 'Cute Kittens Playing',
			innerHTML: 'Cute Kittens Playing by GDJ (CC0)'
		},
		// {
		// 	type: 'a',
		// 	href: 'https://openclipart.org/detail/293841/pastel-unicorn',
		// 	title: 'Pastel Unicorn',
		// 	innerHTML: 'Pastel Unicorn by chanellelloyd1 (CC0)'
		// }
		{
			type: 'a',
			href: 'https://opengameart.org/content/pop-sounds-0',
			title: 'Pop SFX',
			innerHTML: 'Pop Sfx created by EZduzziteh from OpenGameArt.org.'
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
