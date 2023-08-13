<template>
	<div v-for="block in story.body" :key="block._uid">
        <Alert v-if="block.component === 'Alert'" :blok="block" />
		<Card v-if="block.component === 'card'" :blok="block" />
		<Teaser v-if="block.component === 'teaser'" :blok="block" />
		<Grid v-if="block.component === 'grid'" :blok="block" />
	</div>
</template>

<script>
  export default {
      data: function(){
          return{
              story:''
          }
      },
      created: function() {
        fetch('https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=rvM9sWasvqmGge24WblntAtt&cv=1691954929')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }
</script>

<!-- <template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nesciunt enim obcaecati, necessitatibus facilis est quibusdam modi! Exercitationem, quaerat cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti labore obcaecati soluta necessitatibus vitae, commodi omnis sit! Sit, repudiandae beatae?</p>
    </div>
</template>

<script setup>

</script> -->

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>