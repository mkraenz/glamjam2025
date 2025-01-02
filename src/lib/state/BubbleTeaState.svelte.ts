export type TeaType = 'matcha' | 'strawberry milk' | false;

type Order = {
	fluid: Exclude<TeaType, false>;
};

export class BubbleTeaState {
	private maxMistakes = 3;

	order: Order = $state({ fluid: 'strawberry milk' });

	cap = $state(false);
	cup = $state(false);
	fluid = $state<TeaType>(false);
	straw = $state(false);
	tapioca = $state(false);

	mistakes = $state(0);

	failure = $derived(this.mistakes >= this.maxMistakes);

	readyToServe = $derived.by(() => {
		return this.cap && this.cup && this.fluid && this.straw && this.tapioca;
	});

	baseReady = $derived(this.cup && this.fluid && this.tapioca);

	addCap() {
		if (!this.baseReady) {
			this.mistakes++;
			return this.fail();
		}
		this.cap = true;
		return this.success();
	}

	addStraw() {
		if (!this.baseReady || !this.cap) {
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
