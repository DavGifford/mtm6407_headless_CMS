<template>
    <div v-if="blok" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ blok.title }}</h2>
        <p class="font-normal text-gray-700 dark:text-gray-400">{{ blok.description }}</p>
    </div>
</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>
    .card{
        margin-left: 2rem;
    }
</style>