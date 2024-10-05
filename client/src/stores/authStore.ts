import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import type { User } from '@/types/index'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		user: {} as User,
	}),

	actions: {
		async registerUser(form: Record<string, string>) {
			return new Promise<User>(async (resolve, reject) => {
				try {
					const { data } = await axiosInstance.post('/auth/register', { ...form })
					console.log(data)
					this.user = data.user
					localStorage.setItem('token', JSON.stringify(data.token))
					localStorage.setItem('user', JSON.stringify(data.user))
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
					const { data } = await axiosInstance.post('/auth/login', { ...form })
					console.log(data)
					this.user = data.user
					localStorage.setItem('token', JSON.stringify(data.token))
					localStorage.setItem('user', JSON.stringify(data.user))
					resolve(data.user)
				} catch (error) {
					console.log(error)
					reject(error)
				}
			})
		},
	},
})
