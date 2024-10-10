<template>
	<h5 class="p-3">Add Product</h5>
	<div class="p-3 w-50 text-primary-emphasis border border-light rounded-3">
		<form>
			<div class="mb-3">
				<label
					for="name"
					class="form-label">
					Name
				</label>
				<input
					v-model="formData.name"
					type="text"
					class="form-control"
					id="name" />
			</div>
			<div class="mb-3">
				<label
					for="category"
					class="form-label">
					Category
				</label>
				<select
					class="form-select"
					v-model="formData.category">
					<option
						v-for="category in categories"
						:key="category._id">
						{{ category.name }}
					</option>
				</select>
			</div>
			<div class="mb-3">
				<label
					for="description"
					class="form-label">
					Description
				</label>
				<textarea
					v-model="formData.description"
					type="text"
					class="form-control"
					id="description" />
			</div>
			<div class="mb-3">
				<label
					for="image"
					class="form-label">
					Image
				</label>
				<input
					v-model="formData.imageUrl"
					type="text"
					class="form-control"
					id="image" />
			</div>
			<div class="mb-3">
				<label
					for="price"
					class="form-label">
					Price
				</label>
				<input
					v-model="formData.price"
					type="number"
					class="form-control"
					id="price" />
			</div>
			<button
				type="button"
				class="btn btn-dark"
				@click="addProduct">
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import axiosInstance from '@/api/axios'
	import Swal from 'sweetalert2'

	const props = defineProps(['categories'])

	const formData = {
		name: '',
		description: '',
		imageUrl: '',
		category: '',
		price: null,
	}

	function addProduct() {
		axiosInstance
			.post('/products', formData)
			.then(
				Swal.fire({
					icon: 'success',
					title: 'Well done',
					text: 'Product is added!',
					footer: '<a href="#">Why do I have this issue?</a>',
				})
			)
			.catch((e) => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
					footer: '<a href="#">Why do I have this issue?</a>',
				})
			})
	}
</script>

<style lang="scss" scoped></style>
