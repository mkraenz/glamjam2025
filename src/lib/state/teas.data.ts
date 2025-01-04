import type { TeaData, TeaType } from './types';

export const teaDataMap: Record<TeaType, TeaData> = {
	classic: {
		fluid: 'classic',
		id: 'classic',
		tKey: 'teas__classic',
		tKeyShort: 'teas__classic_short',
		fluidColor: '#e08d31aa'
	},
	strawberry: {
		fluid: 'strawberry',
		id: 'strawberry',
		tKey: 'teas__strawberry',
		tKeyShort: 'teas__strawberry_short',
		fluidColor: '#ffd9e7aa'
	},
	mango: {
		fluid: 'mango',
		id: 'mango',
		tKey: 'teas__mango',
		tKeyShort: 'teas__mango_short',
		fluidColor: '#FFBF34aa'
	},
	lychee: {
		fluid: 'lychee',
		id: 'lychee',
		tKey: 'teas__lychee',
		tKeyShort: 'teas__lychee_short',
		fluidColor: '#DB434Daa'
	},
	matcha: {
		fluid: 'matcha',
		id: 'matcha',
		tKey: 'teas__matcha',
		tKeyShort: 'teas__matcha_short',
		fluidColor: '#8ac583aa'
	},
	taro: {
		fluid: 'taro',
		id: 'taro',
		tKey: 'teas__taro',
		tKeyShort: 'teas__taro_short',
		fluidColor: '#9C6BA9aa'
	}
};
export const teaDataArray = Object.values(teaDataMap);
