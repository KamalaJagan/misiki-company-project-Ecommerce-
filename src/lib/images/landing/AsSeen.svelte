<script>
	import asSeenS1 from "$lib/assets/asseen/d1.png"
	import asSeenS2 from "$lib/assets/asseen/d2.png"
	import asSeenS3 from "$lib/assets/asseen/d3.png"
	import asSeenS4 from "$lib/assets/asseen/d4.webp"
	let seens = [
		{
			image: asSeenS1,
		},
		{
			image: asSeenS2,
		},
		{
			image: asSeenS3,
		},
		{
			image: asSeenS4,
		},
	];
</script>
<div class="font-sans-serif mt-14">
	<div class="text-center text-4xl ">
		<a href="/" class="font-serif">As seen in</a>
	</div>
	<div class="flex justify-center flex-wrap gap-4 mt-8">
		{#each seens as asseen, bx}
	
		<img
			src="{asseen.image}"
			class="lg:h-32 w-auto h-28  object-contain object-top flex-shrink-0"
			alt="..."
		/>
		<!-- <img
			src="D2.png"
			class="lg:h-32 w-auto h-28 object-contain object-top flex-shrink-0"
			alt="..."
		/>
		<img
			src="D3.png"
			class="lg:h-32 w-auto h-28 object-contain object-top flex-shrink-0"
			alt="..."
		/>
		<img
			src="D4.webp"
			class="lg:h-32 w-auto h-28 object-contain object-top flex-shrink-0"
			alt="..."
		/> -->
		{/each}
	</div>
</div>
