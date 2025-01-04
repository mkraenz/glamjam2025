export function shuffle<T extends unknown[]>(arr: T) {
	return arr
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value) as T;
}

export function sample<T extends unknown[]>(arr: T) {
	return shuffle(arr)[0] as Unpack<T>;
}
