export const prerender = false;

import { DOMAIN, HTTP_ENDPOINT } from '$lib/config';
import { gett } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ url, request, locals, cookies }) {
	try {
		const isDesktop = request.headers.get('sec-ch-ua-mobile') === '?0';
		const listOfPagesWithoutBackButton = [
			'/',
			'/categories',
			'/new-arrivals',
			'/my/wishlist',
			'/my',
			'/payment/success'
		];
		const isShowBackButton = !listOfPagesWithoutBackButton.includes(url?.pathname);
		const currentPage = +url.searchParams.get('page') || 1;
		const q = url.searchParams.get('q') || '';
		const d1 = new Date();
		locals.url = url.href;
		locals.currentPage = currentPage;
		locals.q = q;
		locals.isDesktop = isDesktop;
		locals.isShowBackButton = isShowBackButton;
		return locals;
	} catch (e) {
		throw error(
			404,
			`Store Not Found @Layout 
			<br/>ID: ${locals.store.id}
			<br/>ORIGIN: ${locals.origin}
			<br/>DOMAIN(env): ${DOMAIN}
			<br/>HTTP_ENDPOINT(env): ${HTTP_ENDPOINT}`
		);
	}
}
