<script>
	import NecklacesA1 from '$lib/assets/bran/A18.webp';
	import NecklacesA2 from '$lib/assets/bran/A19.webp';
	let anklets = [
		{
			image: NecklacesA1,
			name: "Charm Anklet",
			amount: "",
			price: "$36.95",
		},
		{
			image: NecklacesA2,
			name: "Roman Anklet",
			amount: "$35.95",
			price: "$27.95",
		},
	];

</script>
<div class=" font-serif flex col-span-4">
    <div class="text-center gap-4 mx-auto p-2 max-w-5xl bg-cover grid lg:grid-cols-3 grid-cols-2">
        {#each anklets as ank, bx}
        <div>
            <img src={ank.image} alt="..." class="object-cover h-auto w-full mb-2" />
            <div class=" text-center mb-12">
                <div class="">{ank.name}</div>
                <div class="line-through text-xs">{ank.amount}</div>
                <div>{ank.price}</div>
            </div>
        </div>
        {/each}
        <!-- <div>
            <img src="A19.webp" alt="..." class="object-cover h-auto w-full mb-4" />
            <div class=" text-center mb-12">
                <div class="">Roman Anklet</div>
                <div class="line-through">$35.95</div>
                <div>$27.95</div>
            </div>
        </div> -->
    </div>
</div>