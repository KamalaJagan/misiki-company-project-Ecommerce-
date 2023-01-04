<script>
	import NecklacesA1 from '$lib/assets/bran/A18.webp';
	import NecklacesA2 from '$lib/assets/bran/A19.webp';

	import NecklacesA3 from '$lib/assets/logo/L16.webp';
	import NecklacesA4 from '$lib/assets/dis/G2.webp';
	import NecklacesA5 from '$lib/assets/logo/L16.webp';

	import NecklacesA6 from '$lib/assets/logo/L17.webp';
	import NecklacesA7 from '$lib/assets/bran/a5.webp';
	import NecklacesA8 from '$lib/assets/logo/L18.webp';

	import NecklacesA9 from '$lib/assets/dis/G3.webp';
	import NecklacesA10 from '$lib/assets/dis/G4.webp';
	import NecklacesA11 from '$lib/assets/dis/G1.webp';

	import NecklacesA12 from '$lib/assets/ourBest/B1.webp';
	import NecklacesA13 from '$lib/assets/ourBest/B2.webp';
	import NecklacesA14 from '$lib/assets/ourBest/B3.jpg';

	import NecklacesA15 from '$lib/assets/logo/Guardian2.webp';
	import NecklacesA16 from '$lib/assets/logo/L16.webp';
	import NecklacesA17 from '$lib/assets/logo/L19.webp';

	import NecklacesA18 from '$lib/assets/dis/G1.webp';
	import NecklacesA19 from '$lib/assets/logo/L20.webp';
	import NecklacesA20 from '$lib/assets/logo/L21.webp';

	import NecklacesA21 from '$lib/assets/dis/G1.webp';
	import NecklacesA22 from '$lib/assets/dis/G2.webp';
	import NecklacesA23 from '$lib/assets/dis/G3.webp';

	import NecklacesA24 from '$lib/assets/bran/a2.jpg';
	import NecklacesA25 from '$lib/assets/ourBest/B2.webp';
	import NecklacesA26 from '$lib/assets/bran/a5.webp';

	import NecklacesA27 from '$lib/assets/bran/a5.webp';
	import NecklacesA28 from '$lib/assets/bran/a2.jpg';
	import NecklacesA29 from '$lib/assets/bran/a3.webp';

	import asSeenS1 from '$lib/assets/asseen/d1.png';
	import asSeenS2 from '$lib/assets/asseen/d2.png';
	import asSeenS3 from '$lib/assets/asseen/d3.png';
	import asSeenS4 from '$lib/assets/asseen/d4.webp';
	//import Neckleses from './Neckleses.svelte';
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
	];
	let hoops = [
		{
			image: NecklacesA3,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA4,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA5,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let earrings = [
		{
			image: NecklacesA6,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA7,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA8,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let guardins = [
		{
			image: NecklacesA9,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA10,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA11,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let balls = [
		{
			image: NecklacesA12,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA13,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA14,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let hops = [
		{
			image: NecklacesA15,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA16,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA17,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let necklaces = [
		{
			image: NecklacesA18,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA19,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA20,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let news = [
		{
			image: NecklacesA21,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA22,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA23,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let sales = [
		{
			image: NecklacesA24,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA25,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA26,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];
	let shops = [
		{
			image:
				'https://cdn.shopify.com/s/files/1/0666/9309/products/Clover_Swift_Lucy-307-Editwebsize_1100x.jpg?v=1580810236',
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image:
				'https://cdn.shopify.com/s/files/1/0666/9309/products/Clover_Swift_Leah-159-Editwebsize_1100x.jpg?v=1580827311',
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		}
	];
	let wishings = [
		{
			image: NecklacesA27,
			name: 'Bejewelled Emerald Hoops - Small',
			amount: '$29.95',
			price: '$23.95'
		},
		{
			image: NecklacesA28,
			name: 'Bejewelled Water Sapphire Hoops - Large',
			amount: '$42.95',
			price: 'from $37.95'
		},
		{
			image: NecklacesA29,
			name: 'Bejewelled Ruby Hoop Earrings - Small',
			amount: '',
			price: '$27.95'
		}
	];

	let seens = [
		{
			image: asSeenS1
		},
		{
			image: asSeenS2
		},
		{
			image: asSeenS3
		},
		{
			image: asSeenS4
		}
	];
</script>

<div>
	<h1 class="text-4xl text-center font-serif mt-8 mb-6">Product Collections</h1>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class="mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2 p-4">
		{#each anklets as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] h-[40vh] w-[32vh] lg:w-full">
				<img src={ank.image} alt="..." class="object-cover transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each hoops as ank, bx}
			<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each earrings as ank, bx}
			<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each guardins as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each balls as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each hops as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class="font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each necklaces as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each news as ank, bx}
			<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each sales as ank, bx}
			<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each shops as ank, bx}
			<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
<div class="mx-auto max-w-6xl lg:w-[155vh] w-full">
	<hr class=" mb-3"/>
	<div class="flex gap-4 mb-3">
		ANKLETS
		<p class="text-xs py-1">2 items</p>
	</div>
	<hr class=" mb-3"/>
</div>
<div class=" font-sans-serif">
	<div class="p-4 text-center gap-8 mx-auto max-w-6xl bg-cover grid lg:grid-cols-3 grid-cols-2">
		{#each wishings as ank, bx}
		<div class="hover:text-gray-500">
			<div class="overflow-hidden lg:h-[72vh] w-full">
				<img src={ank.image} alt="..." class="object-cover h-full w-full transition duration-500 hover:scale-110 cursor-pointer"/> </div>
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="bg-[#ded1bd] h-[50vh] w-[210vh] font-sans-serif mt-14">
	<div class="text-center text-4xl py-8">
		<a href="/" class="font-serif">As seen in</a>
	</div>
	<div class="flex bg-[#ded1bd] justify-center flex-wrap gap-4 mt-8">
		{#each seens as asseen, bx}
			<img
				src={asseen.image}
				class="lg:h-32 w-auto bg-[#ded1bd] h-28 object-contain object-top flex-shrink-0"
				alt="..."
			/>
		{/each}
	</div>
</div>
