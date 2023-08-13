<template>
    <div v-if="blok" class="my-6 flex justify-center">
        <h2 class="text-4xl text-blue-500">{{ blok.headline }}</h2>
    </div>
</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>

</style>