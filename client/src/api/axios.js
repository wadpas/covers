import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:3000/api/v1',
})

axiosInstance.interceptors.request.use((config) => {
	const token = JSON.parse(localStorage.getItem('token'))
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default axiosInstance
