<template>
	<footer class="bg-white border rounded-lg shadow dark:bg-gray-800">
		<div class="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2023
				<a
					href="https://flowbite.com/"
					class="hover:underline">
					Flowbite™
				</a>
				. All Rights Reserved.
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
				<li>
					<a
						href="#"
						class="hover:underline me-4 md:me-6">
						About
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:underline me-4 md:me-6">
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:underline me-4 md:me-6">
						Licensing
					</a>
				</li>
				<li>
					<a
						href="#"
						class="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import { useRouter } from 'vue-router'
	import { useAuthStore } from '@/stores/auth'
	const authStore = useAuthStore()
	const router = useRouter()

	const { isAuth } = storeToRefs(authStore)

	async function handleAuth() {
		if (isAuth.value) {
			await authStore.logoutUser()
			router.push({ name: 'home' })
		}
		router.push({ name: 'auth-login' })
	}
</script>
