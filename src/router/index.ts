import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Redirect to Home or 404 if no :name is found
  { path: '/pokemon', redirect: { name: 'Home' } },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: () => import('../views/Pokemon.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
