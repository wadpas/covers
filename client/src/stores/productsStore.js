import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '../plugins/axios'

export const useProductsStore = defineStore('ProductsStore', () => {
	const categories = ref([])
	const products = ref([])

	async function getCategories() {
		try {
			const { data } = await axios.get('/categories')
			categories.value = data.categories
		} catch (error) {
			throw error
		}
	}

	async function getProducts() {
		try {
			const { data } = await axios.get('/products')
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
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
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
		products,
		getCategories,
		getProducts,
		createProduct,
	}
})
