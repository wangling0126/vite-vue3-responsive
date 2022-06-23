import { defineStore } from 'pinia'
import { getCategory } from '@/api/calatory'
import { ICategory, ICategoryItem } from '@/store/interface'
export const useCategoryStore = defineStore('category', {
	state: (): ICategory => {
		return {
			// navigationBar 展示的数据源
			categorys: [],
			currentCategory: {}
		}
	},
	getters: {
		currentCategoryIndex: state => {
			const index = state.categorys.findIndex(item => item.name === state.currentCategory.name)
			return index > -1 ? index : 0
		},
		currentCategoryName: state => state.currentCategory.name || '美女'
	},
	actions: {
		/**
		 * 获取 category 数据，并自动保存到 vuex 中
		 */
		async useCategoryData() {
			const res = await getCategory()
			const data: ICategoryItem[] = res.calagoryList || []
			// const all: ICategoryItem = {
			// 	name: '森林'
			// }
			this.categorys = [...data]
		},
		useCurrentCategory(item: ICategoryItem) {
			this.currentCategory = item
		}
	}
})
