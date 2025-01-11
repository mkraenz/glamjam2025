import { getContext, setContext } from 'svelte';

const sources = {
	pop: {
		src: '/audio/sfx/pop2.wav',
		volume: 1
	},
	bgm: {
		src: '/audio/relax-girl.mp3',
		volume: 0.2
	}
};

class AudiobusContext {
	readonly MAX_SIMULTANEOUS_TRACKS = 8;

	audioElements = $state<HTMLAudioElement[]>([]);

	/** If an audio element is free, then plays the sound. Otherwise, discards it. */
	async play(key: keyof typeof sources) {
		for (const element of this.audioElements) {
			if (element.paused) {
				console.log('its paused');
				const track = sources[key];
				element.src = track.src;
				element.volume = track.volume;
				await element.play();
				return;
			}
		}
	}
}

const key = Symbol('audiobus');

export function setAudiobusContext() {
	return setContext(key, new AudiobusContext());
}

export function getAudiobusContext() {
	return getContext(key) as ReturnType<typeof setAudiobusContext>;
}
