import axios from 'axios'
const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 5000
})
console.log(import.meta.env.VITE_BASE_API)

export default service
