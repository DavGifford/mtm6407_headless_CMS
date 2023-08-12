// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  modules: ['@nuxtjs/tailwindcss', ['@storyblok/nuxt', { accessToken: 'Gv9mQf6nhTeMQumc4iy8JQtt' }]],
})
