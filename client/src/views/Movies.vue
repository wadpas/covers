<template>
	<div v-for="movie in movies">{{ movie.title }} - {{ Object.keys(movie).length }}</div>
	{{ movies }}
</template>

<script setup>
	import { toRefs, defineProps } from 'vue'
	import { onMounted } from 'vue'
	import { storeToRefs } from 'pinia'
	import { useMoviesStore } from '@/stores/movies'

	const moviesStore = useMoviesStore()
	const { movies } = storeToRefs(moviesStore)

	onMounted(async () => {
		await moviesStore.getMovies()
	})
</script>
