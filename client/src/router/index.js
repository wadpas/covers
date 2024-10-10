import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '@/views/AddCategory.vue'
import AddProduct from '@/views/AddProduct.vue'
import Categories from '@/views/Categories.vue'
import Products from '@/views/Products.vue'
import Admin from '@/views/Admin.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Categories,
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
		},
		{
			path: '/categories',
			name: 'categories',
			component: Categories,
		},
		{
			path: '/products',
			name: 'products',
			component: Products,
		},
		{
			path: '/admin/category/add',
			name: 'addCategory',
			component: AddCategory,
		},
		{
			path: '/admin/product/add',
			name: 'addProduct',
			component: AddProduct,
		},
	],
})

export default router
