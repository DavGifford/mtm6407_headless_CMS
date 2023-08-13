<template>
    <h2>Grid component</h2>
    <div v-if="blok" class="card">
        <h2 class="text-sky-400">{{ blok.headline }}</h2>
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