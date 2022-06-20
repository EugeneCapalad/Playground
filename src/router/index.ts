import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      headerColor: 'primaryTeal',
      title: 'Playground'
    }
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ToDo.vue'),
    meta: {
      headerColor: 'toDoPrimary',
      title: 'To Do'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
