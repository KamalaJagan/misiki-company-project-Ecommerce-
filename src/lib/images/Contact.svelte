<script>
import fromBlogC1 from '$lib/assets/blog/c1.webp'
import fromBlogC2 from '$lib/assets/blog/c2.webp'
import fromBlogC3 from '$lib/assets/blog/c3.webp'
let faqs = [
	{
		name: 'Do you ship overseas?',
		text: 'Yes, we ship all over the world. Shipping costs will apply, and will be added at checkout. We run discounts and promotions all year, so stay tuned for exclusive deals.'
	},
	{
		name: 'How long will it take to get my order?',
		text: 'It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.'
	},
	{
		name: 'What shipping carriers do you use?',
		text: 'We use all major carriers, and local courier partners. You’ll be asked to select a delivery method during checkout.'
	},
	{
		name: 'Can I return my product?',
		text: 'We always aim for make sure our customers love our products, but if you do need to return an order, we’re happy to help. Just email us directly and we’ll take you through the process.'
	},
	{
		name: 'Can I get my product personalized?',
		text: 'It depends on the creator and the product. All options are outlined on the product page, so look out for customization options there.'
	},
	{
		name: 'Can I sign up to your newsletter?',
		text: 'Yes! Just enter your email here, and you’ll be added to our subscription list. You’ll be sent updates, exclusive offers, and much more.'
	},
	{
		name: 'Are these Q&As real?',
		text: 'No. This is demonstration content, designed to showcase how these page could look with your own content.'
	}
]
let blogs = [
	{
		image: fromBlogC1,
		name: 'The journey of the gemstone',
		date: 'April 05, 2018',
		text: 'A gemstone (also called a gem, fine gem, jewel, precious stone, or semi-precious stone) is a piece of mineral crystal which, in cut and polished form, is used to make jewelry or other adornments. Join us on...',
		button: 'Read more'
	},
	{
		image: fromBlogC2,
		name: 'jewellery to suit your skin tone?',
		date: 'April 05, 2018',
		text: 'Much like wearing makeup, wearing jewellery can really highlight your features and accentuate your beauty. It can bring out your skin tones, the colour of your hair...',
		button: 'Read more'
	},
	{
		image: fromBlogC3,
		name: 'Big statements with minimal jewellery',
		date: 'October 17, 2017',
		text: 'This collection is a mermaids dream featuring all natural mother of pearl and abalone from the depths of the sea. All of our pieces are hand...',
		button: 'Read more'
	}
]
</script>

<div class="mt-10 text-center justify-center font-serif text-gray-700">
	<h1 class="text-4xl">FAQs</h1>
</div>

<div
	class="mt-6 text-base max-w-6xl text-gray-700  justify-center lg:ml-[54vh] lg:mr-[56vh] p-4 font-sans-serif">
	{#each faqs as { text, name }}
		<div>
			<div class="font-bold">{name}</div>
			<p>
				{text}
			</p>
		</div>
	{/each}
</div>

<div class="lg:h-[700px] h-auto bg:w-full font-sans-serif p-4">
	<h1 class="text-center justify-center mt-10 text-4xl text-gray-800 font-serif font-light">
		Contact us
	</h1>
	<p class="lg:ml-[55vh]">
		Got a question? We are happy to help you. Please contact us using the form below.
	</p>
	<form action="#" class="space-y-4 mt-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 max-w-6xl ">
			<div>
				<label for="name" class="lg:ml-[55vh] text-base font-medium text-gray-900 ">Name</label>
				<input
					type="name"
					id="name"
					placeholder="name"
					class="lg:ml-[55vh] mt-2 border lg:w-[48vh] w-full border-black text-gray-900 text-sm p-4"
					required />
			</div>
			<div>
				<label for="email" class="lg:ml-[27vh] text-base font-medium text-gray-900">Email</label>
				<input
					type="email"
					id="email"
					placeholder="xy12@gmail.com"
					class="lg:ml-[27vh] mt-2 lg:w-[49vh] w-full border border-black text-gray-900 text-sm p-4"
					required />
			</div>
		</div>
		<div>
			<label for="Phone number" class="lg:ml-[55vh]  text-base font-medium text-gray-900">Phone Number</label>
			<input
				type="Phone number"
				id="Phone number"
				placeholder="Phone number"
				class="lg:ml-[55vh] mt-2 border lg:w-[101vh] w-full border-black text-gray-900 text-sm p-4"
				required />
		</div>
		<div class="sm:col-span-2">
			<label for="Message" class="lg:ml-[55vh]  text-base font-medium text-gray-900">Message</label>
			<textarea
				id="Message"
				rows="11"
				placeholder="Message"
				class="lg:ml-[55vh] mt-2 border lg:w-[101vh] w-full border-black text-gray-900 text-sm p-4"
				required></textarea>
		</div>
	</form>
	<p class="text-xs lg:ml-[55vh] mt-4">
		This site is protected by reCAPTCHA and the Google <a href="/" class="hover:underline">Privacy Policy</a>
		and <a href="/" class="hover:underline">Terms of Service</a> apply.
	</p>
</div>
<div class="justify-center text-center">
	<button class=" text-center h-[6.5vh] text-white tracking-widest text-base w-[15vh] bg-slate-600">SEND</button>
</div>

<div class=" h-auto bg:w-full font-sans-serif mt-10">
	<h1 class="text-center mt-10 text-4xl text-gray-800 font-serif font-light">From the blog</h1>
	<div
		class="grid h-auto p-5 grid-flow-row grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl w-full bg-cover">
		{#each blogs as blog, bx}
			<div>
				<img src="{blog.image}" class="lg:h-[48vh] mt-4 h-auto object-cover w-auto" alt="....." />
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
