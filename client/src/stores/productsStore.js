import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '../plugins/axios'

export const useProductsStore = defineStore('ProductsStore', () => {
	const categories = ref([])
	const category = ref('')
	const products = ref([])

	async function getCategories() {
		try {
			const { data } = await axios.get('/categories')
			categories.value = data.categories
			console.log(data.categories)
		} catch (error) {
			throw error
		}
	}

	async function getCategoryById(id) {
		try {
			const { data } = await axios.get(`/categories/${id}`)
			category.value = data.category
		} catch (error) {
			throw error
		}
	}

	async function getProducts(query) {
		console.log(query)

		try {
			const { data } = await axios.get('/products', {
				params: query,
			})
			products.value = data.products
			console.log(data.products)
		} catch (error) {
			throw error
		}
	}

	async function createProduct(payload) {
		try {
			const { data } = await axios.post(
				'/products/uploads',
				{ image: payload.image },
				{ headers: { 'Content-Type': 'multipart/form-data' } }
			)
			payload.image = undefined
			payload.imageUrl = data.imageUrl
			await axios.post('/products', payload)
		} catch (error) {
			throw error
		}
	}

	return {
		categories,
		category,
		products,
		getCategories,
		getCategoryById,
		getProducts,
		createProduct,
	}
})
