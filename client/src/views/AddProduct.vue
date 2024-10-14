<template>
	<div class="row justify-content-md-center">
		<form class="m-5 col-5">
			<h2 class="my-4 text-center">Add product</h2>
			<div class="mb-2">
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
			<div class="mb-2">
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
			<div class="mb-2">
				<label
					for="category"
					class="form-label">
					Category
				</label>
				<select
					v-model="formData.category"
					class="form-select"
					id="category">
					<option
						v-for="category in productStore.categories"
						value="category._id"
						:key="category._id">
						{{ category.name }}
					</option>
				</select>
			</div>
			<div class="mb-2">
				<label
					for="image"
					class="form-label">
					Image
				</label>
				<input
					type="file"
					class="form-control"
					@change="handleSelectedFiles($event)" />
			</div>
			<div class="mb-2">
				<label
					for="price"
					class="form-label">
					Price
				</label>
				<input
					v-model="formData.price"
					type="number"
					step=".01"
					class="form-control"
					id="price" />
			</div>
			<button
				@click="onCreateProduct"
				type="button"
				class="mt-2 btn btn-dark">
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { useProductsStore } from '@/stores/productsStore'
	const router = useRouter()
	const productStore = useProductsStore()

	function handleSelectedFiles(e) {
		this.formData.image = e.target.files[0]
		console.log(e.target.files[0])
	}

	const formData = {
		name: '',
		description: '',
		category: '',
		image: null,
		price: null,
	}

	async function onCreateProduct() {
		try {
			await productStore.createProduct(formData)
			// router.push('/')
		} catch (error) {
			console.log(error)
		}
	}
</script>

<style lang="scss" scoped></style>
