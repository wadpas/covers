<template>
	<div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">Register account</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form
				class="space-y-6"
				action="#"
				method="POST">
				<div>
					<label
						for="username"
						class="block text-sm font-medium leading-6 text-gray-900">
						Username
					</label>
					<div class="mt-2">
						<input
							v-model="formData.username"
							id="username"
							name="username"
							type="text"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900">
						Email address
					</label>
					<div class="mt-2">
						<input
							v-model="formData.email"
							id="email"
							name="email"
							type="email"
							required="true"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900">
							Password
						</label>
						<div class="text-sm">
							<a
								href="#"
								class="font-semibold text-sky-950 hover:text-sky-900">
								Forgot password?
							</a>
						</div>
					</div>
					<div class="mt-2">
						<input
							v-model="formData.password"
							id="password"
							name="password"
							type="password"
							required="true"
							class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-950 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<button
						type="button"
						@click="onSubmit"
						class="flex w-full justify-center rounded-md bg-sky-950 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950">
						Sign up
					</button>
				</div>
			</form>

			<p class="mt-10 text-sm text-center text-gray-500">
				Already have an account?
				{{ ' ' }}
				<router-link
					:to="{ name: 'auth-login' }"
					class="font-semibold leading-6 text-sky-950 hover:text-sky-900">
					Sign in
				</router-link>
			</p>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { useAuthStore } from '@/stores/authStore'
	const router = useRouter()
	const store = useAuthStore()

	const formData = {
		username: '',
		email: '',
		password: '',
	}

	async function onSubmit() {
		try {
			await store.registerUser(formData)
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}
</script>
