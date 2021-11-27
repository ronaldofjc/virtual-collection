import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
  },  
  {
    path: '/comics',
    name: 'Quadrinhos',
    component: () => import('../views/Comic.vue')
  },
	{
    path: '/mangas',
    name: 'Mangás',
    component: () => import('../views/Manga.vue')
  },
	{
    path: '/books',
    name: 'Livros',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/about',
    name: 'Sobre',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
