<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<!-- <template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nesciunt enim obcaecati, necessitatibus facilis est quibusdam modi! Exercitationem, quaerat cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti labore obcaecati soluta necessitatibus vitae, commodi omnis sit! Sit, repudiandae beatae?</p>
    </div>
</template>

<script setup>
 
</script>


<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style> -->