import { useThemeStore } from '@/store/modules/theme'
import { watch } from 'vue'
import { IThemeType } from '@/store/interface'

/**
 * 监听系统主题变更
 */
let matchMedia: MediaQueryList | null = null
const watchSystemThemeChange = () => {
	// 仅需初始化一次即可
	if (matchMedia) return
	matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
	// 监听主题变更
	matchMedia.onchange = function () {
		changeTheme('system')
	}
}

/**
 * 变更主题
 * @param {*} theme 主题的标记常量
 */
const changeTheme = (theme: IThemeType) => {
	// html 的 class
	let themeClassName: IThemeType = 'light'
	switch (theme) {
		case 'light':
			themeClassName = 'light'
			break
		case 'dark':
			themeClassName = 'dark'
			break
		case 'system':
			watchSystemThemeChange()
			themeClassName = (matchMedia as MediaQueryList).matches ? 'dark' : 'light'
			break
	}
	// 修改 html 的 class
	;(document.querySelector('html') as HTMLHtmlElement).className = themeClassName
}

/**
 * 初始化主题
 */
export default () => {
	const themeStore = useThemeStore()
	watch(
		() => themeStore.themeType,
		theme => {
			changeTheme(theme)
		},
		{
			// 初始执行一次
			immediate: true
		}
	)
}
