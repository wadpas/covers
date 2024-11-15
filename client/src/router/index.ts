import { createRouter, createWebHistory } from 'vue-router'
import Movies from '../views/Movies.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Movies,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
		},
	],
})

export default router
