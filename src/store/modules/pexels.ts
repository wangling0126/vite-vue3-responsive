import { defineStore } from 'pinia'
import { IPexelsState } from '@/store/interface'
import piniaPersistConfig from '@/utils/piniaPersistConfig'
import { getPexelsList, IPexelsParamsInfo } from '@/api/pexels'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const usePexelsStore = defineStore('pexels', {
	state: (): IPexelsState => {
		return {
			pexelsList: []
		}
	},
	actions: {
		/**
		 *  切换主题模式
		 */
		async changePexelsList(data: IPexelsParamsInfo) {
			if (this.pexelsList.length) {
				return
			}
			const res = await getPexelsList(data)
			console.log(res)
			this.pexelsList = res.photos || []
		}
	},
	persist: piniaPersistConfig('pexels')
})
