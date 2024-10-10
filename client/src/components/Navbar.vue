<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<router-link
				class="navbar-brand"
				:to="{ name: 'home' }">
				<img
					src="../assets/logo.svg"
					height="20px"
					alt="" />
			</router-link>
			<div
				class="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'home' }">
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'products' }">
							Products
						</router-link>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'admin' }">
							Admin
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
