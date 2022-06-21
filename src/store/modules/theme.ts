import { defineStore } from 'pinia'
import { THEME_LIGHT } from '@/constants'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useThemeStore = defineStore('theme', {
	state: () => {
		return {
			themeType: THEME_LIGHT
		}
	},
	actions: {
		/**
		 *  切换主题模式
		 */
		changeThemeType(themeType: string) {
			this.themeType = themeType
		}
	}
})
