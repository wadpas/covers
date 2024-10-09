<template>
	<h3 class="p-3">Add Category</h3>
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
			<button
				type="button"
				class="btn btn-primary"
				@click="addCategory">
				Submit
			</button>
		</form>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import axiosInstance from '@/api/axios'
	import swal from 'sweetalert'

	const formData = {
		name: '',
		description: '',
		imageUrl: '',
	}

	function addCategory() {
		axiosInstance.post('/categories', formData).then(
			swal({
				text: 'Category added!',
				icon: 'success',
			})
		)
	}
</script>

<style lang="scss" scoped></style>
