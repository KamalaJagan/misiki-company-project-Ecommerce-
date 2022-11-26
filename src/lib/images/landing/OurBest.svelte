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
<div class="font-sans-serif mt-10">
	<h5 class="uppercase text-center mt-10 text-gray-800">our best selling</h5>
	<h1 class="text-center mt-5 text-4xl text-gray-800 font-serif">Harmony spheres</h1>
	<div class="pb-8 h-auto p-5 mb-2 grid grid-flow-row gap-8 md:grid-cols-4 grid-cols-2 container mx-auto max-w-md lg:max-w-6xl ">
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
		<!-- <div class="relative">
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
			<img src="B2.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div class="">Large Bali Harmony Ball</div>
				<div class="line-through text-xs">$42.95</div>
				<div>$35.95</div>
			</div>
		</div>
		<div>
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<img src="B3.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div class="">Triangle Dot Design Harmony Ball</div>
				<div>$29.95</div>
			</div>
		</div>
		<div>
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<img src="B4.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div class="">Twirl Harmony Ball</div>
				<div>$29.95</div>
			</div>
		</div>
		<div class="relative">
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
			<img src="B5.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div class="">Small Bali Harmony Ball</div>
				<div class="line-through text-xs">$35.95</div>
				<div>$25.95</div>
			</div>
		</div>
		<div class="relative">
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-600 px-5 py-1.5">Sale Out</div>
			<img src="B6.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div>Circle Design Harmony Ball Earrings</div>
				<div>$29.95</div>
			</div>
		</div>
		<div>
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<img src="B7.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div>Bobble Design Harmony Ball Earrings</div>
				<div>$26.95</div>
			</div>
		</div>
		<div>
			<div class="overflow-hidden lg:h-96 h-80 w-auto">
			<img src="B8.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mb-6 mt-4 hover:text-gray-500 cursor-pointer">
				<div>Triangle Dot Harmony Ball Earrings</div>
				<div>$26.95</div>
			</div>
		</div> -->
	</div>
</div>
