<script>
	import logos from '$lib/assets/logo/L1.webp';
	import logos1 from '$lib/assets/logo/L2.webp';
	import logos2 from '$lib/assets/logo/L3.webp';
	import logos3 from '$lib/assets/logo/L4.webp';
	import logos4 from '$lib/assets/logo/L5.webp';
	import logos5 from '$lib/assets/logo/L6.webp';
	import logos6 from '$lib/assets/logo/L7.webp';
	import logos7 from '$lib/assets/logo/L8.webp';
	import logos8 from '$lib/assets/logo/L9.webp';
	import logos9 from '$lib/assets/logo/L10.webp';
	import logos10 from '$lib/assets/logo/L11.webp';
	import logos11 from '$lib/assets/logo/L12.webp';
	import logos12 from '$lib/assets/logo/L13.webp';
	import logos13 from '$lib/assets/logo/L14.webp';
	import logos14 from '$lib/assets/logo/L15.webp';
	let logs = [
		{
			image: logos,
			name: 'SHOPIFY EXPERTS SINCE 2013',
			paragraph:
				"We've been developing Shopify themes for almost a decade making us one of the most experienced teams in the theme store"
		},
		{
			image: logos1,
			name: 'FAST AND FRIENDLY SUPPORT',
			paragraph:
				'We resolve 52% of our merchants queries in the first reply and have an average response time of under 9 hours'
		},
		{
			image: logos2,
			name: 'QUALITY THEMES YOU LOVE',
			paragraph:
				'We have over 400+ positive reviews across all our themes and are incredibly proud of what we build'
		}
	];
	let logoos = [
		{
			image: logos3,
			name: 'FAST AND FRIENDLY SUPPORT',
			paragraph:
				'We work under Shopifys requirments for theme speeds and are regularly making improvements to how our themes are built'
		},
		{
			image: logos5,
			name: 'FAST',
			paragraph: 'We are continually working to ensure our themes are as accessible as possible'
		},
		{
			image: logos4,
			name: 'QUALITY THEMES YOU LOVE',
			paragraph:
				'You know what is best for your business so we aim to offer the tools you need to bring your vision to life'
		}
	];
	let lags = [
		{
			image: logos6,
		},
		{
			image: logos7,
		},
		{
			image: logos8,
		},
		{
			image: logos9,
		},
		{
			image: logos10,
		},
		{
			image: logos11,
		},
	];
	let longs = [
		{
			image: logos12,
			name: 'ENVY: A THING OF NATURAL BEAUTY',
			paragraph: 'In spending her days travelling with her family and learning about new and sustainable ways of living - particularly in off-grid communities and eco-villages –...',
			button: 'Read more',
		},
		{
			image: logos13,
			name: 'INCREASE SALES BY 150% YEAR ON YEAR. ANYONE FOR COFFEE?',
			paragraph: 'The year is 2016, and much as Pippa Williams adores travelling up and down the country in her mobile coffee van to play her part...',
			button: 'Read more',
		},
		{
			image: logos14,
			name: 'FAERLY ENVIOUS? YOU WILL BE!',
			paragraph: 'Is it possible to be envious of your own creation?  When your clients tell you how much they adore what you’ve produced as they build...',
			button: 'Read more',
		},
	];
</script>

<div class="">
	<img src="img2.webp" class="lg:w-[210vh] w-full h-[85vh] lg:h-[48vh] object-cover relative " alt="..." />
	<div class="absolute lg:top-80 text-center lg:ml-[70vh] top-[50vh] p-5">
		<h5 class="text-white text-5xl font-serif">Introducing Envy</h5>
		<h2 class="text-base text-white my-auto font-serif cursor-pointer mt-5">The Envy theme boasts flexible sections to use across your store.</h2>
		<!-- <button class="mt-4 h-12 uppercase text-black w-36 tracking-wide bg-yellow-200 shadow-200 hover:bg-zinc-700 cursor-pointer">Shop now</button> -->
	</div>
</div>


<div class="grid grid-cols-1 lg:grid-cols-2 p-5 mt-20 lg:ml-[28vh] max-w-6xl mb-16 w-full lg:w-[210vh]">
	<img
		src="https://cdn.shopify.com/s/files/1/0666/9309/files/Group_2146_1100x.png?v=1648048312"
		alt="."
		class="lg:h-[55vh] h-[40vh] ml-2"
	/>
	
	<div class="mt-4 lg:mt-24 font-sans">
		<h1 class="text-3xl font-serif">Built to help you sell more</h1>
		<p class="text-base mt-4">
			Envy is a super-versatile theme that is ideal for e-commerce businesses with regular
			promotions. Our range of beautifully designed sections are perfect for showcasing featured
			products and special offers alike.
		</p>
		<p class="text-base mt-6">
			This theme is great for both smaller and larger enterprises and our 4 aspirational presets
			ensure you can get your web store set up in no time at all.
		</p>
	</div>
</div>

<div class="bg-[#faf8ee] w-full lg:w-[210vh] lg:h-40 mb-10 h-60">
	<p class="text-center text-3xl font-serif py-6 px-4">Everything you need to convert your customers</p>
	<p class="text-base font-sans-serif text-center">
		From lookbooks, to FAQ pages, and more. With a slick and contemporary design that really
		showcase your products and imagery.
	</p>
</div>



<div
	class="grid h-auto text-center sm:p-5 grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full lg:w-[210vh] bg-cover tracking-wider mt-10 mb-10">
	{#each logs as logo, bx}
		<img src={logo.image} alt="." class="lg:h-16"/>
		<div class=" text-sm">
			<div>{logo.name}</div>
			<p class="mt-2">{logo.paragraph}</p>
		</div>
	{/each}
</div>




<div class="bg-[#faf8ee] w-full lg:w-[210vh] mb-10">
	<div
		class=" grid grid-flow-rows grid-cols-1 lg:grid-cols-2 gap-4 lg:ml-[26vh] p-5 mx-auto max-w-6xl mt-5"
	>
		<div class="lg:mt-32">
			<h1 class="text-4xl font-serif ">Inspire customers to buy</h1>
			<p class="text-base lg:mt-4">
				Ensure your customers discover the products they are looking for with features like live
				search, color swatches, cross selling and recommended products.
			</p>
		</div>
		<img
			src="https://cdn.shopify.com/s/files/1/0666/9309/files/Group_2161_1100x.png?v=1648127525"
			alt="."
			class="lg:h-[55vh] h-[40vh] lg:mt-4"
		/>
		<img
			src="https://cdn.shopify.com/s/files/1/0666/9309/files/Group_2158_6ee54c42-bc4f-4831-816b-a08d448ee00e_1100x.png?v=1648127222"
			alt="."
			class="lg:h-[55vh] h-[40vh] lg:mt-20"
		/>
		<div class="lg:mt-48">
			<h1 class="text-4xl font-serif ">Increase average order value</h1>
			<p class="text-base lg:mt-4">
				Increase your average order value with promotional sections like an announcement bar,
				recommended products, email subscription pop up and in cart messages.
			</p>
		</div>
	</div>
</div>


<div class="text-center p-5 w-full lg:w-[210vh]">
	<h1 class="text-4xl mt-6 font-serif">
		There really is no limit when using Envy 2.0 and Shopify.
	</h1>
	<p class="text-sm mt-2">
		We ensure Envy doesn't just look good but works well too helping you, convert, rank and sell.
	</p>
</div>


<div class="bg-[#faf8ee] w-full lg:w-[210vh] mb-10 mt-16">
	<div
		class="grid justify-center items-center text-center p-5 grid-cols-1 lg:grid-cols-3 gap-4 mx-auto max-w-6xl bg-cove tracking-wider "
	>
		{#each logoos as log, bx}
			<img src={log.image} alt="." class="lg:h-16 items-center lg:ml-4" />
			<div class="text-sm">
				<div>{log.name}</div>
				<p class="mt-2">{log.paragraph}</p>
			</div>
		{/each}
	</div>
</div>


<div class="max-w-6xl p-5 lg:ml-[23vh] mb-10 w-full lg:w-[205vh]">
	<h1 class="text-4xl font-serif">KEY FEATURES</h1>
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">PRODUCT PAGE</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">COLLECTION PAGE</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus h-6 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">CART & CHECKOUT</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus h-6 w-4 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">AGE VERIFIER</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus h-6 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">ANIMATION</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus h-6 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
	<div class="flex justify-between mt-4 cursor-pointer">
		<div class="text-sm">PRODUCT DISCOVERY</div>
		<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus h-6 w-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		 </svg>
	</div>
	<hr class="mt-3 border-black" />
</div>



<div class="mt-10 mb-20 text-center p-5 w-full lg:w-[210vh]">
	<h1 class="text-4xl font-serif">Join the thousands of Shopify stores using our theme</h1>
	<div class="grid grid-cols-3 lg:grid-cols-6 max-w-5xl mt-6 justify-center lg:ml-[32vh]">
		{#each lags as logg, bx}
		<img src={logg.image} alt="." class="h-32 w-36 ">
		{/each}
	</div>
</div>



<div class="mt-10 mb-10">
	<h1 class="text-4xl font-serif text-center">Case studies</h1>
	<div class=" h-auto bg:w-full font-sans-serif mt-10">
		<div class="grid h-auto p-5 grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl bg-cover">
			{#each longs as blog, bx}
					<div>
						<img src="{blog.image}" class="lg:h-80 h-auto object-cover w-full" alt="....." />
						<div class="py-4">
							<div class="uppercase hover:underline text-gray-500 text-sm cursor-pointer">
								<p>{blog.name}</p>
							</div>
							<p class="mt-5 text-gray-700">{blog.paragraph}</p>
						</div>
						<button class="text-gray-500 hover:text-black underline hover:no-underline">{blog.button}</button>
					</div>
				{/each}
		</div>
	</div>
</div>