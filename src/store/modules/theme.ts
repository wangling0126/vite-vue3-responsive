import { defineStore } from 'pinia'
import { IThemeState, IThemeType } from '@/store/interface'
import piniaPersistConfig from '@/utils/piniaPersistConfig'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useThemeStore = defineStore('theme', {
	state: (): IThemeState => {
		return {
			themeType: 'light'
		}
	},
	actions: {
		/**
		 *  切换主题模式
		 */
		changeThemeType(themeType: IThemeType) {
			this.themeType = themeType
		}
	},
	persist: piniaPersistConfig('theme')
})
