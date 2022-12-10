
<script>
	import { each } from "svelte/internal";
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
		}
	];
	let blogs = [
		{
			image: blogC1,
			name: 'The journey of the gemstone',
			date: 'April 05, 2018',
			text: 'A gemstone (also called a gem, fine gem, jewel, precious stone, or semi-precious stone) is a piece of mineral crystal which, in cut and polished form, is used to make jewelry or other adornments. Join us on...',
			button: 'Read more',
		},
		{
			image: blogC2,
			name: 'jewellery to suit your skin tone?',
			date: 'April 05, 2018',
			text: 'Much like wearing makeup, wearing jewellery can really highlight your features and accentuate your beauty. It can bring out your skin tones, the colour of your hair...',
			button: 'Read more',
		},
		{
			image: blogC3,
			name: 'Big statements with minimal jewellery',
			date: 'October 17, 2017',
			text: 'This collection is a mermaids dream featuring all natural mother of pearl and abalone from the depths of the sea. All of our pieces are hand...',
			button: 'Read more',
		},
	];
</script>

<div class="">
	<div class=" ">
		<h1 class="text-center mb-6 p-6 text-4xl font-serif">Meet the maker</h1>
		{#each users as { text }}
			<div class="py-2 px-24 text-lg lg:px-52 font-sans-serif text-gray-700">
				<p>{text}</p>
			</div>
		{/each}
	</div>
	<div class="lg:px-48">
		<hr class="mt-6 max-w-6xl" />
	</div>

	<div class=" lg:h-[700px] h-auto bg:w-full font-sans-serif ">
		<h1 class="text-center p-5 mt-10 text-4xl text-gray-800 font-serif font-light">
			From the blog
		</h1>
		<div
			class="grid h-auto p-5 grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl w-full bg-cover"
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
<div class="bg-[#faf8ee] mt-14 lg:h-[200px] lg:w-[210vh] md:w-[110vh] font-sans-serif ">
	<p class="text-center mt-12 text-4xl">Find out more on our socials</p>
	<div>
		<ul class="col-span-1 p-4 flex gap-4 justify-center mt-6">
			<li class="pb-2">
				<svg
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="w-7 h-6 bg:blue-200"
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
					class="w-7 h-6 "
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
					class="w-7 h-6 border:color-red"
					viewBox="0 0 24 24"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
				</svg>
			</li>
			<li>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-7 h-6 icon icon-tabler icon-tabler-brand-tiktok"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
				</svg>
			</li>
		</ul>
	</div>
</div>
