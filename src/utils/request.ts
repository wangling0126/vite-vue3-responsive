import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class Request {
	// axios 实例
	instance: AxiosInstance

	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config)
		this.instance.interceptors.response.use(
			// 因为我们接口的数据都在res.data下，所以我们直接返回res.data
			(res: AxiosResponse) => {
				const { data } = res.data
				return data
			},
			(err: any) => err
		)
	}
	request(config: AxiosRequestConfig): any {
		return this.instance.request(config)
	}
}
const config = {
	baseURL: import.meta.env.VITE_BASE_API,
	timeout: 5000
}
export default new Request(config)
