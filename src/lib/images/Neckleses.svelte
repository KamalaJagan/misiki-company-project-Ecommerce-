<script>
import necklesG1 from '$lib/assets/dis/G1.webp'
import necklesG2 from '$lib/assets/dis/G5.webp'
import necklesG3 from '$lib/assets/dis/G6.webp'
import necklesG4 from '$lib/assets/dis/G7.webp'
import necklesG5 from '$lib/assets/dis/G8.webp'
import necklesG6 from '$lib/assets/ourBest/B2.webp'
import necklesG7 from '$lib/assets/neckles/G9.webp'
import necklesG8 from '$lib/assets/neckles/G10.webp'
import necklesG9 from '$lib/assets/neckles/G11.webp'
import necklesG10 from '$lib/assets/neckles/G12.webp'
import necklesG11 from '$lib/assets/neckles/G13.webp'
import necklesG12 from '$lib/assets/neckles/G14.webp'
import { onMount } from 'svelte'
import { getAPI } from '$lib/util/api'
import { page } from '$app/stores'

let loading = false
let necklece

onMount(async () => {
	await getNecklece()
})

async function getNecklece() {
	try {
		loading = true
		necklece = await getAPI(
			'necklecess/necklece?necklece=true=store${$page.data?.sotre?.id}',
			$page.data.origin
		)
		console.log('necklece = ', necklece)
	} catch (e) {
		console.error(e)
	} finally {
		loading = false
	}
}

let neckles = [
	{
		image: necklesG1,
		name: 'Guardian Luna Blue Topaz Necklace',
		amount: '',
		price: '$69.95'
	},
	{
		image: necklesG2,
		name: 'Guardian Clear Quartz Shield',
		amount: '$69.95',
		price: '$62.95'
	},
	{
		image: necklesG3,
		name: 'Guardian Pink Amethyst Satellite Chain Necklace',
		amount: '',
		price: '$34.95'
	},
	{
		image: necklesG4,
		name: 'Guardian Queen Prasiolite Necklace',
		amount: '',
		price: '$52.95'
	},
	{
		image: necklesG5,
		name: 'Guardian Triangle Smokey Quartz Necklace',
		amount: '',
		price: '$67.95'
	},
	{
		image: necklesG6,
		name: 'Large Bali Harmony Ball',
		amount: '$42.95',
		price: '$35.95'
	},
	{
		image: necklesG7,
		name: 'Angel Wing Satellite Chain Necklace',
		amount: '',
		price: '$24.95'
	},
	{
		image: necklesG8,
		name: 'Cog Pendant on Satellite Chain',
		amount: '',
		price: '$24.95'
	},
	{
		image: necklesG9,
		name: 'Guardian Clear Quartz Teardrop Pendant Necklace',
		amount: '',
		price: '$34.95'
	},
	{
		image: necklesG10,
		name: 'Guardian Blue Topaz Shield Satellite Chain Necklace',
		amount: '',
		price: '$34.95'
	},
	{
		image: necklesG11,
		name: 'Guardian Crescent Clear Quartz Drop Necklace',
		amount: '',
		price: '$69.95'
	},
	{
		image: necklesG12,
		name: 'Lotus Mandala Necklace',
		amount: '',
		price: '$29.95'
	}
]
</script>

<div class="font-serif">
	<h1 class="mt-4 text-4xl text-black my-auto text-center px-20">Necklaces</h1>
</div>
<div class="grid grid-cols-1 lg:grid-cols-5 mt-10 lg:ml-8">
	<div class="p-4">
		<h2 class="uppercase mt-2 mb-2">Sort by</h2>
		<label for="selling" class="sr-only">Featured</label>
		<select
			id="selling"
			class="border w-80 border-gray-300 text-gray-900 text-sm p-3 border-l-gray-100">
			<option selected>Featured</option>
			<option value="BA">Best selling</option>
			<option value="TX">Alphabetically, A-Z</option>
			<option value="WH">Alphabetically, Z-A</option>
			<option value="FL">Price, low to high</option>
			<option value="VG">Price, high to low</option>
			<option value="GE">Date, old to new</option>
			<option value="MI">Date, new to old</option>
		</select>
		<hr class="w-80 black-800 border-slate border-black mt-10" />
		<h2 class="uppercase mt-10">filter by</h2>
		<label for="selling" class="sr-only">Availabitity</label>
		<select
			id="selling"
			class="mt-4 border w-80 border-gray-300 p-3 text-gray-900 text-sm border-l-gray-100">
			<option selected>Availability</option>
		</select>
		<label for="selling" class="sr-only">Price</label>
		<select
			id="selling"
			class="mt-2 border w-80 border-gray-300 p-3 text-gray-900 text-sm border-l-gray-100">
			<option selected>Price</option>
		</select>
		<label for="selling" class="sr-only">Material</label>
		<select
			id="selling"
			class="border mt-2 w-80 border-gray-300 p-3 text-gray-900 text-sm border-l-gray-100">
			<option selected>Material</option>
		</select>
		<label for="selling" class="sr-only">Text choice</label>
		<select
			id="selling"
			class="border mt-2 w-80 border-gray-300 p-3 text-gray-900 text-sm border-l-gray-100">
			<option selected>Text choice</option>
		</select>
	</div>

	<div class="font-sans-serif col-span-4 justify-center items-center">
		<div
			class="text-center gap-4 mx-auto max-w-md p-3 lg:max-w-5xl bg-cover grid md:grid-cols-3 grid-cols-2">
			{#each neckles as nec, bx}
				<div class="hover:text-gray-500">
					<div class="overflow-hidden lg:h-[64vh] h-auto w-auto">
						<img
							src="{nec.image}"
							alt="..."
							class="object-cover  h-full lg:w-[100vh] w-full transition duration-500 hover:scale-110 cursor-pointer" />
					</div>
					<div class=" text-center mb-12 mt-4">
						<div>{nec.name}</div>
						<div class="line-through text-xs">{nec.amount}</div>
						<div>{nec.price}</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- <button
			class="h-12 uppercase text-white md:w-auto sm:w-32 lg:w-36 bg-[#008060] shadow-200 hover:bg-gray-700"
			>Load more</button
		> -->
	</div>
</div>
<div class="items-center text-center justify-center ">
	<button
		class="h-12 uppercase text-white md:w-auto sm:w-32 lg:w-36 bg-[#008060] shadow-200 hover:bg-gray-700"
		>Load more</button>
</div>

<div class="bg-[#faf8ee] lg:w-[210vh] mt-10 mb-10">
	<div
		class=" lg:max-w-6xl gap-6 text-center p-4 w-full flex-row text-gray-500 grid grid-cols-1 lg:grid-cols-2 container mx-auto font-san-serif">
		<div class="w-full py-4">
			<img
				src="https://cdn.shopify.com/s/files/1/0666/9309/files/image_4.png?v=1629716569"
				class="lg:h-full"
				alt="....." />
		</div>
		<div class="flex-row grid grid-cols grid-cols-2 gap-4 py-4">
			<div>
				<div class="overflow-hidden lg:h-96 w-auto lg:w-60">
					<img
						src="https://cdn.shopify.com/s/files/1/0666/9309/products/Clover_Swift_Lucy-307-Editwebsize_1100x.jpg?v=1580810236"
						class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"
						alt="....." />
				</div>
				<div class="text-center mt-4 mb-6">
					<div>Heart Harmony Ball</div>
					<div>$42.95</div>
				</div>
			</div>
			<div class="w-full h-full ">
				<div class="overflow-hidden lg:h-96 w-auto lg:w-60">
					<img
						src="https://cdn.shopify.com/s/files/1/0666/9309/products/Clover_Swift_Leah-159-Editwebsize_1100x.jpg?v=1580827311"
						class=" object-cover h-full w-full transition duration-500 hover:scale-110"
						alt="....." />
				</div>
				<div class="text-center mt-4 mb-6">
					<div>Double Angle Wing Necklace</div>
					<div>$32.95</div>
				</div>
			</div>
			<div class="lg:h-96 col-span-2 lg:text-start text-center">
				<h1 class="text-3xl  font-thin-100 text-black font-serif ">The perfect pair</h1>
				<p class="mt-2">
					Combine these two pieces for a neckline drop that is sure to turn heads and bag 25% off!
				</p>
				<button
					class="mt-4 h-12 uppercase text-white w-40 lg:w-40 tracking-wide bg-zinc-800 shadow-200 hover:bg-amber-300"
					>Get the set</button>
			</div>
		</div>
	</div>
</div>
