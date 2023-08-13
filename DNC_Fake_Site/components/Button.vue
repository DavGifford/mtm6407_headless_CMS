<template>
    <div class="flex justify-center my-10">
        <button v-if="blok" class="flex justify-center p-6 mb-2 bg-blue-500 rounded-full hover:bg-blue-700">
            <p class="max-w-sm text-white">{{ blok.label }}</p>
        </button>
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