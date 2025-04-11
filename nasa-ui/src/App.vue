<template>
  <div class="app">
    <h1>🚀 NASA Explorer</h1>
    <nav>
      <router-link to="/apod">Imagem do Dia</router-link> |
      <router-link to="/mars">Fotos de Marte</router-link> |
      <router-link to="/asteroids">Asteroides</router-link>
    </nav>
    <router-view />
  </div>
</template>

