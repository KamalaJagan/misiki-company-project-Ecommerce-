<script>
	import fromBlogC1 from '$lib/assets/blog/c1.webp';
	import fromBlogC2 from '$lib/assets/blog/c2.webp';
	import fromBlogC3 from '$lib/assets/blog/c3.webp';
	let faqs = [
		{
			name: 'Do you ship overseas?',
			text: 'Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.',
		},
		{
			name: 'How long will it take to get my order?',
			text: 'It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.',
		},
		{
			name: 'What shipping carriers do you use?',
			text: 'We use all major carriers, and local courier partners. You’ll be asked to select a delivery method during checkout.',
		},
		{
			name: 'Can I return my product?',
			text: 'We always aim for make sure our customers love our products, but if you do need to return an order, we’re happy to help. Just email us directly and we’ll take you through the process.',
		},
		{
			name: 'Can I get my product personalized?',
			text: 'It depends on the creator and the product. All options are outlined on the product page, so look out for customization options there.',
		},
		{
			name: 'Can I sign up to your newsletter?',
			text: 'Yes! Just enter your email here, and you’ll be added to our subscription list. You’ll be sent updates, exclusive offers, and much more.',
		},
		{
			name: 'Are these Q&As real?',
			text: 'No. This is demonstration content, designed to showcase how these page could look with your own content.',
		},
	];
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

<div>
	<div class="mt-10 text-center font-serif text-gray-700">
		<h1 class="text-4xl text-black my-auto text-center px-20">FAQs</h1>
	</div>
	<div class="mt-10 text-xl max-w-8xl text-gray-700 my-auto justify-center px-52 p-5 font-sans-serif">
		{#each faqs as {text, name} }
		<div>
			<div class="font-bold">{name}</div>
			<p>
				{text}
			</p>
		</div>
		{/each}
		<!-- <div>
			<div class="font-bold">How long will it take to get my order?</div>
			<p>
				It depends on where you are. Orders processed here will take 5-7 business days to arrive.
				Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in
				your confirmation email.
			</p>
		</div>
		<div>
			<div class="font-bold">What shipping carriers do you use?</div>
			<p>
				We use all major carriers, and local courier partners. You’ll be asked to select a delivery
				method during checkout.
			</p>
		</div>
		<div>
			<div class="font-bold">Can I return my product?</div>
			<p>
				We always aim for make sure our customers love our products, but if you do need to return an
				order, we’re happy to help. Just email us directly and we’ll take you through the process.
			</p>
		</div>
		<div>
			<div class="font-bold">Can I get my product personalized?</div>
			<p>
				It depends on the creator and the product. All options are outlined on the product page, so
				look out for customization options there.
			</p>
		</div>
		<div>
			<div class="font-bold">Can I sign up to your newsletter?</div>
			<p>
				Yes! Just enter your email here, and you’ll be added to our subscription list. You’ll be
				sent updates, exclusive offers, and much more.
			</p>
		</div>
		<div>
			<div class="font-bold">Are these Q&As real?</div>
			<p>
				No. This is demonstration content, designed to showcase how these page could look with your
				own content.
			</p>
		</div> -->
	</div>
	<!-- <div class="font-serif mt-20 max-w-6xl justify-item-center text-center">
	<h1 class="text-4xl text-center text-black mx-auto">Contact Us</h1> -->
	<div class="lg:h-[700px] h-auto bg:w-full font-sans-serif ">
		<h1 class="text-center p-5 mt-10 text-4xl text-gray-800 font-serif font-light">
			From the blog
		</h1>
		<p class="text-center px-24 p-6">
			Got a question? We are happy to help you. Please contact us using the form below.
		</p>
		<!-- <div class="text-center justify-center flex flex-row grid lg:grid-cols-2 max-w-6xl ">
		<div class="relative px-24 mt-4 ">
			Name
			<div>
				<input
					type="Name"
					class="w-full lg:max-w- px-4 containe py-2.5 hover:bg-black-rounded px-2 border-2 border-slate-500 "
				/>
			</div>
		</div>
		<div class="relative px-24 mt-4">
			Email
			<div>
				<input
					type="Email"
					class="w-full lg:max-w- px-4 containe py-2.5 hover:bg-black-rounded px-2 border-2 border-slate-500 "
				/>
			</div>
		</div>
	</div>
	<div class="px-24 mt-4">
		Contact
		<div class="text-center">
			<input
				type="Contact"
				class="w-full px-4 lg:max-w-6xl  py-2.5 hover:bg-black-rounded px-2 border-2 border-slate-500"
			/>
		</div>
	</div>
	<div class="px-24 mt-4">
		Massage
		<div class="">
			<input
				type="Massage"
				class="w-full h-20 lg:h-40 px-4 lg:max-w-6xl  py-2.5 hover:bg-black-rounded px-2 border-2 border-slate-500"
			/>
		</div>
	</div> -->
		<div class=" text-center font-sans-serif">
			<div class=" flex-row grid lg:grid-cols-2 max-w-6xl ">
				<div class="relative px-24 mt-4 ">
					Name
					<div>
						<input
							type="Name"
							class=" w-[30vh] px-10 container py-2.5 hover:bg-black-rounded border-2 border-slate-500 "
						/>
					</div>
				</div>

				<div class="relative px-24 mt-4 ">
					Email
					<div>
						<input
							type="Name"
							class=" w-[30vh] px-4 container py-2.5 hover:bg-black-rounded border-2 border-slate-500 "
						/>
					</div>
				</div>
			</div>
			<div class="relative p-2">
				Contact
				<input
					type="Enter Contact"
					class="w-[102vh] px-4 py-2.5 hover:bg-black-rounded border-2 border-slate-500 "
					placeholder="Contact"
				/>
			</div>
			<div class="relative p-2">
				Massage
				<input
					type="Enter massage"
					class="w-[102vh] h-20 top-0 lg:h-40 px-4 py-2.5 hover:bg-black-rounded border-2 border-slate-500 "
					placeholder="Massege"
				/>
			</div>
		</div>
		<p class="px-24 text-sm p-2 mt-4 text-center">
			This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
		</p>
		<div class="text-center">
			<button
				class="h-12 uppercase text-white justify-center p-2 gap-4 md:w-auto lg:w-32 border-2 rounded border-slate-500 bg-gray-900"
			>
				Send
			</button>
		</div>
	</div>
	<div class="bg-[#faf8ee] lg:h-[700px] w-[210vh] h-auto bg:w-full font-sans-serif py-14">
		<h1 class="text-center   text-4xl text-gray-800 font-serif font-light">From the blog</h1>
		<div class="grid h-auto p-5 grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl w-full bg-cover">
			{#each blogs as blog, bx}
					<div>
						<img src="{blog.image}" class="lg:h-64 h-auto  object-cover w-auto" alt="....." />
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
</div>
