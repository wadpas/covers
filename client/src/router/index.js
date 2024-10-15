import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Auth/Login.vue'
import Register from '@/views/Auth/Register.vue'
import AddProduct from '@/views/AddProduct.vue'
import Categories from '@/views/Categories.vue'
import Products from '../views/Products.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Categories,
		},

		{
			path: '/products/add',
			name: 'add-product',
			component: AddProduct,
		},
		{
			path: '/auth/login',
			name: 'auth-login',
			component: Login,
		},
		{
			path: '/auth/register',
			name: 'auth-register',
			component: Register,
		},
		{
			path: '/:categoryId',
			name: 'products',
			component: Products,
			props: true,
		},
	],
})

export default router
