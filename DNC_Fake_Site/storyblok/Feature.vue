<template>
    <div
      v-editable="blok"
      class="w-full p-12 bg-[#f7f6fd] rounded-xl"
    >
    <div class="flex justify-center"><img class="rounded-full" v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" /></div>
      <h3 class="text-2xl text-[#1d243d] font-bold my-2">
        {{ blok.name }}
      </h3>
      <p>{{ blok.content }}</p>
     
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
  </script>