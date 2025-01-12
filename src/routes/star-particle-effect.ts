import { browser } from '$app/environment';
import { range } from '$lib/utils/range';
import type { MouseEventHandler } from 'svelte/elements';

export function useStarParticles() {
	const activeKey = 'data-active';
	const arr = [1, 0.9, 0.8, 0.5, 0.2];
	const maxStarParticles = 1000;
	// note: this map has side-effects
	const setActive = (star: HTMLDivElement, active: boolean) =>
		star.setAttribute(activeKey, `${active}`);
	const isActive = (star: HTMLDivElement) => star.getAttribute(activeKey) === 'true';
	const appendContainerDiv = () => {
		if (!browser) return;
		const div = document.createElement('div');
		div.id = 'star-container';
		document.body.appendChild(div);
	};
	appendContainerDiv();
	const stars = browser
		? range(maxStarParticles).map((i) => {
				const containerDiv = document.getElementById('star-container');
				const star = document.createElement('div');
				star.className = 'star';
				setActive(star, false);
				containerDiv?.appendChild(star);
				return star;
			})
		: [];
	const getInactiveStars = () => stars.filter((star) => !isActive(star));
	let count = 0;
	const sparkle: MouseEventHandler<EventTarget> = (e) => {
		count += 5;
		console.log(count);
		const maxLifetimeMs = 600;
		const inactiveStars = getInactiveStars();
		arr.forEach(function (distortion, index) {
			const star = inactiveStars[index];
			if (!star) {
				console.log('out of free stars');
				return;
			}
			let x = (1 - distortion) * 75;
			star.style.top = e.clientY + Math.round(Math.random() * x - x / 2) + 'px';
			star.style.left = e.clientX + Math.round(Math.random() * x - x / 2) + 'px';
			setActive(star, true);
			window.setTimeout(
				() => {
					setActive(star, false);
				},
				Math.round(Math.random() * distortion * maxLifetimeMs)
			);
		});
	};
	return { sparkle };
}
