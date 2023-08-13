<template>
    <div v-if="blok" class="my-5 flex justify-center">
        <h2 class="text-3xl text-blue-500">{{ blok.headline }}</h2>
    </div>
</template>

<script>
    export default {
        props:['blok']
    }
</script>

<style>

</style>