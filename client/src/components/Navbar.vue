<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<router-link
				class="navbar-brand"
				:to="{ name: 'home' }">
				<img
					src="../assets/logo.svg"
					style="height: 20px"
					alt="" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul class="mb-2 navbar-nav me-auto mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link active"
							aria-current="page"
							:to="{ name: 'home' }">
							Home
						</router-link>
					</li>
					<li
						v-if="isAuth.value"
						class="nav-item">
						<router-link
							class="nav-link active"
							aria-current="page"
							:to="{ name: 'add-product' }">
							Add product
						</router-link>
					</li>
				</ul>
				<form
					class="d-flex"
					role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search" />
				</form>
				<button
					class="btn btn-outline-secondary"
					type="button"
					@click="handleAuth">
					{{ isAuth.value ? 'Logout' : 'Login' }}
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup>
	import { storeToRefs } from 'pinia'
	import { useRouter } from 'vue-router'
	import { useAuthStore } from '@/stores/authStore'
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
