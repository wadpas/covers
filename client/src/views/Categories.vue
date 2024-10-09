<template>
	<h2 class="mx-3">Categories</h2>
	<div class="roe"></div>
	<router-link :to="{ name: 'addCategory' }">
		<button class="btn btn-light my-3">Add Category</button>
	</router-link>
	<div class="row">
		<div
			class="d-flex col-xl-3 col-md-6"
			v-for="category of categories"
			:key="category._id">
			<Category :category="category" />
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import Category from '@/components/Category.vue'
	const props = defineProps(['categories'])
</script>

<style lang="scss" scoped></style>
