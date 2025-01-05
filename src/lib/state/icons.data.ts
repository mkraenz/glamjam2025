import bearBubbleTea256 from '$lib/assets/images/bear-256x256.png';
import happyBubbleTea256 from '$lib/assets/images/happy-256x256.png';
import laughingBubbleTea256 from '$lib/assets/images/laugh-256x256.png';

export const iconsDataMap: Record<string, {}> = {
	laughing_bubble_tea: {
		id: 'laughing_bubble_tea',
		imgAltTKey: 'icons__laughing_bubble_tea',
		img: laughingBubbleTea256
	},
	bear_bubble_tea: {
		id: 'bear_bubble_tea',
		imgAltTKey: 'icons__bear_bubble_tea',
		img: bearBubbleTea256
	},
	happy_bubble_tea: {
		id: 'happy_bubble_tea',
		imgAltTKey: 'icons__happy_bubble_tea',
		img: happyBubbleTea256
	}
};
export const iconsDataArray = Object.values(iconsDataMap);
