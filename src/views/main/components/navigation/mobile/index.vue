<template>
	<div class="bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
		<ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
			<!--			处理滑块-->
			<li
				ref="sliderRef"
				class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
				:style="sliderStyle"
			></li>
			<!--			汉堡按钮-->
			<li
				class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 shadow-l-white dark:shadow-l-zinc"
				@click="openDialog"
			>
				<m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
			</li>
			<!--			items-->
			<li
				v-for="item in data"
				:key="item.name"
				class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
				:class="{
					'nav-active': item.name === store.currentCategoryName,
					'text-zinc-100 ': item.name === store.currentCategoryName
				}"
				@click="e => changeActive(item)"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
	<m-pop-up v-model:visible="dialogVisible">
		<div
			class="text-center text-xs py-1"
			:class="{
				'text-zinc-100 ': item.name === store.currentCategoryName,
				'bg-zinc-900': item.name === store.currentCategoryName
			}"
			v-for="item in data"
			:key="item.name"
			@click="() => changeDialogActive(item)"
		>
			{{ item.name }}
		</div>
	</m-pop-up>
</template>

<script setup lang="ts" name="navigationMobile">
import { nextTick, ref, watch } from 'vue'
import { useCategoryStore } from '@/store/modules/category'
import { ICategoryItem } from '@/store/interface'

const store = useCategoryStore()
const data = store.categorys
const activeIndex = ref(0)

const sliderStyle = ref({
	transform: 'translateX(60px)',
	width: '60px'
})
const setSlideStyle = (activeDom: EventTarget) => {
	const { offsetLeft, offsetWidth } = activeDom as HTMLHtmlElement
	sliderStyle.value = {
		transform: `translateX(${offsetLeft - 10}px)`,
		width: `${offsetWidth}px`
	}
}

watch(
	[() => 'props.data', () => store.currentCategoryIndex],
	() => {
		nextTick(() => {
			const activeDom = document.querySelector('.nav-active')
			if (!activeDom) {
				return
			}
			setSlideStyle(activeDom)
			activeDom.scrollIntoViewIfNeeded(true)
		})
	},
	{
		immediate: true
	}
)
// 底部弹窗是否显示
const dialogVisible = ref(false)
const openDialog = () => {
	dialogVisible.value = true
}

const changeActive = (item: ICategoryItem) => {
	store.currentCategory = item
}

const changeDialogActive = (item: ICategoryItem) => {
	store.currentCategory = item
	dialogVisible.value = false
}
</script>
<script lang="ts">
export default {
	name: 'NavigationMobile'
}
</script>
<style scoped lang="scss"></style>
