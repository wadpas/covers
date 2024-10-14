<template>
	<Navbar />
	<RouterView />
</template>

<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import { onMounted } from 'vue'
	import { useProductsStore } from '@/stores/productsStore'
	import Navbar from './components/Navbar.vue'

	const store = useProductsStore()

	onMounted(async () => {
		await store.getCategories()
	})
</script>
