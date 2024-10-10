<template>
	<Navbar />
	<RouterView
		:categories="categories"
		:products="products" />
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { RouterLink, RouterView } from 'vue-router'
	import axiosInstance from '@/api/axios'
	import Navbar from './components/Navbar.vue'

	const categories = ref([])
	const products = ref([])

	async function getCategories() {
		const res = await axiosInstance.get('/categories')
		categories.value = res.data.categories
	}

	async function getProducts() {
		const res = await axiosInstance.get('/products')
		products.value = res.data.products
	}

	onMounted(() => {
		getCategories()
		getProducts()
	})
</script>
