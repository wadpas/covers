<template>
	<h3 class="mt-3 ms-3">{{ category.name }}</h3>
	<div class="row row-cols-4 g-4">
		<div
			v-for="product in products"
			class="d-flex align-items-stretch">
			<div class="col card p-3">
				<router-link :to="{}">
					<div style="height: 300px">
						<img
							:src="product.imageUrl"
							class="card-img-top object-fit-scale"
							style="height: 300px"
							alt="..." />
					</div>
				</router-link>
				<div class="card-body">
					<h5 class="card-title">{{ product.name }}</h5>
					<p class="card-text">
						{{ product.description.slice(0, 180) + '...' }}
					</p>
				</div>
				<div class="d-flex justify-content-between">
					<h4>${{ product.price }}</h4>
					<router-link
						:to="{}"
						class="btn btn-dark">
						Buy
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { toRefs, defineProps } from 'vue'
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useProductsStore } from '@/stores/productsStore'

	const productsStore = useProductsStore()
	const { products, category } = storeToRefs(productsStore)
	const { categoryId } = defineProps(['categoryId'])

	onMounted(async () => {
		products.value = []
		category.value = []
		await productsStore.getCategoryById(categoryId)
		await productsStore.getProducts({ categoryId })
	})
</script>
