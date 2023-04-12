<script>
import { getAPI } from '$lib/util/api'
import { onMount } from 'svelte'
import { page } from '$app/stores'

let loading = false
let anklet

onMount(async () => {
	await getAnklet()
})
async function getAnklet() {
	try {
		loading = true
		anklet = await getAPI(
			`categories/megamenu?megamenu=true&store=${$page.data?.store?.id}`,
			$page.data.origin
		)
		console.log('Anklet = ', anklet)
	} catch (e) {
		console.error(e)
	} finally {
		loading = false
	}
}
</script>

<ul></ul>
