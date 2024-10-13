import { defineStore } from 'pinia'
import axios from '../plugins/axios'

export const useAuthStore = defineStore('AuthStore', {
	state: () => ({
		user: null,
	}),

	actions: {
		async registerUser(payload) {
			try {
				const { data } = await axios.post('/auth/register', payload)
				this.user = data.user
				localStorage.setItem('token', JSON.stringify(data.token))
			} catch (error) {
				throw error
			}
		},

		async loginUser(payload) {
			try {
				const { data } = await axios.post('/auth/login', payload)
				this.user = data.user
				localStorage.setItem('token', JSON.stringify(data.token))
			} catch (error) {
				throw error
			}
		},
	},
})
