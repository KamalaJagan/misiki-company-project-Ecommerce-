<script>
import NecklacesA15 from '$lib/assets/logo/Guardian2.webp'
//import NecklacesA16 from '$lib/static/Guardian3.webp'
let theres = [
	{
		image:
			'https://cdn.shopify.com/s/files/1/0666/9309/products/Guardian_Chandelier_Smokey_Quartz_Earring_1_1100x.jpg?v=1580811076',
		text: 'Earrings'
	},
	{
		image: NecklacesA15,
		text: 'Hoops'
	},
	{
		image:
			'https://cdn.shopify.com/s/files/1/0666/9309/products/Guardian_Luna_Blue_Topaz_Necklace_Main_1100x.jpg?v=1580811048',
		text: 'Neckleces'
	}
]
</script>

<div class="py-10 sm:p-10 font-san-serif w-full">
	<div
		class="grid h-auto gap-2 grid-flow-row text-center cursor-pointer grid-cols-1 lg:grid-cols-3 container mx-auto max-w-6xl">
		{#each theres as three, bx}
			<div>
				<img src="{three.image}" class="p-4" alt="....." />
				<div class="uppercase text-center mt-2 hover:text-gray-500 cursor-pointer">
					{three.text}
				</div>
			</div>
		{/each}
	</div>
</div>
