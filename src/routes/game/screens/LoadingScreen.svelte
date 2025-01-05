<script>
	import Main from '../../components/layout/Main.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<Main>
	<h1>{m.loading__title()}</h1>
	<img src="/icons/laugh-256x256.png" class="animated wobble" alt={m.loading__alt()} />
</Main>

<style>
	.animated.wobble {
		transform-origin: bottom center;
		animation: animate-wobble 2s infinite ease-in-out;
		animation-delay: -0.5s;
	}

	@keyframes animate-wobble {
		0% {
			transform: rotate(30deg);
		}
		50% {
			transform: rotate(-30deg);
		}
		100% {
			transform: rotate(30deg);
		}
	}
</style>
