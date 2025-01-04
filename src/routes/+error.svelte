<script lang="ts">
	import { page } from '$app/state';
	import Main from './components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

{#if page.status === 404}
	<Main>
		<h1>{m.errors__404__heading()}</h1>
		<img src="/icons/laugh-256x256.png" alt={m.errors__404_alt()} class="animate rotate mb-4" />
		<a href="/" role="button">{m.errors__cta()}</a>
	</Main>
{:else}
	<Main>
		<h1>{page.status} {page.error?.message}</h1>
		<a href="/" role="button">{m.errors__cta()}</a>
	</Main>
{/if}

<style>
	h1 {
		margin-bottom: 5rem;
	}
	.animate.rotate {
		transform-origin: 100% 70%;
		animation: animate-rotate 2s infinite alternate cubic-bezier(0.3, 0.65, 0.78, 0.36);
	}

	.mb-4 {
		margin-bottom: 4rem;
	}

	@keyframes animate-rotate {
		0% {
			transform: translateX(-50%) rotate(0deg) translateY(0);
		}
		10% {
			transform: translateX(-50%) rotate(0deg) translateY(0);
		}
		40% {
			transform: translateX(-50%) rotate(180deg) translateY(calc(256px * 0.3));
		}
		100% {
			transform: translateX(-50%) rotate(180deg) translateY(calc(256px * 0.3));
		}
	}
	@media (max-width: 640px) {
		.mb-4 {
			margin-bottom: auto;
		}
		@keyframes animate-rotate {
			0% {
				transform: translateX(0) rotate(0deg) translateY(0);
			}
			10% {
				transform: translateX(0) rotate(0deg) translateY(0);
			}
			40% {
				transform: translateX(-100%) rotate(180deg) translateY(calc(256px * 0.3));
			}
			100% {
				transform: translateX(-100%) rotate(180deg) translateY(calc(256px * 0.3));
			}
		}
	}
</style>
