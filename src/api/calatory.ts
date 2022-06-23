import http, { getApiPrev, IApiPrev } from '@/utils/request'
/**
 * 获取分类列表
 */
export const getCategory = () => {
	return http.request({
		url: getApiPrev(IApiPrev.reponsive) + '/category'
	})
}
