export class BubbleTeaState {
	private maxMistakes = 3;

	cap = $state(false);
	cup = $state(false);
	fluid = $state(false);
	straw = $state(false);
	tapioca = $state(false);

	mistakes = $state(0);

	failure = $derived(this.mistakes >= this.maxMistakes);

	readyToServe = $derived.by(() => {
		return this.cap && this.cup && this.fluid && this.straw && this.tapioca;
	});

	baseReady = $derived(this.cup && this.fluid && this.tapioca);

	addCap() {
		debugger;
		if (!this.baseReady) {
			this.mistakes++;
			return { success: false };
		}
		this.cap = true;
		return { success: true };
	}

	addStraw() {
		if (!this.baseReady || !this.cap) {
			this.mistakes++;
			return { success: false };
		}
		this.straw = true;
		return { success: true };
	}
}
