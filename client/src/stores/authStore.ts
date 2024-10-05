import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import type { APIResponse, User } from '@/types/index'

export const useAuthStore = defineStore('auth', {
	state: () => ({}),

	actions: {
		async registerUser(form: Record<string, string>) {
			return new Promise<User>(async (resolve, reject) => {
				try {
					const { data } = await axiosInstance.post<APIResponse>('/auth/register', { ...form })
					console.log(data)
					resolve(data.user)
				} catch (error) {
					console.log(error)
					reject(error)
				}
			})
		},

		async loginUser(form: Record<string, string>) {
			return new Promise<User>(async (resolve, reject) => {
				try {
					const { data } = await axiosInstance.post<APIResponse>('/auth/login', { ...form })
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
