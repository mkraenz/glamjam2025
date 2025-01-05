import type { TeaData, TeaType } from './types';

export const teaDataMap: Record<TeaType, TeaData> = {
	classic: {
		fluid: 'classic',
		id: 'classic',
		price: 5,
		tKey: 'teas__classic',
		tKeyShort: 'teas__classic_short',
		fluidColor: '#e08d31aa'
	},
	strawberry: {
		fluid: 'strawberry',
		id: 'strawberry',
		price: 5,
		tKey: 'teas__strawberry',
		tKeyShort: 'teas__strawberry_short',
		fluidColor: '#ffd9e7aa'
	},
	mango: {
		fluid: 'mango',
		id: 'mango',
		price: 7,
		tKey: 'teas__mango',
		tKeyShort: 'teas__mango_short',
		fluidColor: '#FFBF34aa'
	},
	lychee: {
		fluid: 'lychee',
		id: 'lychee',
		price: 9,
		tKey: 'teas__lychee',
		tKeyShort: 'teas__lychee_short',
		fluidColor: '#DB434Daa'
	},
	matcha: {
		fluid: 'matcha',
		id: 'matcha',
		price: 7,
		tKey: 'teas__matcha',
		tKeyShort: 'teas__matcha_short',
		fluidColor: '#8ac583aa'
	},
	taro: {
		fluid: 'taro',
		id: 'taro',
		price: 9,
		tKey: 'teas__taro',
		tKeyShort: 'teas__taro_short',
		fluidColor: '#9C6BA9aa'
	}
};
export const teaDataArray = Object.values(teaDataMap);
