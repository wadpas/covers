<template>
	<Navbar />
	<RouterView />
</template>

<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import { onMounted } from 'vue'
	import { useProductsStore } from '@/stores/productsStore'
	import { useAuthStore } from '@/stores/authStore'
	import Navbar from './components/Navbar.vue'

	const authStore = useAuthStore()
	const productsStore = useProductsStore()

	onMounted(async () => {
		await productsStore.getCategories()
	})
</script>
