<template>

  <div class="w-full h-full relative">
    <img
      class="drop-shadow-xl object-cover w-full h-full"
      v-if="blok.image"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />
  </div>

</template>

<script>
    export default {
        props:['blok']
    }
</script>