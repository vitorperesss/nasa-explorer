<script setup>
import { ref, onMounted } from 'vue'
const apod = ref(null)

onMounted(async () => {
  const res = await fetch('http://localhost:3000/apod')
  apod.value = await res.json()
})
</script>

<template>
  <div v-if="apod">
    <h1>{{ apod.title }}</h1>
    <img :src="apod.url" :alt="apod.title" v-if="apod.media_type === 'image'" />
    <p>{{ apod.explanation }}</p>
  </div>
</template>
