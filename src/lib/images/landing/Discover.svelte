<script>
	import { each } from "svelte/internal";
	import discoverG1 from "$lib/assets/dis/G1.webp"
	import discoverG2 from "$lib/assets/dis/G2.webp"
	import discoverG3 from "$lib/assets/dis/G3.webp"
	import discoverG4 from "$lib/assets/dis/G4.webp"
	let discovers = [
		{
			image: discoverG1,
			name: "Guardian Luna Blue Topaz Nacklace",
			amount1: "",
			amount: "$69.95",
		},
		{
			image: discoverG2,
			name: "Bejewelled Water Sapphire Hoops - Large",
			amount1: "$42.95",
			amount: "$37.95",
		},
		{
			image: discoverG3,
			name: "Guardian Chandelier Smokey Quartz Earrings",
			amount1: "$88.95",
			amount: "$67.95",
		},
		{
			image: discoverG4,
			name: "Guardian Rainbow Smokey Quartz Earrings",
			amount1: "",
			amount: "$64.95",
		},
	];
</script>

<div class="mt-5 bg-[#faf8ee] lg:h-[720px] h-auto bg:w-full font-sans-serif ">
	<h5 class="uppercase text-center mt-12 text-sm text-gray-800 tracking-wide">discover</h5>
	<h1 class="text-center mt-4 text-4xl text-gray-800 font-serif font-light">Our bestsellers</h1>
	<div
		class="grid h-auto p-5 grid-flow-row grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-md lg:max-w-6xl bg-cover">
		{#each discovers as dis, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<img
					src="{dis.image}"
					class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>{dis.name}</div>
				<div class="line-through text-xs">{dis.amount1}</div>
				<div>{dis.amount}</div>
			</div>
		</div>
		{/each}
		<!-- <div class="hover:text-gray-500 relative">
			<div class="overflow-hidden lg:h-96 h-auto w-auto ">
				<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
				<img
					src="G2.webp"
					class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div class="mt-2">Bejewelled Water Sapphire Hoops-Large</div>
				<div class="line-through text-xs">$42.95</div>
				<div class="flex text-center justify-center gap-1">
					<div class="text-sm justify-center">from</div>
					<div>$37.95</div>
				</div>
			</div>
		</div>
		<div class="hover:text-gray-500 relative">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
				<img
					src="G3.webp"
					class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div class="mt-2">Guardian Chandelier Smokey Quartz Earrings</div>
				<div class="line-through text-xs">$88.95</div>
				<div>$67.95</div>
			</div>
		</div>
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<img
					src="G4.webp"
					class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div class="mt-4">Guardian Rainbow Smokey Quartz Earrings</div>
				<div>$64.95</div>
			</div>
		</div> -->
	</div>
</div>
