<script>
import { getAPI } from '$lib/util/api'
import { onMount } from 'svelte'
import { page } from '$app/stores'

let loading = false
let megamenu

onMount(async () => {
	await getMegamenu()
})

async function getMegamenu() {
	try {
		loading = true
		megamenu = await getAPI(
			`categories/megamenu?megamenu=true&store=${$page.data?.store?.id}`,
			$page.data.origin
		)

		console.log('megamenu = ', megamenu)
	} catch (e) {
		console.error(e)
	} finally {
		loading = false
	}
}
</script>

{#if megamenu?.length}
	<ul>
		{#each megamenu as ank, bx}
			<li class="hover:text-gray-500 flex">
				<div class=" text-center mb-12 mt-4">
					<div class="">{ank.name}</div>
					<div class="line-through text-xs">{ank.amount}</div>
					<div>{ank.price}</div>
				</div>
			</li>
		{/each}

		<div class="justify-center text-center">
			<p>This is a good designing page</p>
		</div>
	</ul>
{/if}
