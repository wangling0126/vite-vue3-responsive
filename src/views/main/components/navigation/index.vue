<template>
	<component :is="componentName" :data="categoreyData"></component>
</template>

<script setup lang="ts" name="navigationCom">
import { isMobileTerminal } from '@/utils/flexible'
import { getCategory } from '@/api/calatory'
import { computed, defineAsyncComponent, ref, Ref } from 'vue'
const componentName = computed(() => {
	const componentFn = isMobileTerminal.value ? () => import('./mobile/index.vue') : () => import('./pc/index.vue')
	return defineAsyncComponent(componentFn)
})
export interface ICategoryItem {
	id?: string
	name?: string
	col?: number
	urlname?: string
}
const categoreyData: Ref<ICategoryItem[]> = ref([])
const getCategoryData = async () => {
	const res = await getCategory()
	const data = res.calagoryList || []
	const all: ICategoryItem = {
		name: '全部'
	}
	data.unshift(all)
	categoreyData.value = data
}
getCategoryData()
</script>

<style scoped lang="scss"></style>
