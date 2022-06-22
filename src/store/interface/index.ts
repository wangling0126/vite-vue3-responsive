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
