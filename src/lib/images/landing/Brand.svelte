<script>
	import brandA1 from '$lib/assets/bran/a1.jpg';
	import brandA2 from '$lib/assets/bran/a2.jpg';
	import brandA3 from '$lib/assets/bran/a3.webp';
	import brandA4 from '$lib/assets/bran/a4.webp';
	import brandA5 from '$lib/assets/bran/a5.webp';
	import brandA6 from '$lib/assets/bran/a6.webp';
	import brandA7 from '$lib/assets/bran/a7.jpg';
	import brandA8 from '$lib/assets/bran/a8.webp';

	let bands = [
		{
			image: brandA1,
			name: 'Atiena Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA2,
			name: 'Evangeline Mini Heart Wishing Locket',
			amount1: '$42.95',
			amount: '$37.95'
		},
		{
			image: brandA3,
			name: 'Kiaria Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA4,
			name: 'Taaliyah Wishing Locket',
			amount1: '$49.95',
			amount: '$43.95'
		},
		{
			image: brandA5,
			name: 'Blue Topaz Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA6,
			name: 'Garnet Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA7,
			name: 'Peridot Wishing Locket',
			amount1: '',
			amount: '$49.95'
		},
		{
			image: brandA8,
			name: 'Amethyst Wishing Locket',
			amount1: '',
			amount: '$49.95'
		}
	];
</script>

<div class="font-sans-serif">
	<h5 class="uppercase text-center mt-10 text-gray-800">Brand New</h5>
	<h1 class="text-center text-4xl mt-4 text-gray-800 font-serif">The wishing locket</h1>
	<div
		class="pb-8 p-4 h-auto mt-4 grid grid-flow-row gap-8 md:grid-cols-4 grid-cols-2 container mx-auto max-w-md lg:max-w-6xl"
	>
		{#each bands as bran, bx}
			<div class="hover:text-gray-500">
				<div class="overflow-hidden lg:h-96 h-auto w-auto">
					<img
						src={bran.image}
						class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"
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
		<!-- <div class="relative hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
			<img src="A2.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class="mt-4 text-center mb-6 hover:text-gray-500 cursor-pointer">
				<div>Evangeline Mini Heart Wishing Locket</div>
				<div class="line-through text-xs">$42.95</div>
				<div>$37.95</div>
			</div>
		</div>
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<img src="A3.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Kiaria Wishing Locket</div>
				<div>$44.95</div>
			</div>
		</div>
		<div class="relative hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-400 px-5 py-1.5">Sale</div>
			<img src="A4.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class=" text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Taaliyah Wishing Locket</div>
				<div class="line-through text-xs">$49.95</div>
				<div>$43.95</div>
			</div>
		</div>
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<img src="A5.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Blue Topaz Wishing Locket</div>
				<div>$49.95</div>
			</div>
		</div>
		<div class="relative hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<div class="absolute text-white top-0 left-0 z-10 bg-stone-600 px-5 py-1.5">Sale Out</div>
			<img src="A6.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Garnet Wishing Locket</div>
				<div>$49.95</div>
			</div>
		</div>
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<img src="A7.jpg" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Peridot Wishing Locket</div>
				<div>$49.95</div>
			</div>
		</div>
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-96 h-auto w-auto">
			<img src="A8.webp" alt="..." class="object-cover h-full w-full mb-4 transition duration-500 hover:scale-110 cursor-pointer" /></div>
			<div class="text-center mt-4 mb-6 hover:text-gray-500 cursor-pointer">
				<div>Amethyst Wishing Locket</div>
				<div>$49.95</div>
			</div>
		</div> -->
	</div>
</div>
