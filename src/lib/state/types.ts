export type TeaType = 'matcha' | 'classic' | 'strawberry' | 'taro' | 'lychee' | 'mango';

export type TeaData = {
	id: TeaType;
	fluid: TeaType;
	tKey: `teas__${TeaType}`;
	tKeyShort: `teas__${TeaType}_short`;
	price: number;
} & TeaRenderData;

export type TeaRenderData = {
	fluidColor: string;
};

export type ShopItem = {
	id: string;
	type: 'tea' | 'modifier' | 'stickers' | 'menuBoardLogo';
	// TODO instead use labelTKey, descriptionTKey, imgAltTKey
	label: string;
	description: string;
	image:
		| { type: 'img'; src: string; alt: string; scale?: number }
		| { type: 'coloredCircle'; color: string }
		| { type: 'bubbleTea'; fluidColor: string };
	price: number;
};
