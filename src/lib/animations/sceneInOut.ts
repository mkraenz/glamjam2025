import { cubicIn } from 'svelte/easing';
import { scale } from 'svelte/transition';

function scaleIn(...params: Parameters<typeof scale>) {
	return scale(params[0], {
		duration: 400,
		easing: cubicIn,
		...params[1]
	});
}

function scaleOut(...params: Parameters<typeof scale>) {
	return scale(params[0], {
		duration: 300,
		...params[1]
	});
}

export const sceneIn = scaleIn;
export const sceneOut = scaleOut;
