<style>
.minimum-width-rem {
	min-width: 360px;
}

.text-rem {
	font-size: x-small;
}
</style>

<script>
import { goto } from '$app/navigation'
import { page } from '$app/stores'

let selectedItem = {}
$: selectedItem.link = $page?.url.pathname

let footerItems = [
	{
		name: 'Home',
		link: '/',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  		<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
		</svg>`,
		activeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  		<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  		<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
		</svg>`
	},
	{
		name: 'Catagories',
		link: '/catagories',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
		</svg>`,
		activeIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  		<path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
		</svg>`
	}
]
function handleClick(item) {
	goto(item.link)
	selectedItem = item
}
</script>

<div
	class="minimum-width-rem fixed inset-x-0 bottom-0 z-40 h-14 w-full grid grid-cols-5 items-center justify-items-center border-t bg-white"
	style="box-shadow: 0px -4px 10px rgba(50, 50, 50, 0.2);">
	{#each footerItems as item}
		<button
			type="button"
			class="flex flex-col items-center justify-center focus:outline-none overflow-hidden col-span-1
            {selectedItem.link === item.link ? 'text-primary-500' : 'text-gray-500'}"
			on:click="{() => handleClick(item)}">
			<div>
				{#if selectedItem.link === item.link}
					{@html item.activeIcon}
				{:else}
					{@html item.icon}
				{/if}
			</div>

			<span class="text-rem font-semibold tracking-wide">
				{item.name}
			</span>
		</button>
	{/each}
</div>
