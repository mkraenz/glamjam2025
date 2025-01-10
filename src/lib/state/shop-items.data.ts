import { teaDataMap } from './teas.data';
import type { ShopItem } from './types';

export const shopItemsTeaMap: Record<`tea_${keyof typeof teaDataMap}`, ShopItem> = {
	tea_classic: {
		id: 'tea_classic',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#e08d31aa'
		},
		label: 'Classic Milk Tea Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_lychee: {
		id: 'tea_lychee',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#DB434Daa'
		},
		label: 'Lychee Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_mango: {
		id: 'tea_mango',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#FFBF34aa'
		},
		label: 'Mango Yakult Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_matcha: {
		id: 'tea_matcha',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#8ac583aa'
		},
		label: 'Matcha Latte Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_taro: {
		id: 'tea_taro',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#9C6BA9aa'
		},
		label: 'Taro Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	},
	tea_strawberry: {
		id: 'tea_strawberry',
		type: 'tea',
		image: {
			type: 'bubbleTea',
			fluidColor: '#ffd9e7dd'
		},
		label: 'Strawberry Milk Bubble Tea',
		description: 'Recipe allowing you to sell a new Bubble Tea flavor.',
		price: 2
	}
};
export const shopItemDataMap = {
	...shopItemsTeaMap,
	elephant_stickers: {
		id: 'elephant_stickers',
		type: 'stickers',
		image: {
			type: 'img',
			src: 'icons/laugh-256x256.png',
			alt: 'Elephant stickers'
		},
		label: 'Elephant Stickers',
		description: 'Stickers with Elephant motive to decorate your Bubble Tea cups.',
		price: 10
	},
	// name_stickers: {
	// 	id: 'name_stickers',
	// 	type: 'stickers',
	//  image: {type: 'img', alt: 'Name stickers', src: '',}
	// 	label: 'Name Stickers',
	// 	description: 'Stickers with your name to decorate your Bubble Tea cups.',
	// 	price: 15
	// },
	// perfectionist: {
	// 	id: 'perfectionist',
	// 	type: 'modifier',
	//  image: {type: 'img', alt: 'Perfectionist product icon', src: ''}
	// 	label: 'Perfectionist',
	// 	description: 'Challenge yourself by disallowing any mistakes when making Bubble Tea.',
	// 	price: 5
	// }
	menu_board_logo_happy: {
		id: 'menu_board_logo_happy',
		type: 'menuBoardLogo',
		image: {
			type: 'img',
			src: 'icons/happy-256x256.png',
			alt: 'Perfectionist product icon'
		},
		label: 'Happy Menu Board Logo',
		description: 'Decorate your menu board with this cute logo.',
		price: 10
	},
	menu_board_logo_bear: {
		id: 'menu_board_logo_bear',
		type: 'menuBoardLogo',
		image: {
			type: 'img',
			src: 'icons/bear-256x256.png',
			alt: 'Bubble Tea in bear form icon'
		},
		label: 'Bear Menu Board Logo',
		description: 'Decorate your menu board with this cute logo.',
		price: 15
	},
	menu_board_logo_laugh: {
		id: 'menu_board_logo_laugh',
		type: 'menuBoardLogo',
		image: {
			type: 'img',
			alt: 'Bubble Tea with laughing face icon',
			src: 'icons/laugh-256x256.png'
		},
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

export type StickerShopItemId = Extract<
	(typeof shopItemDataMap)[keyof typeof shopItemDataMap],
	{ type: 'stickers' }
>['id'];
