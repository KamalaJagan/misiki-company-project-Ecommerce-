<style>
.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex: 1;
	display: flex;
	flex-direction: column;
	/* padding: rem; */
	/* width: 100%; */
	/* max-width: 64rem; */
	margin: 0 auto;
	box-sizing: border-box;
}

footer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 12px;
}

footer a {
	font-weight: bold;
}

@media (min-width: 480px) {
	footer {
		padding: 12px 0;
	}
}
</style>

<script>
import '../app.css'
import { page } from '$app/stores'
import Footer from '$lib/images/Allpages/footer.svelte'

import Nav from '$lib/images/Allpages/nav.svelte'
import MegaMenu from '$lib/components/MegaMenu.svelte'
import Brand from '$lib/images/Allpages/brand.svelte'
import AsSeen from '$lib/images/Allpages/asSeen.svelte'
import LandingPage from '$lib/images/Allpages/landingPage.svelte'
import Discover from '$lib/images/Allpages/discover.svelte'
import ThePerfect from '$lib/images/Allpages/thePerfect.svelte'
import FromBlog from '$lib/images/Allpages/fromBlog.svelte'
import OurBest from '$lib/images/Allpages/ourBest.svelte'
import Footerup from '$lib/images/Allpages/footerup.svelte'
import Img from '$lib/images/Allpages/img.svelte'
import BlogPage from '$lib/images/BlogPage.svelte'
</script>

<div class="app">
	<Nav />

	<main>
		<!-- <MegaMenu /> -->

		<LandingPage />
		<Img />
		<Discover />
		<AsSeen />
		<Brand />
		<ThePerfect />
		<FromBlog />
		<OurBest />
		<Footerup />
	
	</main>

	<Footer />
</div>
