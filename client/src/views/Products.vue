<template>
	<router-link :to="{ name: 'addProduct' }">
		<button class="btn btn-light mt-4 mx-3 px-3">Add Product</button>
	</router-link>
	<div class="row m-1">
		<div
			class="d-flex col-xl-3 col-md-5"
			v-for="product in products"
			:key="product._id">
			<Product :product="product" />
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import Product from '@/components/Product.vue'
	const props = defineProps(['products'])
</script>
