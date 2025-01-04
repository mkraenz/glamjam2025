import { getContext, setContext } from 'svelte';
import { SvelteDate } from 'svelte/reactivity';

export const fallback = {
	name: 'Kelly',
	favColor: '#ffc0cb'
};

const initialState = {
	name: '',
	favColor: fallback.favColor,
	skipTutorial: false,
	initialPage: 'theNewOwner' as const,
	tutorialCompleted: false
};

export type Page =
	| 'whatToDo'
	| 'theNewOwner'
	| 'yourName'
	| 'favColor'
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
	page = $state<Page>();
	skipTutorial = $state(initialState.skipTutorial);
	tutorialCompleted = $state(initialState.tutorialCompleted);

	money = $state(0);

	#stopwatchStart = new SvelteDate();
	#stopwatchEnd = new SvelteDate();
	stopwatchMs = $derived(this.#stopwatchEnd.getTime() - this.#stopwatchStart.getTime());

	constructor(initialPage: Page = initialState.initialPage) {
		this.page = initialPage;
	}

	reset() {
		this.name = initialState.name;
		this.favColor = initialState.favColor;
		this.page = initialState.initialPage;
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
export function setGameStateContext(initialPage: Page = initialState.initialPage) {
	return setContext(key, new GameState(initialPage));
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
