<template>
	User
	<div>{{ categoryId }}</div>
	<div>{{ products }}</div>
</template>

<script setup>
	import { toRefs, defineProps } from 'vue'
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useProductsStore } from '@/stores/productsStore'

	const productsStore = useProductsStore()
	const { products } = storeToRefs(productsStore)
	const { categoryId } = defineProps(['categoryId'])

	onMounted(async () => {
		await productsStore.getProducts()
	})
</script>
