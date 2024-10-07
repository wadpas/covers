<script setup lang="ts">
	import { Button } from '@/components/ui/button'
	import useProductModal from '@/composable/useProductModal'
	import ProductModal from '@/components/ProductModal.vue'
	const { isOpen, onOpen } = useProductModal()
</script>

<template>
	<ProductModal v-if="isOpen" />
	<div class="w-full max-w-4xl mx-auto my-10">
		<div class="flex items-center justify-between">
			<h3 class="text-2xl font-bold">All Products</h3>
			<Button @click="onOpen">Add Product</Button>
		</div>
	</div>
</template>
