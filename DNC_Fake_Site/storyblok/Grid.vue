<template>

  <div
    v-editable="blok"
    class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
  >
    <div
      v-for="blok in blok.columns"
      :key="blok._uid"
      class="w-full"
    >
      <StoryblokComponent :blok="blok" />
    </div>
  </div>

  <!-- <div
    v-editable="blok"
    class="container mx-auto grid gap-12 my-12 place-items-center"
  >
    <div
      v-for="blok in blok.columns"
      :key="blok._uid"
      class="w-full md:w-full lg:w-1/2"
    >
      <StoryblokComponent :blok="blok" />
    </div>
  </div> -->
</template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>