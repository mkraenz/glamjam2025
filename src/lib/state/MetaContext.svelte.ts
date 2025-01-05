import { getContext, setContext } from 'svelte';

class MetaState {
	savefileExists = $state(false);
}

const key = Symbol('meta');
export function setMetaContext() {
	return setContext(key, new MetaState());
}
export function getMetaContext() {
	return getContext(key) as ReturnType<typeof setMetaContext>;
}
