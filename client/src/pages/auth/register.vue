<template>
	<div class="row justify-content-md-center">
		<form class="m-5 col-4">
			<h2 class="my-4 text-center">Create account</h2>
			<div class="mb-3">
				<label
					for="username"
					class="form-label">
					Username
				</label>
				<input
					v-model="formData.username"
					type="text"
					class="form-control"
					id="username" />
			</div>
			<div class="mb-3">
				<label
					for="email"
					class="form-label">
					Email address
				</label>
				<input
					v-model="formData.email"
					type="email"
					class="form-control"
					id="email" />
			</div>
			<div class="mb-3">
				<label
					for="password"
					class="form-label">
					Password
				</label>
				<input
					v-model="formData.password"
					type="password"
					class="form-control"
					id="password" />
			</div>
			<div class="mb-3 form-check">
				<input
					type="checkbox"
					class="form-check-input"
					id="checkbox" />
				<label
					class="form-check-label"
					for="checkbox">
					Check me out
				</label>
			</div>
			<button
				type="submit"
				class="btn btn-dark"
				@click="onRegister">
				Submit
			</button>
			<p class="my-3 text-center">
				Already have account?
				<router-link
					:to="{ name: '/' }"
					class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
					Login now
				</router-link>
			</p>
		</form>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { useAuthStore } from '@/stores/auth'
	const router = useRouter()
	const authStore = useAuthStore()

	const formData = {
		username: '',
		email: '',
		password: '',
	}

	async function onRegister() {
		try {
			await store.registerUser(formData)
			router.push({ name: 'home' })
		} catch (error) {
			console.log(error)
		}
	}
</script>
