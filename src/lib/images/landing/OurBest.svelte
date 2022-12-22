<script>
	import ourBestB1 from '$lib/assets/ourBest/B1.webp';
	import ourBestB2 from '$lib/assets/ourBest/B2.webp';
	import ourBestB3 from '$lib/assets/ourBest/B3.jpg';
	import ourBestB4 from '$lib/assets/ourBest/B4.jpg';
	import ourBestB5 from '$lib/assets/ourBest/B5.jpg';
	import ourBestB6 from '$lib/assets/ourBest/B6.webp';
	import ourBestB7 from '$lib/assets/ourBest/B7.jpg';
	import ourBestB8 from '$lib/assets/ourBest/B8.webp';

	let bests = [
		{
			image: ourBestB1,
			name: "Heart Harmony Ball",
			amount1: "",
			amount: "$42.95",
		},
		{
			image: ourBestB2,
			name: "Large Bali Harmony Ball",
			amount1: "$42.95",
			amount: "$35.95",
		},
		{
			image: ourBestB3,
			name: "Triangle Dot Design Harmony Ball",
			amount1: "",
			amount: "$29.95",
		},
		{ 
			image: ourBestB4,
			name: "Twirl Harmony Ball",
			amount1: "",
			amount: "$29.95",
		},
		{
			image: ourBestB5,
			name: "Small Bali Harmony Ball",
			amount1: "$35.95",
			amount: "$25.95",
		},
		{
			image: ourBestB6,
			name: "Circle Design Harmony Ball Earrings",
			amount1: "",
			amount: "$29.95",
		},
		{ 
			image: ourBestB7,
			name: "Bobble Design Harmony Ball Earrings",
			amount1: "",
			amount: "$26.95",
		},
		{
			image: ourBestB8,
			name: "Triangle Dot Harmony Ball Earrings",
			amount1: "",
			amount: "$26.95",
		},
	];
</script>
<div class="font-sans-serif mt-8">
	<h5 class="uppercase text-center mt-10 text-gray-800">our best selling</h5>
	<h1 class="text-center mt-5 text-4xl text-gray-800 font-serif">Harmony spheres</h1>
	<div class="pb-8 h-auto mt-4 grid grid-flow-row gap-8 md:grid-cols-4 grid-cols-2 container mx-auto max-w-md lg:max-w-6xl ">
		{#each bests as our, bx}
		<div>
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<img
				src={our.image}
				alt="..."
				class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"/></div>
			<div class="text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div class="">{our.name}</div>
				<div class="line-through text-xs">{our.amount1}</div>
				<div>{our.amount}</div>
			</div>
		</div>
		{/each}
	</div>
</div>
