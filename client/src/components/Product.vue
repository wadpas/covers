<template>
	<div
		class="card my-3 d-flex align-items-end flex-column"
		style="width: 22rem">
		<img
			:src="product.imageUrl"
			class="card-img-top p-5" />
		<div class="card-body">
			<h5 class="card-title">{{ product.name }}</h5>
			<p class="card-text">{{ product.description.substring(0, 200) }}...</p>
		</div>
		<h3 class="position-absolute bottom-0 start-0 mx-3">${{ product.price }}</h3>
		<button
			href="#"
			class="btn btn-dark px-4 m-2">
			Buy
		</button>
	</div>
</template>

<script setup>
	const props = defineProps(['product'])
</script>

<style lang="scss" scoped>
	.img {
		object-fit: cover;
	}
</style>
