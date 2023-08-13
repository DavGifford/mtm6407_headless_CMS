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
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #0047ab;
}
</style>