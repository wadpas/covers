import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000/api/v1/',
})

export default axiosInstance

axiosInstance.interceptors.request.use(
	(config) => {
		const token = JSON.parse(localStorage.getItem('token'))
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
