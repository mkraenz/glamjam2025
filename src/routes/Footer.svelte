<script lang="ts">
	import ExternalLink from './components/common/ExternalLink.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="animate fade transparent">
	<div class="footer-container">
		<p>{m.title__footer__author()}</p>
		<p>
			<ExternalLink href={m.title__footer__github_href()}
				>{m.title__footer__github_label()}</ExternalLink
			>
		</p>
		<p>
			<ExternalLink href={m.title__footer__itch_href()}
				>{m.title__footer__itch_label()}</ExternalLink
			>
		</p>
		<p>
			<ExternalLink href={m.title__footer__glamjam_href()}
				>{m.title__footer__glamjam_label()}</ExternalLink
			>
		</p>
		<p><a href="/imprint">{m.title__footer__acknowledgement_label()}</a></p>
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
