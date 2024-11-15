import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '../plugins/axios'

export const useMoviesStore = defineStore('ProductsStore', () => {
	const movies = ref([])

	async function getMovies(query: Object) {
		try {
			const { data } = await axios.get('/movies', {
				params: query,
			})
			movies.value = data.movies
		} catch (error) {
			throw error
		}
	}

	return {
		getMovies,
		movies,
	}
})
