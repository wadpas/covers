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
			} catch (error) {}
		},
	},
})
