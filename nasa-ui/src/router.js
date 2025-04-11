import { createRouter, createWebHistory } from 'vue-router'
import ApodView from './components/ApodView.vue'
import MarsView from './components/MarsView.vue'
import AsteroidsView from './components/AsteroidsView.vue'

const routes = [
  { path: '/', redirect: '/apod' },
  { path: '/apod', component: ApodView },
  { path: '/mars', component: MarsView },
  { path: '/asteroids', component: AsteroidsView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
