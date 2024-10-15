import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000/api/v1/',
})

axiosInstance.interceptors.request.use(
	(config) => {
		const localToken = JSON.parse(localStorage.getItem('token'))

		if (!localToken || jwtDecode(localToken).exp * 1000 < Date.now()) {
			useAuthStore().logoutUser()
		} else {
			const { token } = storeToRefs(useAuthStore())
			token.value = localToken
			config.headers.authorization = `Bearer ${token.value}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default axiosInstance
