import { getContext, setContext } from 'svelte';

export const fallback = {
	name: 'Kelly',
	favColor: '#ffc0cb'
};

const initialState = {
	name: '',
	favColor: fallback.favColor
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
	page = $state<Page>('theNewOwner');

	constructor(initialPage: Page) {
		this.page = initialPage;
	}

	reset() {
		this.name = initialState.name;
		this.favColor = initialState.favColor;
		this.page = 'theNewOwner';
	}

	navigate(to: Page) {
		this.page = to;
	}
}

const key = Symbol('GameState');
export function setGameStateContext(initialPage: Page = 'theNewOwner') {
	return setContext(key, new GameState(initialPage));
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
