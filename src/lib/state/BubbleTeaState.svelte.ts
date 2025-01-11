import type { TeaType } from './types';

type Order = {
	fluid: TeaType;
};

export class BubbleTeaState {
	private maxMistakes = 2;

	// TODO inject in constructor + make static?
	order: Order = $state({ fluid: 'strawberry' });

	lid = $state(false);
	cup = $state(false);
	fluid = $state<TeaType | false>(false);
	straw = $state(false);
	tapioca = $state(false);

	mistakes = $state(0);

	failure = $derived(this.mistakes > this.maxMistakes);

	readyToServe = $derived.by(() => {
		return this.lid && this.cup && this.fluid && this.straw && this.tapioca;
	});

	baseReady = $derived(this.cup && this.fluid && this.tapioca);

	constructor(maxMistakes: number) {
		this.maxMistakes = maxMistakes;
	}

	addLid() {
		if (!this.baseReady) {
			this.mistakes++;
			return this.fail();
		}
		this.lid = true;
		return this.success();
	}

	addStraw() {
		if (!this.baseReady || !this.lid) {
			this.mistakes++;
			return this.fail();
		}
		this.straw = true;
		return this.success();
	}

	addFluid(type: TeaType) {
		if (!this.cup) {
			this.mistakes++;
			return this.fail();
		}
		if (type !== this.order.fluid) {
			this.mistakes++;
			return this.fail();
		}
		this.fluid = type;
		return this.success();
	}

	addTapioca() {
		if (!this.cup) {
			this.mistakes++;
			return this.fail();
		}
		this.tapioca = true;
		return this.success();
	}

	private fail() {
		return { success: false };
	}
	private success() {
		return { success: true };
	}
}
