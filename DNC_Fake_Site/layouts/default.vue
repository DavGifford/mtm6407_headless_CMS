<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-between">
				<NuxtLink to="/" class="font-bold">DNC Development</NuxtLink>
				<ul class="flex gap-4">
					<li><NuxtLink to="/">home</NuxtLink></li>
					<li><NuxtLink to="/services">services</NuxtLink></li>
				</ul>
			</nav>
		</header>
		<!-- output the page contents -->
		<div v-for="block in story.body" :key="block._uid">
			<Banner v-if="block.component === 'banner'" :blok="block" />
		</div>
		<div class="container mx-auto p-4">
			<slot />
		</div>
        <footer class="shadow-sm bg-white">
            <div class="flex justify-center py-6">
                <h3 class="text-blue-500">&copy;2023 DNC Development</h3>
            </div>
        </footer>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				story: '',
			};
		},
		created: function () {
			fetch(
				'https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=rvM9sWasvqmGge24WblntAtt&cv=1691957663',
			)
				.then((resp) => resp.json())
				.then((data) => (this.story = data.story.content));
		},
	};
</script>

<style scoped>
	.router-link-exact-active {
		color: #0047ab;
	}
</style>
