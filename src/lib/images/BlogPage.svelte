<script>
	import { each } from 'svelte/internal';
	import blogC1 from '$lib/assets/blog/c1.webp';
	import blogC3 from '$lib/assets/blog/c3.webp';
	import brandA1 from '$lib/assets/bran/a1.jpg';
	import brandA2 from '$lib/assets/bran/a2.jpg';
	import brandA3 from '$lib/assets/bran/a3.webp';
	import brandA4 from '$lib/assets/bran/a4.webp';
	let outs = [
		{
			image: blogC1,
			name: 'The journey of the gemstone',
			date: 'April 05, 2018',
			text: 'A gemstone (also called a gem, fine gem, jewel, precious stone, or semi-precious stone) is a piece of mineral crystal which, in cut and polished form, is used to make jewelry or other adornments. Join us on...',
			button: 'Read more'
		},
		{
			image: blogC3,
			name: 'Big statements with minimal jewellery',
			date: 'October 17, 2017',
			text: 'This collection is a mermaids dream featuring all natural mother of pearl and abalone from the depths of the sea. All of our pieces are hand...',
			button: 'Read more'
		}
	];
	let news = [
		{
			image: brandA1,
			name: 'Atiena Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA2,
			name: 'Atiena Wishing Locket',
			amount1: '$42.95',
			amount: '$37.95'
		},
		{
			image: brandA3,
			name: 'Atiena Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA4,
			name: 'Atiena Wishing Locket',
			amount1: '$49.95',
			amount: '$43.95'
		}
	];
</script>

<div class="p-4 font-sans-serif">
	<div class="text-center font-serif">
		<h5>FEATURED BLOG POST</h5>
		<h2 class="text-3xl text-black mt-4">Just in: Our New Beauty Oasis Collection</h2>
	</div>
	<div class="lg:ml-[38vh] ml-2 h-[72vh] w-[40vh] lg:w-[76vh]">
		<img
			src="https://cdn.shopify.com/s/files/1/0666/9309/articles/blog6_1100x.png?v=1629729722"
			class=" justify-center mt-4 object-cover md:max-w-xl"
			alt="....."
		/>
		<div class=" mt-4 justify-center">
			<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
				NEW COLLECTION: BEAUTY OASIS
			</div>
			<div class="mt-4 text-gray-400">October 17, 2017</div>
			<p class="mt-8 text-gray-700 mr-4">
				Much like wearing makeup, wearing jewellery can really highlight your features and
				accentuate your beauty. It can bring out your skin tones, the colour of your hair...
			</p>
			<button class="text-gray-500 mt-6 hover:text-black underline">Read more</button>
		</div>
	</div>
</div>
<div
	class="lg:mt-10 lg:mb-52 grid p-4 grid-flow-row grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl"
>
	{#each outs as blog, bx}
		<div class="lg:h-80 w-[40vh] lg:w-full ml-3">
			<img src={blog.image} class="object-cover" alt="....." />
			<div class="py-4">
				<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
					<p>{blog.name}</p>
				</div>
				<div class="mt-2 text-gray-400">{blog.date}</div>
				<p class="mt-5 text-gray-700">{blog.text}</p>
			</div>
			<button class="text-gray-500  hover:text-black underline ">{blog.button}</button>
		</div>
	{/each}
</div>
<div class="font-sans-serif mb-10 ">
	<h5 class="uppercase text-center mt-10 text-gray-800">Brand New</h5>
	<h1 class="text-center text-4xl mt-4 text-gray-800 font-serif">The wishing locket</h1>
	<div
		class="grid h-auto grid-flow-row p-4 md:grid-cols-4 gap-8 grid-cols-2 mx-auto max-w-md lg:max-w-6xl"
	>
		{#each news as bran, bx}
		<div class="hover:text-gray-500 mt-4" >
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<img
					src={bran.image}
					class="object-cover h-full w-full  transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>{bran.name}</div>
				<div class="line-through text-xs">{bran.amount1}</div>
				<div>{bran.amount}</div>
			</div>
		</div>
		{/each}
	</div>
</div>
