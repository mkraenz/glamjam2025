export type TeaType = 'matcha' | 'classic' | 'strawberry' | 'taro' | 'lychee' | 'mango';

export type TeaData = {
	id: TeaType;
	fluid: TeaType;
	tKey: `teas__${TeaType}`;
	tKeyShort: `teas__${TeaType}_short`;
	fluidColor: string;
};
