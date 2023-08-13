<template>
	<div v-for="block in story.body" :key="block._uid">
		<Teaser v-if="block.component === 'teaser'" :blok="block" />
		<Grid v-if="block.component === 'grid'" :blok="block" />
		<Button v-if="block.component === 'button'" :blok="block" />
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
        fetch('https://api-us.storyblok.com/v2/cdn/stories/services?version=draft&token=rvM9sWasvqmGge24WblntAtt&cv=1691959446')
          .then(resp => resp.json())
          .then(data => this.story = data.story.content)
      }
  }
</script>