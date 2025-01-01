<script>
	import ExternalLink from './components/common/ExternalLink.svelte';
</script>

<footer>
	<div class="footer-container">
		<p>By TypeScriptTeatime</p>
		<p><ExternalLink href="https://github.com/mkraenz/glamjam2025">Github</ExternalLink></p>
		<p>
			<ExternalLink href="https://mkraenz.itch.io/my-little-bubble-tea-shop">Itch</ExternalLink>
		</p>
		<p><ExternalLink href="https://itch.io/jam/glam-jam">Glam Jam</ExternalLink></p>
		<p><a href="/imprint">Acknowledgement</a></p>
	</div>
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
	}
	.footer-container {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1rem;
		justify-content: center;
		width: 100vw;
	}
</style>
