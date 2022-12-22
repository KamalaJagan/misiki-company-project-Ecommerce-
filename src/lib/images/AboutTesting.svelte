<script>
	import { each } from 'svelte/internal';
	import blogC1 from '$lib/assets/blog/c1.webp';
	import blogC2 from '$lib/assets/blog/c2.webp';
	import blogC3 from '$lib/assets/blog/c3.webp';
	let users = [
		{
			text: 'Gothenburg jewellery has been running for 5 years now under the brilliant instruction of the fabulous Christine Farrington.'
		},
		{
			text: 'After Christine graduated she went straight into bespoke jewellery creation working with thebiggest names in the industry for the best part of a decade.'
		},
		{
			text: 'Now Christine has created Gothenburg; a jewellery brand selling handmade items that capture the spirit of her home, Cornwall.'
		},
		{
			text: 'Many of the pieces have natural shapes and textures to reflect the beautiful surroundings of the Cornish countryside. The stones and metals are sourced locally where possible and everything is made in our studio just back from the St.Ives harbour.'
		},
	];
	let blogs = [
		{
			image: blogC1,
			name: 'The journey of the gemstone',
			date: 'April 05, 2018',
			text: 'A gemstone (also called a gem, fine gem, jewel, precious stone, or semi-precious stone) is a piece of mineral crystal which, in cut and polished form, is used to make jewelry or other adornments. Join us on...',
			button: 'Read more'
		},
		{
			image: blogC2,
			name: 'jewellery to suit your skin tone?',
			date: 'April 05, 2018',
			text: 'Much like wearing makeup, wearing jewellery can really highlight your features and accentuate your beauty. It can bring out your skin tones, the colour of your hair...',
			button: 'Read more'
		},
		{
			image: blogC3,
			name: 'Big statements with minimal jewellery',
			date: 'October 17, 2017',
			text: 'This collection is a mermaids dream featuring all natural mother of pearl and abalone from the depths of the sea. All of our pieces are hand...',
			button: 'Read more'
		},
	];
</script>

<div class="">
	<div class=" ">
		<h1 class="text-center mb-6 p-2 text-4xl font-serif">Meet the maker</h1>
		{#each users as { text }}
			<div class="py-2 p-6 text-lg lg:px-52 font-sans-serif text-gray-700">
				<p>{text}</p>
			</div>
		{/each}
	</div>
	<div class="lg:px-48">
		<hr class="mt-6 max-w-6xl" />
	</div>

	<div class=" lg:h-[700px] h-auto bg:w-full font-sans-serif ">
		<h1 class="text-center mt-24 lg:mt-10 text-4xl text-gray-800 font-serif font-light">
			From the blog
		</h1>
		<div
			class="grid h-auto p-4  grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl w-full bg-cover"
		>
			{#each blogs as blog, bx}
				<div>
					<img src={blog.image} class="lg:h-[49vh] h-auto object-cover w-auto" alt="....." />
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
		</div>
	</div>
</div>
<div class="bg-[#faf8ee] p-2 mt-14 h-[32vh] lg:h-[35vh] lg:w-[210vh] md:w-[110vh] font-serif ">
	<p class="text-center mt-12 text-4xl">Find out more on our socials</p>
	<div>
		<ul class="col-span-1 p-4 flex gap-8 justify-center mt-6">
			<li class="pb-2">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-7 h-7 text-white bg-blue-900"
					viewBox="0 0 24 24"
				>
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</li>
			<li class="pb-2">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-7 h-7 text-blue-400"
					viewBox="0 0 24 24"
				>
					<path
						d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
					/>
				</svg>
			</li>
			<li class="pb-2">
				<svg
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-7 h-7 text-red-600"
					viewBox="0 0 24 24"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
				</svg>
			</li>
			<li>
				<svg role="img" viewBox="0 0 24 24" class="h-6 w-7" xmlns="http://www.w3.org/2000/svg"
					><path
						d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
					/></svg
				>
			</li>
		</ul>
	</div>
</div>
