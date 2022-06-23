/* category数据 */
export interface ICategoryItem {
	id?: string
	name?: string
	col?: number
	urlname?: string
}
export interface ICategory {
	categorys: ICategoryItem[]
	currentCategory: ICategoryItem
}

export type IThemeType = 'light' | 'dark' | 'system'
export interface IThemeState {
	themeType: IThemeType
}

/* IPexels接口*/
export interface IPexelsSrc {
	original: string
	large2x: string
	large: string
	medium: string
	small: string
	portrait: string
	landscape: string
	tiny: string
}

export interface IPexelsItemStyle {
	left?: number
	top?: number
}
export interface IPexelsItem {
	id: number
	width: number
	height: number
	url: string
	photographer: string
	photographer_url: string
	photographer_id: number
	avg_color: string
	src: IPexelsSrc
	liked: boolean
	alt: string
	_style?: IPexelsItemStyle | null
}
interface IPageInfo {
	page: number
	per_page: number
	total: number | null
}
export interface IPexelsState {
	pexelsList: IPexelsItem[]
	pageInfo: IPageInfo
}
