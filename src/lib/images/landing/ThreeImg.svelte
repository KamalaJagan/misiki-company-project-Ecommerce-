<script>
	let theres = [
		{
			image: "https://cdn.shopify.com/s/files/1/0666/9309/products/Guardian_Chandelier_Smokey_Quartz_Earring_1_1100x.jpg?v=1580811076",
			text: "Earrings",
		},
		{
			image: "Guardian2.webp",
			text: "Hoops",
		},
		{
			image: "Guardian3.webp",
			text: "Neckleces"
		},
	];
</script>
<div class="py-10 sm:p-10 font-san-serif w-full">
	<div
		class="grid h-auto gap-2 p-4 grid-flow-row text-center cursor-pointer grid-cols-1 lg:grid-cols-3 container mx-auto max-w-6xl">
		{#each theres as three, bx}
		<div>
			<img src="{three.image}" class="p-3" alt="....."/>
			<div class="uppercase text-center mt-2 hover:text-gray-500 cursor-pointer">{three.text}</div>
		</div>
		{/each}
		<!-- <div>
			<img src="Guardian2.webp" class="p-3" alt="....."/>HOOPS
		</div>
		<div>
			<img src="Guardian3.webp" class="p-3" alt="....."/>NECKLECES
		</div> -->
	</div>
</div>
