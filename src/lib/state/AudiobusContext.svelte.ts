import { getContext, setContext } from 'svelte';

const sources = {
	success: {
		src: '/audio/sfx/african4.mp3',
		volume: 1
	},
	upgrade: {
		src: '/audio/sfx/modern13.mp3',
		volume: 1
	},
	pop: {
		src: '/audio/sfx/pop2.wav',
		volume: 0.4
	},
	purchaseFailed: {
		src: '/audio/sfx/modern11.mp3',
		volume: 0.6
	}
};

class AudiobusContext {
	readonly MAX_SIMULTANEOUS_TRACKS = 8;

	audioElements = $state<HTMLAudioElement[]>([]);

	/** If an audio element is free, then plays the sound. Otherwise, discards it. */
	async play(key: keyof typeof sources) {
		for (const element of this.audioElements) {
			if (element.paused) {
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
