import type { DbGame } from '$lib/db/types';
import { sample } from '$lib/utils/random';
import { getContext, setContext } from 'svelte';
import { SvelteDate } from 'svelte/reactivity';
import { teaDataArray } from './teas.data';
import type { TeaType } from './types';

export const fallback = {
	name: 'Kelly',
	favColor: '#ffc0cb'
};

export const initialState = {
	id: 'default',
	name: '',
	favColor: fallback.favColor,
	skipTutorial: false,
	page: 'theNewOwner',
	favTea: 'strawberry',
	order: 'lychee',
	tutorialCompleted: false,
	money: 0
} as {
	id: string;
	name: string;
	favColor: string;
	skipTutorial: boolean;
	tutorialCompleted: boolean;
	page: Page;
	favTea: TeaType;
	order: TeaType;
	money: number;
};

export function randomTeaData() {
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
	| 'newCustomerOrder'
	| 'iAmBusy';

class GameState {
	id = $state(initialState.id);
	name = $state(initialState.name);
	favColor = $state(initialState.favColor);
	favTea = $state<TeaType>(initialState.favTea);
	page = $state<Page>(initialState.page);
	skipTutorial = $state(initialState.skipTutorial);
	tutorialCompleted = $state(initialState.tutorialCompleted);
	order = $state<TeaType>(initialState.order);
	money = $state(initialState.money);
	createdAt = new Date();
	updatedAt = new Date();

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
		this.id = initialState.id;
		this.name = initialState.name;
		this.favColor = initialState.favColor;
		this.favTea = initialState.favTea;
		this.page = initialState.page;
		this.skipTutorial = initialState.skipTutorial;
		this.tutorialCompleted = initialState.tutorialCompleted;
		this.order = initialState.order;
		this.money = initialState.money;
		this.createdAt = new Date();
		this.updatedAt = new Date();
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

	toJSON(): DbGame {
		return {
			favColor: this.favColor,
			favTea: this.favTea,
			id: this.id,
			name: this.name,
			order: this.order,
			page: this.page,
			skipTutorial: this.skipTutorial,
			tutorialCompleted: this.tutorialCompleted,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			money: this.money
		};
	}

	fromJSON(savefile: DbGame) {
		this.favColor = savefile.favColor;
		this.favTea = savefile.favTea;
		this.id = savefile.id;
		this.name = savefile.name;
		this.order = savefile.order;
		this.page = savefile.page;
		this.skipTutorial = savefile.skipTutorial;
		this.tutorialCompleted = savefile.tutorialCompleted;
		this.createdAt = savefile.createdAt;
		this.updatedAt = savefile.updatedAt;
		this.money = savefile.money;
	}
}

const key = Symbol('GameState');
export function setGameStateContext(initialPage: Page = initialState.page, initialOrder?: TeaType) {
	return setContext(key, new GameState(initialPage, initialOrder));
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
