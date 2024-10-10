<template>
	<router-link :to="{ name: 'addCategory' }">
		<button class="btn btn-light mt-4 mx-3 px-3">Add Category</button>
	</router-link>
	<div class="row m-1">
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
