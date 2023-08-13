<template>
    <img class="drop-shadow-xl" v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" />
</template>

<script>
    export default {
        props:['blok']
    }
</script>