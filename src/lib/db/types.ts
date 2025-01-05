import type { Page } from '$lib/state/GameStateContext.svelte';
import type { MenuBoardLogoShopItemId, ShopItemId } from '$lib/state/shop-items.data';
import type { TeaType } from '$lib/state/types';
import type Dexie from 'dexie';
import type { EntityTable } from 'dexie';

export type DbGame = {
	/** the name of the save file */
	id: string;
	/** player name */
	name: string;
	favColor: string;
	skipTutorial: boolean;
	tutorialCompleted: boolean;
	page: Page;
	favTea: TeaType;
	order: TeaType;
	money: number;
	updatedAt: Date;
	createdAt: Date;
	boughtShopItems?: ShopItemId[];
	activeMenuBoardLogo?: MenuBoardLogoShopItemId;
};

export type MyDexie = Dexie & {
	games: EntityTable<
		DbGame,
		'id' // primary key "id" (for the typings only)
	>;
};
