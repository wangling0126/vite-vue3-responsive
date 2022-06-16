import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

/**
 * 判断当前是否为移动设备
 */
export const isMobileTerminal = computed(() => {
	// 方式1：一般是根据内核
	// return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	// 	navigator.userAgent
	// )
	const { width } = useWindowSize()
	return width.value < PC_DEVICE_WIDTH
})
