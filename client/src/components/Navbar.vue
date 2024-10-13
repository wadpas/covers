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
					<li class="nav-item">
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
				<router-link :to="{ name: 'auth-login' }">
					<button
						class="btn btn-outline-secondary"
						type="submit">
						Login
					</button>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script setup></script>
