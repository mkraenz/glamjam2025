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
	type: 'tea' | 'modifier' | 'stickers';
	// TODO instead use labelTKey, descriptionTKey, imgAltTKey
	label: string;
	description: string;
	imgSrc: string;
	imgAlt: string;
	price: number;
};
