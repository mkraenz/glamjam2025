import { browser } from '$app/environment';
import type { DbGame } from '$lib/db/types';
import { sample } from '$lib/utils/random';
import { getContext, setContext } from 'svelte';
import { SvelteDate } from 'svelte/reactivity';
import {
	shopItemDataMap,
	shopItemsTeaMap,
	type MenuBoardLogoShopItemId,
	type ShopItemId,
	type StickerShopItemId
} from './shop-items.data';
import { teaDataArray, teaDataMap } from './teas.data';
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
	order: 'strawberry',
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
	| 'tutorialThanks'
	| 'tutorialFailed'
	| 'newCustomerOrder'
	| 'menuBoard'
	| 'shop'
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
	boughtShopItems = $state<ShopItemId[]>([]);
	createdAt = new Date();
	updatedAt = new Date();
	activeMenuBoardLogo = $state<MenuBoardLogoShopItemId>();
	activeSticker = $state<StickerShopItemId>();

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
		this.boughtShopItems = [];
		this.activeMenuBoardLogo = undefined;
	}

	navigate(to: Page) {
		if (!to) throw new Error('Cannot navigate game to a falsy target page');
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
			money: this.money,
			boughtShopItems: $state.snapshot(this.boughtShopItems),
			activeMenuBoardLogo: this.activeMenuBoardLogo,
			activeSticker: this.activeSticker
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
		this.boughtShopItems = savefile.boughtShopItems ?? [];
		this.activeMenuBoardLogo = savefile.activeMenuBoardLogo;
		this.activeSticker = savefile.activeSticker;
	}

	buy(id: ShopItemId, price?: number) {
		const data = shopItemDataMap[id];
		const usedPrice = price ?? data.price;
		if (this.money < usedPrice) return false;
		if (this.hasBought(id)) return false;
		this.money -= usedPrice;
		this.boughtShopItems.push(id);

		switch (data.type) {
			case 'menuBoardLogo':
				this.activeMenuBoardLogo = id as MenuBoardLogoShopItemId;
			case 'stickers':
				this.activeSticker = id as StickerShopItemId;
		}
	}

	hasBought(shopItemId: ShopItemId) {
		return (this.boughtShopItems as string[]).includes(shopItemId);
	}

	getItemState(shopItemId: ShopItemId): 'active' | 'inactive' | 'sold' | 'for sale' {
		if (!this.hasBought(shopItemId)) return 'for sale';
		const item = shopItemDataMap[shopItemId];
		if (item.type === 'menuBoardLogo')
			return this.activeMenuBoardLogo === shopItemId ? 'active' : 'inactive';
		return 'sold';
	}

	getBoughtItem(shopItemId: ShopItemId | undefined) {
		if (!shopItemId || !this.hasBought(shopItemId)) return undefined;
		const item = shopItemDataMap[shopItemId];
		return { ...item, state: this.getItemState(shopItemId), id: shopItemId };
	}

	activate(shopItemId: ShopItemId) {
		const item = this.getBoughtItem(shopItemId);
		if (!item) return;
		if (item.type === 'menuBoardLogo') {
			this.activeMenuBoardLogo = item.id as MenuBoardLogoShopItemId;
		}
	}

	get activeMenuBoardLogoShopItem() {
		if (!this.activeMenuBoardLogo) return undefined;
		return this.getBoughtItem(this.activeMenuBoardLogo);
	}

	get activeStickerShopItem() {
		if (!this.activeSticker) return undefined;
		return this.getBoughtItem(this.activeSticker);
	}

	get boughtTeaIds() {
		// we're checking existence. TS is a bit too strict here so we silence it with as keyof... even though it's definitely incorrect.
		const boughtShopItemIds = this.boughtShopItems.filter(
			(i) => !!shopItemsTeaMap[i as keyof typeof shopItemsTeaMap]
		) as (keyof typeof shopItemsTeaMap)[];
		return boughtShopItemIds.map((x) => x.split('tea_')[1] as TeaType);
	}

	get boughtTeas() {
		return this.boughtTeaIds.map((id) => teaDataMap[id]);
	}
}

const key = Symbol('GameState');
export function setGameStateContext(initialPage: Page = initialState.page, initialOrder?: TeaType) {
	const game = new GameState(initialPage, initialOrder);
	if (browser) (window as any).game = game;
	return setContext(key, game);
}
export function getGameStateContext() {
	return getContext(key) as ReturnType<typeof setGameStateContext>;
}
