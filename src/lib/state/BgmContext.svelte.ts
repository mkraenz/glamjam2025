import { getContext, setContext } from 'svelte';

class BgmContext {
	audioElement = $state<HTMLAudioElement>();
	paused = $state(true);

	toggleAudio() {
		if (this.paused) this.audioElement?.play();
		else this.audioElement?.pause();
	}
}

const key = Symbol('bgm');

export function setBgmContext() {
	return setContext(key, new BgmContext());
}

export function getBgmContext() {
	return getContext(key) as ReturnType<typeof setBgmContext>;
}
