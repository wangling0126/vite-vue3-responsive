import http, { getApiPrev, IApiPrev } from '@/utils/request'

/**
 * 获取分类列表
 */
export interface IPexelsParamsInfo {
	query?: string
	page: number
	per_page: number
}
export const getPexelsList = (data: IPexelsParamsInfo) => {
	return http.request({
		url: getApiPrev(IApiPrev.pexels) + '/v1/search',
		params: data
	})
}
