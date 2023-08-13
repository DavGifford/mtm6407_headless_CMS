<template>
    <div v-if="blok" class="flex justify-center p-6 mb-2 bg-blue-500 rounded-xl">
        <h2 class="text-white">{{ blok.message }}</h2>
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