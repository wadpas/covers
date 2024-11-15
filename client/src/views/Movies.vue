<template>
	<div v-for="movie in movies">{{ movie }} - {{ Object.keys(movie).length }}</div>
</template>

<script setup lang="ts">
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useMoviesStore } from '@/stores/movies'

	const moviesStore = useMoviesStore()
	const { movies } = storeToRefs(moviesStore)

	onMounted(async () => {
		await moviesStore.getMovies({})
	})
</script>
