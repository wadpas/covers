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
			} catch (error) {
				throw error
			}
		},

		async createProduct(payload) {
			try {
				// const { data } = await axios.post('/products', payload)

				const { data } = await axios.post(
					'/products/uploads',
					{ image: payload.image },
					{
						headers: {
							'Content-Type': 'multipart/form-data',
						},
					}
				)
				console.log(data)
			} catch (error) {
				throw error
			}
		},
	},
})
