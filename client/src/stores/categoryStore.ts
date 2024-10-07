import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import type { APIResponse, Category } from '@/types/index'

export const useCategoryStore = defineStore('auth', {
	state: () => ({
		categoriesData: {},
	}),

	actions: {
		async createCategory(form: Record<string, string>) {
			return new Promise<Category>(async (resolve, reject) => {
				try {
					const { data } = await axiosInstance.post('/categories', { ...form })
					console.log(data)
					resolve(data.user)
				} catch (error) {
					console.log(error)
					reject(error)
				}
			})
		},

		async getCategories(page: number, limit: number) {
			return new Promise(async (resolve, reject) => {
				try {
					const { data } = await axiosInstance.get(`/categories?page=${page}&limit=${limit}`)
					this.categoriesData = data.categories
					console.log(data.categories)
					resolve(data.user)
				} catch (error) {
					console.log(error)
					reject(error)
				}
			})
		},
	},
})
