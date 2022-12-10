<script>
	import { each } from 'svelte/internal';
	import blogC1 from '$lib/assets/blog/c1.webp';
	import blogC3 from '$lib/assets/blog/c3.webp';
	import brandA1 from '$lib/assets/bran/A1.jpg';
	import brandA2 from '$lib/assets/bran/A2.jpg';
	import brandA3 from '$lib/assets/bran/A3.webp';
	import brandA4 from '$lib/assets/bran/A4.webp';
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

<div class="p-5 font-sans-serif">
	<div class="text-center font-serif">
		<h5>FEATURED BLOG POST</h5>
		<h2 class="text-3xl text-black mt-4">Just in: Our New Beauty Oasis Collection</h2>
	</div>
	<div class="lg:ml-[42vh] ">
		<img
			src="https://cdn.shopify.com/s/files/1/0666/9309/articles/blog6_1100x.png?v=1629729722"
			class=" h-[72vh] justify-center w-[68vh] mt-4 lg:w-[76vh] object-cover md:max-w-xl"
			alt="....."
		/>
		<div class="w-[72vh] mt-4 justify-center">
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
	class="mt-6 mb-2 grid grid-flow-row md:grid-cols-2 gap-6 p-5 md:max-w-6xl"
>
	{#each outs as blog, bx}
		<div>
			<img src={blog.image} class="h-80 w-full object-cover " alt="....." />
			<div class="py-4">
				<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
					<p>{blog.name}</p>
				</div>
				<div class="mt-2 text-gray-400">{blog.date}</div>
				<p class="mt-5 text-gray-700">{blog.text}</p>
			</div>
			<button class="text-gray-500  hover:text-black underline">{blog.button}</button>
		</div>
	{/each}
</div>
<div class="font-sans-serif">
	<h5 class="uppercase text-center mt-16 text-gray-800">Brand New</h5>
	<h1 class="text-center text-4xl mt-4 text-gray-800 font-serif">The wishing locket</h1>
	<div
		class="grid h-auto p-2 grid-flow-row md:grid-cols-4 gap-8 grid-cols-2 mx-auto max-w-md lg:max-w-6xl"
	>
		{#each news as bran, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
				<img
					src={bran.image}
					class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer"
					alt="....."
				/>
			</div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>{bran.name}</div>
				<div class="line-through text-xs">{bran.amount1}</div>
				<div>{bran.amount}</div>
			</div>
		</div>
			<!-- <div class="relative">
				<div class="absolute object-cover text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale
				</div>
				<img src={bran.image} alt="..." class="object-cover h-auto w-full mb-4" />
				<div class="text-center mb-12">
					<div>{bran.name}</div>
					<div class="line-through text-xs">{bran.amount1}</div>
					<div>{bran.amount}</div>
				</div>
			</div> -->
		{/each}
		<!-- <div>
				<img src="A1.jpg" alt="..." class="object-cover h-auto w-full mb-4" />
				<div class="text-center mb-12">
					<div class="">Atiena Wishing Locket</div>
					<div>$49.95</div>
				</div>
			</div>
			<div class="relative">
				<div class="absolute object-cover text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">
					Sale
				</div>
				<img src="A2.jpg" alt="..." class="object-cover h-auto w-full mb-4" />
				<div class=" text-center mb-12">
					<div class="">Evangeline Mini Heart Wishing Locket</div>
					<div class="line-through">$42.95</div>
					<div>$37.95</div>
				</div>
			</div>
			<div>
				<img src="A3.webp" alt="..." class="object-cover h-auto w-full mb-4" />
				<div class=" text-center mb-12">
					<div class="">Kiaria Wishing Locket</div>
					<div>$44.95</div>
				</div>
			</div>
			<div class="relative">
				<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
				<img src="A4.webp" alt="..." class="object-cover h-auto w-full mb-4" />
				<div class=" text-center mb-12">
					<div class="">Taaliyah Wishing Locket</div>
					<div class="line-through">$49.95</div>
					<div>$43.95</div>
				</div>
			</div> -->
	</div>
</div>
