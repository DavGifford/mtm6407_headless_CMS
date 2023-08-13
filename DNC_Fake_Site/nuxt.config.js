// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true }
	modules: [
		'@nuxtjs/tailwindcss',
		['@storyblok/nuxt', { accessToken: 'rvM9sWasvqmGge24WblntAtt' }],
	],
	target: 'static',
	router: {
	  base: '/mtm6407_headless_CMS/'
	}
});
