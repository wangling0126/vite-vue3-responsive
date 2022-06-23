import { IColumnHeightObjType } from '@/libs/Waterfall/index.vue'

/**
 * 从 itemElement 中抽离出所有的 imgElements
 */
export const getImgElements = (itemElements: HTMLElement[]) => {
	const imgElements: HTMLImageElement[] = []
	itemElements.forEach(el => {
		if (!el) {
			return
		}
		const img = el.querySelector('img')
		img && imgElements.push(img)
	})
	return imgElements
}

/**
 * 生成所有的图片链接数组
 */
export const getAllImg = (imgElements: HTMLImageElement[]) => {
	return imgElements.map(imgElement => {
		return imgElement.src
	})
}

/**
 * 监听图片数组加载完成（通过 promise 完成）
 */
interface IImgResolve {
	img: string
	index: Number
}
export const onComplateImgs = (imgSrcList: string[]) => {
	// promise 集合
	const promiseAlLList: Promise<IImgResolve>[] = []
	// 循环构建 promiseAll
	imgSrcList.forEach((img, index) => {
		promiseAlLList[index] = new Promise((resolve, reject) => {
			const imageObj = new Image()
			imageObj.src = img
			imageObj.onload = () => {
				resolve({
					img,
					index
				})
			}
		})
	})
	return Promise.all(promiseAlLList)
}

/**
 * 返回列高对象中的最小的高度
 */
export const getMinHeight = (columnHeightObj: IColumnHeightObjType) => {
	const columnHeightArr = Object.values(columnHeightObj)
	return Math.min(...columnHeightArr)
}

/**
 * 返回列高对象中的最小高度所在的列
 */
export const getMinHeightColumn = (columnHeightObj: IColumnHeightObjType): number => {
	const minHeight = getMinHeight(columnHeightObj)
	return (
		Object.keys(columnHeightObj).findIndex(key => {
			return columnHeightObj[key] === minHeight
		}) || 0
	)
}
/**
 * 返回列高对象中的最大的高度
 */
export const getMaxHeight = (columnHeightObj: IColumnHeightObjType) => {
	const columnHeightArr = Object.values(columnHeightObj)
	return Math.max(...columnHeightArr)
}
