import { getContext, setContext } from 'svelte';

export const fallback = {
	name: 'Kelly',
	favColor: '#ffc0cb'
};

const initialState = {
	name: '',
	favColor: fallback.favColor,
	skipTutorial: false,
	initialPage: 'theNewOwner' as const
};

export type Page =
	| 'theNewOwner'
	| 'yourName'
	| 'favColor'
	| 'gameover'
	| 'favColorWow'
	| 'backToBusiness'
	| 'tutorial'
	| 'barCounter'
	| 'customerLeaves'
	| 'iAmBusy';

class GameState {
	name: string = $state(initialState.name);
	favColor: string = $state(initialState.favColor);
	page = $state<Page>();
	skipTutorial = $state(initialState.skipTutorial);

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
}

const key = Symbol('GameState');
export function setGameStateContext(initialPage: Page = initialState.initialPage) {
	return setContext(key, new GameState(initialPage));
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
