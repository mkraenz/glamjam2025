<script lang="ts">
	import ExternalLink from './components/common/ExternalLink.svelte';
</script>

<footer class="animate fade transparent">
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

	.animate.fade {
		animation: animate-fade 0.5s forwards;
		animation-delay: 3s; /* matching HighlightedTitle animation */
	}
	@keyframes animate-fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
