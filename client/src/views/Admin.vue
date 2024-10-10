<template>
	<div class="mt-2">
		<router-link :to="{ name: 'categories' }">
			<button
				type="button"
				class="btn btn-light m-3"
				@click="">
				Admin Categories
			</button>
		</router-link>
		<router-link :to="{ name: 'products' }">
			<button
				type="button"
				class="btn btn-light m-3"
				@click="">
				Admin Products
			</button>
		</router-link>
		<router-link :to="{ name: 'products' }">
			<button
				type="button"
				class="btn btn-light m-3"
				@click="">
				Admin Gallery
			</button>
		</router-link>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
