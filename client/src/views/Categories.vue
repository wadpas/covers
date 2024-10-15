<template>
	<div class="row row-cols-4 g-3 my-2">
		<div
			v-for="category in categories"
			class="d-flex align-items-stretch">
			<div class="col card">
				<router-link
					:to="{
						name: 'products',
						params: { categoryId: category._id },
					}">
					<img
						:src="category.imageUrl"
						class="card-img-top"
						alt="..." />
				</router-link>
				<div class="card-body">
					<h5 class="card-title">{{ category.name }}</h5>
					<p class="card-text">
						{{ category.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useProductsStore } from '@/stores/productsStore'
	const productsStore = useProductsStore()

	const { categories } = storeToRefs(productsStore)

	onMounted(async () => {
		await productsStore.getCategories()
	})
</script>
