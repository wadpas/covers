import { defineStore } from 'pinia'
import axios from '../plugins/axios'

export const useProductsStore = defineStore('ProductsStore', {
	state: () => ({
		categories: null,
	}),

	actions: {
		async getCategories() {
			try {
				const { data } = await axios.get('/categories')
				this.categories = data.categories
				console.log(this.categories)
			} catch (error) {
				throw error
			}
		},
		async createProduct(payload) {
			try {
				const { data } = await axios.post('/products', payload)
				console.log(data)
			} catch (error) {
				throw error
			}
		},
	},
})
