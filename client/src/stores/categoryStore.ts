import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import type { APIResponse, Category } from '@/types/index'

export const useCategoryStore = defineStore('auth', {
	state: () => ({}),

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
	},
})
