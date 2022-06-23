import { defineStore } from 'pinia'
import { IPexelsState } from '@/store/interface'
import { getPexelsList, IPexelsParamsInfo } from '@/api/pexels'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const usePexelsStore = defineStore('pexels', {
	state: (): IPexelsState => {
		return {
			pexelsList: [],
			pageInfo: {
				page: 1,
				per_page: 20,
				total: null
			}
		}
	},
	getters: {
		isFinished: state => state.pageInfo.total === state.pexelsList.length
	},
	actions: {
		/**
		 *  获取图片路径
		 */
		async changePexelsList(data: IPexelsParamsInfo) {
			const { photos, page, per_page, total_results: total } = await getPexelsList(data)
			if (page === 1) {
				this.pexelsList = photos || []
			} else {
				this.pexelsList.push(...photos)
			}

			this.pageInfo = {
				page: page,
				per_page: per_page,
				total: total
			}
		}
	}
	// persist: piniaPersistConfig('pexels')
})
