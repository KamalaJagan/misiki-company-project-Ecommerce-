<script>
import NecklacesA1 from '$lib/assets/bran/A18.webp'
import NecklacesA2 from '$lib/assets/bran/A19.webp'
import Neckleses from './Neckleses.svelte'
let anklets = [
	{
		image: NecklacesA1,
		name: 'Charm Anklet',
		amount: '',
		price: '$36.95'
	},
	{
		image: NecklacesA2,
		name: 'Roman Anklet',
		amount: '$35.95',
		price: '$27.95'
	}
]
</script>

<div class="font-serif">
	<h1 class=" mt-4 text-4xl text-black my-auto text-center px-20">Necklaces</h1>
</div>
<div class=" grid grid-cols-1 lg:grid-cols-5 lg:ml-8 mt-10">
	<div class="p-4">
		<h2 class="uppercase mt-2 mb-6">Sort by</h2>
		<label for="selling" class="sr-only">Featured</label>
		<select
			id="selling"
			class="border w-80 border-gray-300 text-gray-900 text-sm border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
		<h2 class="uppercase mt-10">Filter by</h2>
		<label for="selling" class="sr-only">Availabitity</label>
		<select
			id="selling"
			class="mt-4 border w-80 border-gray-300 text-gray-900 text-sm border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>Availability</option>
		</select>
		<label for="selling" class="sr-only">Price</label>
		<select
			id="selling"
			class="mt-2 border w-80 border-gray-300 text-gray-900 text-sm border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>Price</option>
		</select>
		<label for="selling" class="sr-only">Material</label>
		<select
			id="selling"
			class="border mt-2 w-80 border-gray-300 text-gray-900 text-sm border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option selected>Material</option>
		</select>
	</div>

	<div class=" font-serif flex col-span-4">
		<div class="text-center gap-4 mx-auto p-4 max-w-5xl bg-cover grid lg:grid-cols-3 grid-cols-2">
			{#each anklets as ank, bx}
				<div class="hover:text-gray-500">
					<div class="overflow-hidden lg:h-[64vh] h-auto w-auto">
						<img
							src="{ank.image}"
							alt="..."
							class="object-cover  h-full lg:w-[100vh] w-full transition duration-500 hover:scale-110 cursor-pointer" />
					</div>
					<div class=" text-center mb-12">
						<div class="">{ank.name}</div>
						<div class="line-through text-xs">{ank.amount}</div>
						<div>{ank.price}</div>
					</div>
				</div>
			{/each}
			<div>
				<img src="A19.webp" alt="..." class="object-cover h-auto w-full mb-4" />
				<div class=" text-center mb-12">
					<div class="">Roman Anklet</div>
					<div class="line-through">$35.95</div>
					<div>$27.95</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-[#faf8ee] lg:w-[210vh] mb-10">
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
