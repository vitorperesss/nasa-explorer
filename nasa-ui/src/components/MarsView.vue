<template>
    <div>
      <h2>Fotos de Marte</h2>
      <div v-if="photos.length === 0">Nenhuma foto encontrada.</div>
      <div v-else>
        <img v-for="photo in photos" :key="photo.id" :src="photo.img_src" :alt="photo.id" style="max-width: 100%; margin-bottom: 10px;" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const photos = ref([])
  
  onMounted(async () => {
    const res = await axios.get('http://localhost:3000/mars?sol=1000')
    photos.value = res.data.slice(0, 5) // só as 5 primeiras para não pesar
  })
  </script>
  