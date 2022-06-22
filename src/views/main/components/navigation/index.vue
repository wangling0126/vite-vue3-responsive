<template>
	<component :is="componentName"></component>
</template>

<script setup lang="ts" name="navigationCom">
import { isMobileTerminal } from '@/utils/flexible'
import { computed, defineAsyncComponent } from 'vue'
import { useCategoryStore } from '@/store/modules/category'

const componentName = computed(() => {
	const componentFn = isMobileTerminal.value ? () => import('./mobile/index.vue') : () => import('./pc/index.vue')
	return defineAsyncComponent(componentFn)
})

const categoryStore = useCategoryStore()
const getCategoryData = () => {
	categoryStore.useCategoryData()
}
getCategoryData()
</script>

<style scoped lang="scss"></style>
