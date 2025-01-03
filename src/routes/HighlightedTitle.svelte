<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages';

	let flipping = $state(true);
	onMount(() => {
		setTimeout(() => {
			flipping = false;
		}, 2000);
	});
</script>

<h1 class="pico-color-fuchsia-500 animate highlight" class:scale-bounce={flipping}>
	{m.title()}
</h1>

<style>
	@property --highlight-progress {
		syntax: '<percentage>';
		inherits: false;
		initial-value: 0%;
	}
	h1 {
		font-size: 64px;
		-webkit-text-stroke-width: thin;
		-webkit-text-stroke-color: black;
		/* text-shadow: 4px 6px 4px #0f3f57; */
	}
	/* derived with the help of https://www.youtube.com/watch?v=8_SDTuoIYwA and https://www.youtube.com/watch?v=dba1xLnU9AM */
	.animate.highlight {
		--gradient-color: var(--pico-color-fuchsia-500);
		--highlight-progress: 0%;
		background: linear-gradient(
			120deg,
			var(--gradient-color) 0%,
			var(--gradient-color) calc(max(var(--highlight-progress) - 3%, 0%)),
			white var(--highlight-progress),
			var(--gradient-color) calc(max(var(--highlight-progress) + 3%, 0%)),
			var(--gradient-color) 100%
		);
		animation: highlighter 3s linear infinite;
		animation-delay: 0.7s;
		background-size: 150% 100%;
		background-position-x: -25vw;
		background-clip: text;
		color: transparent;
	}

	@keyframes highlighter {
		0% {
			--highlight-progress: 0%;
		}
		50% {
			--highlight-progress: 100%;
		}
		100% {
			--highlight-progress: 100%;
		}
	}

	@media screen and (min-width: 600px) {
		h1 {
			font-size: 96px;
		}
	}

	.animate.scale-bounce {
		animation: animate-scale-bounce 3s forwards;
	}
	/* kudos to https://epiceasing.com/?curve=282.000%2C12.000%2C11.000&language=css&kind=spring&benzier=in&style=relaxed&ms=2000&animation=scale */
	@keyframes animate-scale-bounce {
		0% {
			transform: scale(0);
		}
		1% {
			transform: scale(0.06510590282210638);
		}
		2% {
			transform: scale(0.14763493779567605);
		}
		3% {
			transform: scale(0.2434289508580667);
		}
		4% {
			transform: scale(0.3484483180758322);
		}
		5% {
			transform: scale(0.45886563808363623);
		}
		6% {
			transform: scale(0.5711432035220765);
		}
		7% {
			transform: scale(0.682094031867845);
		}
		8% {
			transform: scale(0.7889266967449156);
		}
		9% {
			transform: scale(0.88927460301393);
		}
		10% {
			transform: scale(0.9812106886092034);
		}
		11% {
			transform: scale(1.063248811295214);
		}
		12% {
			transform: scale(1.1343332892413256);
		}
		13% {
			transform: scale(1.1938182122689949);
		}
		14% {
			transform: scale(1.2414382289855599);
		}
		15% {
			transform: scale(1.2772725481793623);
		}
		16% {
			transform: scale(1.301703876175196);
		}
		17% {
			transform: scale(1.3153739514145069);
		}
		18% {
			transform: scale(1.3191372398817804);
		}
		19% {
			transform: scale(1.3140142269433266);
		}
		20% {
			transform: scale(1.3011455895311106);
		}
		21% {
			transform: scale(1.2817483640786242);
		}
		22% {
			transform: scale(1.257075046576035);
		}
		23% {
			transform: scale(1.2283763774934786);
		}
		24% {
			transform: scale(1.1968683815101355);
		}
		25% {
			transform: scale(1.1637040547378872);
		}
		26% {
			transform: scale(1.1299499245120532);
		}
		27% {
			transform: scale(1.096567552192402);
		}
		28% {
			transform: scale(1.06439991040621);
		}
		29% {
			transform: scale(1.0341624446908932);
		}
		30% {
			transform: scale(1.006438526794036);
		}
		31% {
			transform: scale(0.9816789235631436);
		}
		32% {
			transform: scale(0.9602048414244244);
		}
		33% {
			transform: scale(0.9422140614113907);
		}
		34% {
			transform: scale(0.927789652617538);
		}
		35% {
			transform: scale(0.9169107415008708);
		}
		36% {
			transform: scale(0.909464819056941);
		}
		37% {
			transform: scale(0.9052610856794594);
		}
		38% {
			transform: scale(0.9040443625773178);
		}
		39% {
			transform: scale(0.905509136871999);
		}
		40% {
			transform: scale(0.9093133529047455);
		}
		41% {
			transform: scale(0.9150916128261835);
		}
		42% {
			transform: scale(0.9224675033013816);
		}
		43% {
			transform: scale(0.9310648203515854);
		}
		44% {
			transform: scale(0.9405175193454349);
		}
		45% {
			transform: scale(0.950478270511788);
		}
		46% {
			transform: scale(0.9606255508431847);
		}
		47% {
			transform: scale(0.970669249878525);
		}
		48% {
			transform: scale(0.9803548087981317);
		}
		49% {
			transform: scale(0.9894659489507078);
		}
		50% {
			transform: scale(0.9978260769817571);
		}
		51% {
			transform: scale(1.0052984789609822);
		}
		52% {
			transform: scale(1.0117854353015505);
		}
		53% {
			transform: scale(1.0172264019722774);
		}
		54% {
			transform: scale(1.0215954118043846);
		}
		55% {
			transform: scale(1.0248978529789927);
		}
		56% {
			transform: scale(1.02716678053004);
		}
		57% {
			transform: scale(1.0284589114559715);
		}
		58% {
			transform: scale(1.028850445392473);
		}
		59% {
			transform: scale(1.0284328413712185);
		}
		60% {
			transform: scale(1.027308667594124);
		}
		61% {
			transform: scale(1.0255876259945154);
		}
		62% {
			transform: scale(1.023382837214528);
		}
		63% {
			transform: scale(1.0208074550411477);
		}
		64% {
			transform: scale(1.0179716628016293);
		}
		65% {
			transform: scale(1.0149800881560296);
		}
		66% {
			transform: scale(1.011929657511955);
		}
		67% {
			transform: scale(1.0089078972315446);
		}
		68% {
			transform: scale(1.0059916761448648);
		}
		69% {
			transform: scale(1.0032463728046135);
		}
		70% {
			transform: scale(1.00072544152975);
		}
		71% {
			transform: scale(0.9984703436479343);
		}
		72% {
			transform: scale(0.9965108044631028);
		}
		73% {
			transform: scale(0.9948653523027768);
		}
		74% {
			transform: scale(0.9935420934567945);
		}
		75% {
			transform: scale(0.9925396757883131);
		}
		76% {
			transform: scale(0.9918483941355039);
		}
		77% {
			transform: scale(0.9914513921646484);
		}
		78% {
			transform: scale(0.9913259179052358);
		}
		79% {
			transform: scale(0.9914445936108338);
		}
		80% {
			transform: scale(0.9917766646600819);
		}
		81% {
			transform: scale(0.992289196757929);
		}
		82% {
			transform: scale(0.9929481955439097);
		}
		83% {
			transform: scale(0.9937196276993434);
		}
		84% {
			transform: scale(0.9945703276210103);
		}
		85% {
			transform: scale(0.9954687785642786);
		}
		86% {
			transform: scale(0.9963857617414875);
		}
		87% {
			transform: scale(0.997294871098688);
		}
		88% {
			transform: scale(0.9981728953123632);
		}
		89% {
			transform: scale(0.9990000718935983);
		}
		90% {
			transform: scale(0.9997602211250918);
		}
		91% {
			transform: scale(1.0004407698686155);
		}
		92% {
			transform: scale(1.001032677065154);
		}
		93% {
			transform: scale(1.0015302740193646);
		}
		94% {
			transform: scale(1.0019310333387765);
		}
		95% {
			transform: scale(1.0022352807211536);
		}
		96% {
			transform: scale(1.002445863693617);
		}
		97% {
			transform: scale(1.0025677909535726);
		}
		98% {
			transform: scale(1.002607855197324);
		}
		99% {
			transform: scale(1.0025742513028932);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
