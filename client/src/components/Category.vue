<template>
	<div
		class="card my-3"
		style="width: 18rem">
		<img
			:src="category.imageUrl"
			class="card-img-top" />
		<div class="card-body">
			<h5 class="card-title">{{ category.name }}</h5>
			<p class="card-text">
				{{ category.description }}
			</p>
			<a
				href="#"
				class="btn btn-light">
				Go somewhere
			</a>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(['category'])
</script>

<style lang="scss" scoped></style>
q
