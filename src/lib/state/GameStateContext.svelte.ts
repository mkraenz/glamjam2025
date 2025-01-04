import { sample } from '$lib/utils/random';
import { getContext, setContext } from 'svelte';
import { SvelteDate } from 'svelte/reactivity';
import { teaDataArray } from './teas.data';
import type { TeaType } from './types';

export const fallback = {
	name: 'Kelly',
	favColor: '#ffc0cb'
};

const initialState = {
	name: '',
	favColor: fallback.favColor,
	skipTutorial: false,
	page: 'theNewOwner',
	favTea: 'strawberry',
	order: 'lychee',
	tutorialCompleted: false
} as {
	name: string;
	favColor: string;
	skipTutorial: boolean;
	tutorialCompleted: boolean;
	page: Page;
	favTea: TeaType;
	order: TeaType;
};

export function randomTeaType() {
	return sample(teaDataArray);
}

export type Page =
	| 'whatToDo'
	| 'theNewOwner'
	| 'yourName'
	| 'favColor'
	| 'favTea'
	| 'gameover'
	| 'favColorWow'
	| 'backToBusiness'
	| 'tutorial'
	| 'barCounter'
	| 'customerLeaves'
	| 'thanks'
	| 'tutorialFinished'
	| 'tutorialFailed'
	| 'iAmBusy';

class GameState {
	name: string = $state(initialState.name);
	favColor: string = $state(initialState.favColor);
	favTea: string = $state(initialState.favTea);
	page = $state<Page>();
	skipTutorial = $state(initialState.skipTutorial);
	tutorialCompleted = $state(initialState.tutorialCompleted);
	order = $state<TeaType>(initialState.order);

	money = $state(0);

	#stopwatchStart = new SvelteDate();
	#stopwatchEnd = new SvelteDate();
	stopwatchMs = $derived(this.#stopwatchEnd.getTime() - this.#stopwatchStart.getTime());

	constructor(page: Page = initialState.page, order: TeaType = initialState.order) {
		this.page = page;
		this.order = order;
	}

	reset() {
		this.name = initialState.name;
		this.favColor = initialState.favColor;
		this.page = initialState.page;
		this.skipTutorial = initialState.skipTutorial;
	}

	navigate(to: Page) {
		this.page = to;
	}

	startStopwatch() {
		const now = new Date().getTime();
		this.#stopwatchStart.setTime(now);
		this.#stopwatchEnd.setTime(now);
	}

	stopStopwatch() {
		this.#stopwatchEnd.setTime(new Date().getTime());
	}
}

const key = Symbol('GameState');
export function setGameStateContext(initialPage: Page = initialState.page, initialOrder?: TeaType) {
	return setContext(key, new GameState(initialPage, initialOrder));
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
