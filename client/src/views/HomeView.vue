<template>
	<div>Home</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { useProductsStore } from '@/stores/productsStore'

	const store = useProductsStore()

	onMounted(async () => {
		await store.getCategories()
	})
</script>
