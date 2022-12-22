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
			link:'shop'
		},
		{
			image: discoverG2,
			name: "Bejewelled Water Sapphire Hoops - Large",
			amount1: "$42.95",
			amount: "$37.95",
			// link1:'shop',
		},
		{
			image: discoverG3,
			name: "Guardian Chandelier Smokey Quartz Earrings",
			amount1: "$88.95",
			amount: "$67.95",
			// link:'shop',
		},
		{
			image: discoverG4,
			name: "Guardian Rainbow Smokey Quartz Earrings",
			amount1: "",
			amount: "$64.95",
			// link:'shop',
		},
	];
</script>

<div class="mt-5 bg-[#faf8ee] lg:h-[720px] h-auto bg:w-full font-sans-serif ">
	<h5 class="uppercase text-center mt-10 text-sm text-gray-800 tracking-wide">discover</h5>
	<h1 class="text-center mt-4 text-4xl text-gray-800 font-serif font-light">Our bestsellers</h1>
	<div
		class="grid h-auto grid-flow-row mt-2 grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-md lg:max-w-6xl bg-cover">
		{#each discovers as dis, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<a href="/{dis.link}">
				<img 
					src="{dis.image}"
					class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
				</a>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>{dis.name}</div>
				<div class="line-through text-xs">{dis.amount1}</div>
				<div>{dis.amount}</div>
			</div>
		</div>
		{/each}
	</div>
</div>
