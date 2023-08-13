<template>
      <div>
          <h2>Our Services Page</h2>
            <div v-for="block in story.body" :key="block._uid">
                <Alert v-if="block.component === 'Alert'" :blok="block" />
                <Card v-if="block.component === 'card'" :blok="block" />
                <Teaser v-if="block.component === 'teaser'" :blok="block" />
                <Grid v-if="block.component === 'grid'" :blok="block" />
	        </div>
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
  </style>