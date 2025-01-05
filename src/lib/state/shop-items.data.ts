import { teaDataMap } from './teas.data';
import type { ShopItem } from './types';

export const shopItemsTeaMap: Record<`tea_${keyof typeof teaDataMap}`, ShopItem> = {
	tea_classic: {
		id: 'tea_classic',
		type: 'tea',
		imgAlt: 'Classic Milk Tea Bubble Tea',
		// TODO how to make this dynamic to get the proper img in?
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Classic Milk Tea Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_lychee: {
		id: 'tea_lychee',
		type: 'tea',
		imgAlt: 'Lychee Bubble Tea',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Lychee Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_mango: {
		id: 'tea_mango',
		type: 'tea',
		imgAlt: 'Mango Yakult Bubble Tea',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Mango Yakult Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_matcha: {
		id: 'tea_matcha',
		type: 'tea',
		imgAlt: 'Matcha Latte Bubble Tea',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Matcha Latte Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_taro: {
		id: 'tea_taro',
		type: 'tea',
		imgAlt: 'Taro Bubble Tea',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Taro Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_strawberry: {
		id: 'tea_strawberry',
		type: 'tea',
		imgAlt: 'Strawberry Milk Bubble Tea',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Strawberry Milk Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	}
};
export const shopItemDataMap = {
	...shopItemsTeaMap,
	// elephant_stickers: {
	// 	id: 'elephant_stickers',
	// 	type: 'stickers',
	// 	imgAlt: 'Elephant stickers',
	// 	imgSrc: LaughTea,
	// 	label: 'Elephant Stickers',
	// 	description: 'Stickers with Elephant motive to decorate your Bubble Tea cups.',
	// 	price: 10
	// },
	// name_stickers: {
	// 	id: 'name_stickers',
	// 	type: 'stickers',
	// 	imgAlt: 'Name stickers',
	// 	imgSrc: LaughTea,
	// 	label: 'Name Stickers',
	// 	description: 'Stickers with your name to decorate your Bubble Tea cups.',
	// 	price: 15
	// },
	// perfectionist: {
	// 	id: 'perfectionist',
	// 	type: 'modifier',
	// 	imgAlt: 'Perfectionist product icon',
	// 	imgSrc: LaughTea,
	// 	label: 'Perfectionist',
	// 	description: 'Challenge yourself by disallowing any mistakes when making Bubble Tea.',
	// 	price: 5
	// }
	menu_board_logo_happy: {
		id: 'menu_board_logo_happy',
		type: 'menuBoardLogo',
		imgAlt: 'Perfectionist product icon',
		imgSrc: 'icons/happy-256x256.png',
		label: 'Happy Menu Board Logo',
		description: 'Decorate your menu board with this cute logo.',
		price: 10
	},
	menu_board_logo_bear: {
		id: 'menu_board_logo_bear',
		type: 'menuBoardLogo',
		imgAlt: 'Bubble Tea in bear form icon',
		imgSrc: 'icons/bear-256x256.png',
		label: 'Bear Menu Board Logo',
		description: 'Decorate your menu board with this cute logo.',
		price: 15
	},
	menu_board_logo_laugh: {
		id: 'menu_board_logo_laugh',
		type: 'menuBoardLogo',
		imgAlt: 'Bubble Tea with laughing face icon',
		imgSrc: 'icons/laugh-256x256.png',
		label: 'Laugh Menu Board Logo',
		description: 'Decorate your menu board with this cute logo.',
		price: 10
	}
} as const satisfies Record<string, ShopItem>;

export const shopItemDataArray = Object.values(shopItemDataMap) as ShopItem[];

export type ShopItemId = keyof typeof shopItemDataMap;
export type MenuBoardLogoShopItemId = Extract<
	(typeof shopItemDataMap)[keyof typeof shopItemDataMap],
	{ type: 'menuBoardLogo' }
>['id'];
