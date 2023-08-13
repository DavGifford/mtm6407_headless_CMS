<template>
    <div class="flex justify-center">
        <div v-if="blok" class="flex justify-center p-6 mb-2 bg-blue-500 rounded-xl hover:bg-blue-700">
            <button class="max-w-sm text-white">{{ blok.label }}</button>
        </div>
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