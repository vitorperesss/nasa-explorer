<template>
  <div>
    <h2>Asteroides Próximos da Terra</h2>
    <ul style="list-style: none; padding: 0;">
      <li
        v-for="asteroid in asteroids"
        :key="asteroid.name"
        style="margin-bottom: 1rem; padding: 0.5rem; display: flex; align-items: center;"
      >
        <img src="/assets/meteoro.gif" alt="Meteoro" style="width: 40px; margin-right: 10px;" />
        <div>
          <strong>{{ asteroid.name }}</strong>
          <div><strong>Distância:</strong> {{ formatNumber(asteroid.distance_km) }} km</div>
          <div><strong>Velocidade:</strong> {{ formatNumber(asteroid.velocity_kmh) }} km/h</div>
          <div><strong>Diâmetro:</strong> {{ formatNumber(asteroid.diameter_m) }} m</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const asteroids = ref([])

const formatNumber = (value) => {
  return new Intl.NumberFormat('pt-BR').format(value)
}

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/asteroids')
  asteroids.value = res.data
})
</script>
