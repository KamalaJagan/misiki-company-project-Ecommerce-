<script>
	import fromBlogC1 from '$lib/assets/blog/c1.webp';
	import fromBlogC2 from '$lib/assets/blog/c2.webp';
	import fromBlogC3 from '$lib/assets/blog/c3.webp';
	let blogs = [
		{
			image: fromBlogC1,
			name: 'The journey of the gemstone',
			date: 'April 05, 2018',
			text: 'A gemstone (also called a gem, fine gem, jewel, precious stone, or semi-precious stone) is a piece of mineral crystal which, in cut and polished form, is used to make jewelry or other adornments. Join us on...',
			button: 'Read more',
		},
		{
			image: fromBlogC2,
			name: 'jewellery to suit your skin tone?',
			date: 'April 05, 2018',
			text: 'Much like wearing makeup, wearing jewellery can really highlight your features and accentuate your beauty. It can bring out your skin tones, the colour of your hair...',
			button: 'Read more',
		},
		{
			image: fromBlogC3,
			name: 'Big statements with minimal jewellery',
			date: 'October 17, 2017',
			text: 'This collection is a mermaids dream featuring all natural mother of pearl and abalone from the depths of the sea. All of our pieces are hand...',
			button: 'Read more',
		},
	];
</script>
<div class="bg-[#faf8ee] lg:h-[700px] h-auto bg:w-full font-sans-serif mt-10">
	<h1 class="text-center py-8 text-4xl text-gray-800 font-serif font-light">From the blog</h1>
	<div class="grid h-auto p-4 grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl w-full bg-cover">
		{#each blogs as blog, bx}
				<div>
					<img src="{blog.image}" class="lg:h-64 h-auto object-cover w-auto" alt="....." />
					<div class="py-4">
						<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
							<p>{blog.name}</p>
						</div>
						<div class="mt-2 text-gray-400">{blog.date}</div>
						<p class="mt-5 text-gray-700">{blog.text}</p>
					</div>
					<button class="text-gray-500 hover:text-black">{blog.button}</button>
				</div>
			{/each}
		<!-- <div>
			<img src="/blog/c2.webp" class="h-64 w-full object-cover" alt="....." />
			<div class="py-4">
				<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
					jewellery to suit your skin tone?
				</div>
				<div class="mt-2 text-gray-400">April 05,2018</div>
				<p class=" mt-5 text-gray-700">
					Much like wearing makeup, wearing jewellery can really highlight your features and
					accentuate your beauty. It can bring out your skin tones, the colour of your hair...
				</p>
			</div>
			<button class="text-gray-500 hover:text-black">Read more</button>
		</div>
		<div>
			<img src="/blog/c3.webp" class="h-64 w-full object-cover" alt="....." />
			<div class="py-4">
				<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
					Big statements with minimal jewellery
				</div>
				<div class="mt-2 text-gray-400">October 17, 2017</div>
				<p class="mt-5 text-gray-700">
					This collection is a mermaids dream featuring all natural mother of pearl and abalone from
					the depths of the sea. All of our pieces are hand...
				</p>
			</div>
			<button class="text-gray-500 hover:text-black">Read more</button>
		</div> -->
	</div>
</div>
